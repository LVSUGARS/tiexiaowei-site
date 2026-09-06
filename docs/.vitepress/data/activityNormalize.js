// 防御性规范化:兼容原始形态(frontmatter 嵌套、url 带 .html)与转换后形态
// 独立成普通模块:.data.js 数据加载文件被组件导入时仅暴露 data,其他具名导出在构建期不可见
export function normalize(items) {
  return (Array.isArray(items) ? items : [])
    .map((d) => ({
      url: d.url || '',
      title: d.frontmatter?.title || d.title || d.url,
      date: String(d.frontmatter?.date || d.date || ''),
      type: d.frontmatter?.type || d.type || '活动'
    }))
    .filter((d) => d.date && !d.url.endsWith('/activity/'))
    .sort((a, b) => b.date.localeCompare(a.date))
}
