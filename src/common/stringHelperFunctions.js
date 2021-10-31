export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const subTitleGenerator = (article) => `${article.author} ${article.time} ${article.date}`;
export const articleTrimmer = (str, wordCount, trimmEnding = '....') => {
  const wordArray = str.split(' ');
  if (wordArray.length < wordCount) return str;
  return `${wordArray.slice(0, wordCount).join(' ')} ${trimmEnding}`;
};
