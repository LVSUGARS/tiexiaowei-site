// 节日表:只有节日当天显示“今日”徽章。
// 农历日期由 Intl 中国农历日历计算;每年可用香港天文台对照表抽查:
// https://www.hko.gov.hk/en/gts/time/calendar/index.html
export const festivals = [
  { name: '元旦', md: '01-01', emoji: '🎉', hue: 205 },
  { name: '国际妇女节', md: '03-08', emoji: '🌷', hue: 330 },
  { name: '劳动节', md: '05-01', emoji: '🛠️', hue: 18 },
  { name: '五四青年节', md: '05-04', emoji: '🔥', hue: 8 },
  { name: '儿童节', md: '06-01', emoji: '🎈', hue: 350 },
  { name: '建党节', md: '07-01', emoji: '⭐', hue: 5 },
  { name: '建军节', md: '08-01', emoji: '🫡', hue: 120 },
  { name: '教师节', md: '09-10', emoji: '🍎', hue: 25 },
  { name: '国庆节', md: '10-01', emoji: '🇨🇳', hue: 0 },
  { name: '国家公祭日', md: '12-13', emoji: '🕯️', hue: 215 },
  { name: '春节', lunar: [1, 1], emoji: '🧧', hue: 8 },
  { name: '元宵节', lunar: [1, 15], emoji: '🏮', hue: 350 },
  { name: '端午节', lunar: [5, 5], emoji: '粽', hue: 145 },
  { name: '七夕', lunar: [7, 7], emoji: '💫', hue: 285 },
  { name: '中秋节', lunar: [8, 15], emoji: '🌕', hue: 42 },
  { name: '重阳节', lunar: [9, 9], emoji: '🌼', hue: 28 },
  { name: '腊八节', lunar: [12, 8], emoji: '🥣', hue: 30 }
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
