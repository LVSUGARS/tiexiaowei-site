// 外部系统入口 —— 全站唯一配置点
//
// 主应用(系统端)由开发同学部署维护:https://njrts.txwrmtzx.top/
// 两个公开路由已在主应用门户页确认:/member/ 成员端、/register/ 新生报名
// 路由如有调整,只需修改本文件:顶部导航、首页"系统入口"卡片、招新页 CTA 全部自动生效。
// 注意:后台管理(/admin/)为管理员专用入口,不对公开站展示,此处不维护该链接。
export const APP_BASE = 'https://njrts.txwrmtzx.top'

export const memberUrl = `${APP_BASE}/member/`
export const signupUrl = `${APP_BASE}/register/`

export const appLinks = [
  {
    key: 'member',
    icon: '🧑‍💻',
    title: '成员端',
    desc: '成员登录 · 稿件与排班 · 素材库',
    url: memberUrl
  },
  {
    key: 'signup',
    icon: '📝',
    title: '新生报名',
    desc: '加入铁小微 · 在线填写报名',
    url: signupUrl
  }
]
