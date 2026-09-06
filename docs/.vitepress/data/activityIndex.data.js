// 活动时间轴自动化:扫描 docs/activity/*.md,按 frontmatter(date/title/type)聚合
// 新增活动只需在目录里新建 md 并写好 frontmatter,时间轴与"历史上的今天"自动更新
// 注意:主题组件里拿到的可能是原始加载形态(frontmatter 嵌套),务必经 normalize() 再使用
import { createContentLoader } from 'vitepress'

export default createContentLoader('activity/*.md', {
  includeSrc: false,
  render: false,
  excerpt: false,
  transformData(data) {
    return normalize(data)
  }
})

// 防御性规范化:兼容原始形态(frontmatter 嵌套、url 带 .html)与转换后形态
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
