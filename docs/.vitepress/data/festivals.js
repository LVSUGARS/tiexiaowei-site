// 固定公历节日表:只有节日当天显示“今日”徽章。
// 农历节日(春节、端午、中秋等)日期每年变化,待确定可靠年历来源后再接入。
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
  { name: '国家公祭日', md: '12-13', emoji: '🕯️', hue: 215 }
]
