// 节日表:只有节日当天显示“今日”徽章。
// 农历日期由 Intl 中国农历日历计算;每年可用香港天文台天文年历抽查(官网按年更新,链接随年份更换):
// https://www.hko.gov.hk/en/gts/astron2026/almanac2026_index.htm
export const festivals = [
  { name: '元旦', key: 'festival-new-year', md: '01-01', emoji: '🎉', hue: 205 },
  { name: '国际妇女节', key: 'festival-womens-day', md: '03-08', emoji: '🌷', hue: 330 },
  { name: '劳动节', key: 'festival-labor-day', md: '05-01', emoji: '🛠️', hue: 18 },
  { name: '五四青年节', key: 'festival-youth-day', md: '05-04', emoji: '🔥', hue: 8 },
  { name: '儿童节', key: 'festival-childrens-day', md: '06-01', emoji: '🎈', hue: 350 },
  { name: '建党节', key: 'festival-party-day', md: '07-01', emoji: '⭐', hue: 5 },
  { name: '建军节', key: 'festival-army-day', md: '08-01', emoji: '🫡', hue: 120 },
  { name: '教师节', key: 'festival-teacher-day', md: '09-10', emoji: '🍎', hue: 25 },
  { name: '国庆节', key: 'festival-national-day', md: '10-01', emoji: '🇨🇳', hue: 0 },
  { name: '国家公祭日', key: 'festival-national-memorial-day', md: '12-13', emoji: '🕯️', hue: 215 },
  { name: '春节', key: 'festival-spring-festival', lunar: [1, 1], emoji: '🧧', hue: 8 },
  { name: '元宵节', key: 'festival-lantern-festival', lunar: [1, 15], emoji: '🏮', hue: 350 },
  { name: '端午节', key: 'festival-dragon-boat', lunar: [5, 5], emoji: '粽', hue: 145 },
  { name: '七夕', key: 'festival-qixi', lunar: [7, 7], emoji: '💫', hue: 285 },
  { name: '中秋节', key: 'festival-mid-autumn', lunar: [8, 15], emoji: '🌕', hue: 42 },
  { name: '重阳节', key: 'festival-double-ninth', lunar: [9, 9], emoji: '🌼', hue: 28 },
  { name: '腊八节', key: 'festival-laba', lunar: [12, 8], emoji: '🥣', hue: 30 }
]

export function getChineseLunarMonthDay(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-u-ca-chinese', {
    timeZone: 'Asia/Shanghai',
    month: 'numeric',
    day: 'numeric'
  }).formatToParts(date)
  const month = parts.find((part) => part.type === 'month')?.value || ''
  const day = Number(parts.find((part) => part.type === 'day')?.value)
  if (!month || month.endsWith('bis') || !Number.isInteger(day)) return null
  return [Number(month), day]
}

export function getFestivalsOnDate(date = new Date()) {
  const mmdd = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Shanghai',
    month: '2-digit',
    day: '2-digit'
  }).format(date)
  const lunar = getChineseLunarMonthDay(date)
  return festivals.filter((festival) => {
    const solarMatch = festival.md === mmdd
    const lunarMatch = festival.lunar && lunar && festival.lunar[0] === lunar[0] && festival.lunar[1] === lunar[1]
    return solarMatch || lunarMatch
  })
}
