// 活动时间轴自动化:扫描 docs/activity/*.md,按 frontmatter(date/title/type)聚合
// 新增活动只需在目录里新建 md 并写好 frontmatter,时间轴与"历史上的今天"自动更新
// 注意:主题组件里拿到的可能是原始加载形态(frontmatter 嵌套),务必经 normalize() 再使用
import { createContentLoader } from 'vitepress'
import { normalize } from './activityNormalize.js'

export default createContentLoader('activity/*.md', {
  includeSrc: false,
  render: false,
  excerpt: false,
  transformData(data) {
    return normalize(data)
  }
})
