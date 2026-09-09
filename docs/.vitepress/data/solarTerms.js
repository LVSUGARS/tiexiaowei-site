// 二十四节气近似日期表(每年 ±1 天浮动,精确排布请以天文年历为准)
// md: 节气当天(月-日),只有当天会显示“今日”徽章
// hue: 该节气的氛围色相(背景微调用)——春嫩绿 / 夏青蓝 / 秋暖橙 / 冬深蓝
export const solarTerms = [
  { name: '小寒', key: 'solar-minor-cold', md: '01-05', emoji: '❄️', hue: 225 },
  { name: '大寒', key: 'solar-major-cold', md: '01-20', emoji: '🧊', hue: 228 },
  { name: '立春', key: 'solar-start-of-spring', md: '02-04', emoji: '🌱', hue: 150 },
  { name: '雨水', key: 'solar-rain-water', md: '02-19', emoji: '💧', hue: 160 },
  { name: '惊蛰', key: 'solar-awakening-of-insects', md: '03-05', emoji: '🌩️', hue: 152 },
  { name: '春分', key: 'solar-spring-equinox', md: '03-21', emoji: '🌸', hue: 145 },
  { name: '清明', key: 'solar-pure-brightness', md: '04-05', emoji: '🌿', hue: 140 },
  { name: '谷雨', key: 'solar-grain-rain', md: '04-20', emoji: '🌾', hue: 135 },
  { name: '立夏', key: 'solar-start-of-summer', md: '05-06', emoji: '🌞', hue: 175 },
  { name: '小满', key: 'solar-grain-full', md: '05-21', emoji: '🫘', hue: 180 },
  { name: '芒种', key: 'solar-grain-in-ear', md: '06-06', emoji: '🌾', hue: 185 },
  { name: '夏至', key: 'solar-summer-solstice', md: '06-21', emoji: '☀️', hue: 190 },
  { name: '小暑', key: 'solar-minor-heat', md: '07-07', emoji: '🍉', hue: 195 },
  { name: '大暑', key: 'solar-major-heat', md: '07-23', emoji: '🌴', hue: 200 },
  { name: '立秋', key: 'solar-start-of-autumn', md: '08-07', emoji: '🍂', hue: 45 },
  { name: '处暑', key: 'solar-end-of-heat', md: '08-23', emoji: '🌤️', hue: 35 },
  { name: '白露', key: 'solar-white-dew', md: '09-07', emoji: '🌙', hue: 30 },
  { name: '秋分', key: 'solar-autumn-equinox', md: '09-23', emoji: '🍁', hue: 28 },
  { name: '寒露', key: 'solar-cold-dew', md: '10-08', emoji: '🌫️', hue: 25 },
  { name: '霜降', key: 'solar-frost-descent', md: '10-23', emoji: '❄️', hue: 20 },
  { name: '立冬', key: 'solar-start-of-winter', md: '11-07', emoji: '🧤', hue: 240 },
  { name: '小雪', key: 'solar-minor-snow', md: '11-22', emoji: '⛄', hue: 235 },
  { name: '大雪', key: 'solar-major-snow', md: '12-07', emoji: '🌨️', hue: 230 },
  { name: '冬至', key: 'solar-winter-solstice', md: '12-21', emoji: '🥟', hue: 225 }
]

// 用北京时间月日计算当前节气,避免访客设备时区在零点附近造成错位。
export function getBeijingMonthDay(date = new Date()) {
  const parts = new Intl.DateTimeFormat('zh-CN', {
    timeZone: 'Asia/Shanghai',
    month: '2-digit',
    day: '2-digit'
  }).formatToParts(date)
  const month = parts.find((part) => part.type === 'month')?.value
  const day = parts.find((part) => part.type === 'day')?.value
  return `${month}-${day}`
}

export function getSolarTermForMonthDay(mmdd) {
  const sorted = [...solarTerms].sort((a, b) => a.md.localeCompare(b.md))
  let current = sorted[sorted.length - 1] // 岁末年初兜底:冬至
  for (const term of sorted) {
    if (term.md <= mmdd) current = term
  }
  return current
}

export function getCurrentSolarTerm(date = new Date()) {
  return getSolarTermForMonthDay(getBeijingMonthDay(date))
}

// 只在节气当天返回记录,其他日期返回 null。
export function getSolarTermOnDate(date = new Date()) {
  const mmdd = getBeijingMonthDay(date)
  return solarTerms.find((term) => term.md === mmdd) || null
}
