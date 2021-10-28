function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function subTitleGenerator(article) {
  return `${article.author} ${article.time} ${article.date}`;
}
const commonFunctions = { capitalize, subTitleGenerator };
export default commonFunctions;
