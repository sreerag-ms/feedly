function name(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function subTitleGenerator(article) {
  return `${article.author} ${article.time} ${article.date}`;
}

export { name, subTitleGenerator };
