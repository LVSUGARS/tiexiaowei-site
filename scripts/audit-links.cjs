#!/usr/bin/env node
// 站点自检脚本:检查构建产物中的内链死链与 CSV 目录表格式
// 用法:先 pnpm build,再 node scripts/audit-links.cjs
const fs = require('fs')
const path = require('path')

const dist = path.join(__dirname, '..', 'docs', '.vitepress', 'dist')
if (!fs.existsSync(dist)) {
  console.error('未找到构建产物,请先执行 pnpm build')
  process.exit(1)
}

// 1. 收集所有页面
const pages = []
;(function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f)
    if (fs.statSync(p).isDirectory()) walk(p)
    else if (f.endsWith('.html')) pages.push(p)
  }
})(dist)

const pageSet = new Set(pages.map((p) => p.split(path.sep).join('/')))

// 2. 提取所有内链
const hrefs = new Set()
const re = /href="(\/[^"#]*)"/g
for (const p of pages) {
  const html = fs.readFileSync(p, 'utf8')
  let m
  while ((m = re.exec(html))) hrefs.add(m[1])
}

// 3. 解析每个内链,判断目标是否存在
function resolve(href) {
  let clean = href.split('?')[0]
  const candidates = []
  candidates.push(path.join(dist, clean)) // 原样(如 .svg、.html 结尾)
  if (clean.endsWith('/')) {
    candidates.push(path.join(dist, clean, 'index.html'))
  } else if (!clean.endsWith('.html')) {
    candidates.push(path.join(dist, clean + '.html'))
    candidates.push(path.join(dist, clean, 'index.html'))
  }
  return candidates.some((c) => pageSet.has(c.split(path.sep).join('/')) || fs.existsSync(c))
}

const broken = []
for (const h of [...hrefs].sort()) {
  if (h.startsWith('/assets/') || h.startsWith('/@')) continue
  if (!resolve(h)) broken.push(h)
}

console.log(`页面数: ${pages.length}`)
console.log(`内部链接: ${hrefs.size}`)
console.log(broken.length ? `❌ 死链 ${broken.length} 个:` : '✅ 无死链')
broken.forEach((b) => console.log('  BROKEN:', b))

// 4. CSV 目录表校验(当前 8 列;兼容过渡期的 7 列旧表)
const csvPath = path.join(__dirname, '..', 'data', 'article-catalog.template.csv')
let csvOk = true
if (fs.existsSync(csvPath)) {
  const lines = fs.readFileSync(csvPath, 'utf8').split(/\r?\n/).filter(Boolean)
  // 简易带引号 CSV 解析
  function parseLine(line) {
    const fields = []
    let cur = ''
    let inQ = false
    for (let i = 0; i < line.length; i++) {
      const c = line[i]
      if (inQ) {
        if (c === '"' && line[i + 1] === '"') { cur += '"'; i++ }
        else if (c === '"') inQ = false
        else cur += c
      } else if (c === '"') inQ = true
      else if (c === ',') { fields.push(cur); cur = '' }
      else cur += c
    }
    fields.push(cur)
    return fields
  }
  const header = parseLine(lines[0])
  const legacyHeader = ['标题', '发布日期', '原文链接', '平台', '分类', '作者', '状态']
  const currentHeader = [...legacyHeader, 'calendar_key']
  const headerText = header.join('|')
  if (headerText !== legacyHeader.join('|') && headerText !== currentHeader.join('|')) {
    csvOk = false
    console.log('❌ CSV 表头必须为 7 列旧格式或 8 列含 calendar_key 的新格式')
  }
  lines.forEach((line, i) => {
    const n = parseLine(line).length
    if (n !== legacyHeader.length && n !== currentHeader.length) {
      csvOk = false
      console.log(`❌ CSV 第 ${i + 1} 行列数 ${n}，应为 7 或 8`)
    }
  })
  if (csvOk) console.log(`✅ CSV 格式正确(${lines.length - 1} 条数据行,${header.length} 列表头)`)
}

process.exit(broken.length || !csvOk ? 1 : 0)
