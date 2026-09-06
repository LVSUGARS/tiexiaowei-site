// 活动时间轴自动化:扫描 docs/activity/*.md,按 frontmatter(date/title/type)聚合
// 新增活动只需在目录里新建 md 并写好 frontmatter,时间轴与"历史上的今天"自动更新
import { createContentLoader } from 'vitepress'

export default createContentLoader('activity/*.md', {
  includeSrc: false,
  render: false,
  excerpt: false,
  transformData(data) {
    return data
      .filter((d) => d.url !== '/activity/')
      .map((d) => ({
        url: d.url,
        title: d.frontmatter?.title || d.url,
        date: String(d.frontmatter?.date || ''),
        type: d.frontmatter?.type || '活动'
      }))
      .sort((a, b) => b.date.localeCompare(a.date))
  }
})
