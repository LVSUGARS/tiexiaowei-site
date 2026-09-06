---
title: 站点维护人员
---

<script setup>
import { VPTeamMembers, VPTeamPage, VPTeamPageTitle, VPTeamPageSection } from 'vitepress/theme'
import { maintainers, contributors } from '../.vitepress/data/maintainers'
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>站点维护人员</template>
    <template #lead>这座档案馆由当届成员轮值维护,换届交接有完整手册。页面结构复刻自 <a href="https://whudays.org/maintainer/">WHUDAYS 维护者页</a>——同样由学生团队运营的存档站。</template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>日常维护</template>
    <template #lead>负责内容更新、文章库归档与站点部署。新成员补录只改 docs/.vitepress/data/maintainers.js 一个文件。</template>
    <template #members>
      <VPTeamMembers size="small" :members="maintainers" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>站点建设贡献者</template>
    <template #lead>感谢所有为这座档案馆提供资料和支持的朋友。</template>
    <template #members>
      <VPTeamMembers size="small" :members="contributors" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>

## 投稿与贡献

欢迎为这座档案馆添砖加瓦,两条路径任选:

- **不会 Markdown、不用 Git**:把材料(Word、照片、链接均可)发给任意一位维护者,说明想放在哪个栏目,维护者会代为上架——档案馆不设门槛
- **会用 Markdown + Git**:直接向 GitHub 仓库提 PR(🚧 仓库地址待补),请先阅读[收录指南](/resources/contribute)与[维护指南](/maintainer/guide)

联系方式:<VPBadge type="warning">待补</VPBadge> 维护者 QQ / 邮箱,经本人同意后展示。

## 资料贡献者

| 名字 | 贡献领域 |
| --- | --- |
| 🚧 待补 | 示例:二十四节气专题素材整理 |
| 🚧 待补 | 示例:2026 迎新晚会拍摄记录 |
| 🚧 待补 | 示例:校园号文章归档 |

## 页面历史

🚧 每页底部的"最后编辑于 / 查看完整历史"(GitChangelog)将在 git 仓库建立后(M4)接入——档案馆的每一笔变更都值得留痕。
