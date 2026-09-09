export function findCalendarArticle(articles, calendarKey) {
  if (!calendarKey) return null

  return [...articles]
    .filter(
      (article) =>
        article.calendarKey === calendarKey &&
        /^\d{4}-\d{2}-\d{2}$/.test(article.date) &&
        /^https?:\/\//.test(article.url)
    )
    .sort((a, b) => b.date.localeCompare(a.date))[0] || null
}
