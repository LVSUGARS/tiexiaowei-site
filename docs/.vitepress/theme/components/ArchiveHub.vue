<script setup>
import { onMounted, ref } from 'vue'
import ActivityTimeline from './ActivityTimeline.vue'
import ArticleList from './ArticleList.vue'
import ResourcesList from './ResourcesList.vue'
import TagsIndex from './TagsIndex.vue'

const tabs = [
  { id: 'activity', label: '活动存档', icon: '🎪' },
  { id: 'resources', label: '资料库', icon: '📦' },
  { id: 'library', label: '文章库', icon: '🗂️' },
  { id: 'tags', label: '主题标签', icon: '🏷️' },
  { id: 'stories', label: '口述史', icon: '🎙️' }
]

const active = ref('activity')

function selectTab(id, updateUrl = true) {
  active.value = id
  if (updateUrl && typeof window !== 'undefined') {
    window.history.replaceState(null, '', `${window.location.pathname}#${id}`)
  }
}

onMounted(() => {
  const hash = window.location.hash.slice(1)
  if (tabs.some((tab) => tab.id === hash)) selectTab(hash, false)
})
</script>

<template>
  <section class="archive-hub" aria-label="档案馆内容">
    <div class="archive-tabs" role="tablist" aria-label="档案馆栏目">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="archive-tab"
        :class="{ active: active === tab.id }"
        type="button"
        role="tab"
        :aria-selected="active === tab.id"
        :aria-controls="`archive-panel-${tab.id}`"
        @click="selectTab(tab.id)"
      >
        <span aria-hidden="true">{{ tab.icon }}</span>
        {{ tab.label }}
      </button>
    </div>

    <div v-if="active === 'activity'" id="archive-panel-activity" class="archive-panel" role="tabpanel">
      <p class="archive-panel-lead">每场活动都记录在案，包括没有公开发布的拍摄任务。</p>
      <ActivityTimeline />
      <p class="archive-panel-link"><a href="/activity/">打开活动存档完整页 →</a></p>
    </div>

    <div v-else-if="active === 'resources'" id="archive-panel-resources" class="archive-panel" role="tabpanel">
      <p class="archive-panel-lead">素材包、学习资料与培训产出，按条目持续沉淀。</p>
      <ResourcesList />
      <p class="archive-panel-link"><a href="/resources/">打开资料库完整页 →</a></p>
    </div>

    <div v-else-if="active === 'library'" id="archive-panel-library" class="archive-panel" role="tabpanel">
      <p class="archive-panel-lead">公众号、校园号等平台的发布目录，按年份自动整理。</p>
      <ArticleList />
      <p class="archive-panel-link"><a href="/library/">打开文章库完整页 →</a></p>
    </div>

    <div v-else-if="active === 'tags'" id="archive-panel-tags" class="archive-panel" role="tabpanel">
      <p class="archive-panel-lead">用一个标签串起活动与资料，索引随 frontmatter 自动更新。</p>
      <TagsIndex />
      <p class="archive-panel-link"><a href="/tags/">打开主题标签完整页 →</a></p>
    </div>

    <div v-else id="archive-panel-stories" class="archive-panel" role="tabpanel">
      <p class="archive-panel-lead">记录成员经验与换届记忆，内容经本人确认后发布。</p>
      <div class="archive-story-placeholder">
        <VPBadge type="warning">待采写</VPBadge>
        <strong>第一篇访谈</strong>
        <span>欢迎自荐，或向维护者推荐采访对象。</span>
      </div>
      <p class="archive-panel-link"><a href="/stories/">打开口述史完整页 →</a></p>
    </div>
  </section>
</template>
