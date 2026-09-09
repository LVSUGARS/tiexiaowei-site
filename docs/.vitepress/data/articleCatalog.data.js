// 文章目录数据:以仓库根目录 data/article-catalog.template.csv 为唯一源
import { readFile } from 'node:fs/promises'

const legacyHeader = ['标题', '发布日期', '原文链接', '平台', '分类', '作者', '状态']
const expectedHeader = [...legacyHeader, 'calendar_key']

function parseCsv(text) {
  const rows = []
  let row = []
  let field = ''
  let quoted = false

  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    if (quoted) {
      if (char === '"' && text[i + 1] === '"') {
        field += '"'
        i++
      } else if (char === '"') {
        quoted = false
      } else {
        field += char
      }
    } else if (char === '"') {
      quoted = true
    } else if (char === ',') {
      row.push(field.trim())
      field = ''
    } else if (char === '\n') {
      row.push(field.trim())
      rows.push(row)
      row = []
      field = ''
    } else if (char !== '\r') {
      field += char
    }
  }

  if (field || row.length) {
    row.push(field.trim())
    rows.push(row)
  }
  return rows
}

export default {
  watch: '../../../data/article-catalog.template.csv',
  async load([catalogPath]) {
    const rows = parseCsv(await readFile(catalogPath, 'utf8'))
    const header = rows.shift() || []
    const isLegacyHeader = header.join('|') === legacyHeader.join('|')
    const isCurrentHeader = header.join('|') === expectedHeader.join('|')
    if (!isLegacyHeader && !isCurrentHeader) {
      throw new Error('文章目录 CSV 表头必须为: 标题,发布日期,原文链接,平台,分类,作者,状态[,calendar_key]')
    }

    return rows
      .filter((row) => row.length === legacyHeader.length || row.length === expectedHeader.length)
      .map(([title, date, url, platform, category, author, status, calendarKey = '']) => ({
        title,
        date,
        url,
        platform,
        category,
        author,
        status,
        calendarKey
      }))
      .filter((article) => /^\d{4}-\d{2}-\d{2}$/.test(article.date) && /^https?:\/\//.test(article.url))
      .sort((a, b) => b.date.localeCompare(a.date))
  }
}
