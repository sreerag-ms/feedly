const addId = (categoryNews) => {
  const dataArray = categoryNews.data;
  const idDataObj = {};

  dataArray.forEach((element) => {
    const key = btoa(element.date + element.time + element.title.slice(-10));
    idDataObj[key] = { ...element, id: key, category: categoryNews.category };
  });

  return { ...categoryNews, data: idDataObj };
};

const filterFive = (allNews, n) =>
  allNews.map((val) => {
    const trimm = Object.keys(val.data)
      .slice(0, n)
      .map((elem) => val.data[elem]);
    return { ...val, data: trimm };
  });

const filterArticles = (articles, avoidId, n) => {
  const res = [];
  Object.keys(articles).forEach((val) => {
    if (avoidId !== val) res.push(articles[val]);
  });

  return n >= res.length ? res : res.slice(0, n);
};
const helperFunctions = { addId, filterFive, filterArticles };
export default helperFunctions;
