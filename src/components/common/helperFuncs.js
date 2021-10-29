/* eslint-disable prefer-const */
import slugify from 'slugify';

const addId = (categoryNews) => {
  const dataArray = categoryNews.data;
  const idDataObj = {};
  let idDataArray = [];

  dataArray.forEach((element) => {
    const key = slugify(element.date + element.time + element.title);
    idDataObj[key] = { ...element, id: key, category: categoryNews.category };
    idDataArray = [...idDataArray, { ...element, id: key, category: categoryNews.category }];
  });

  return [{ ...categoryNews, data: idDataObj }, idDataArray];
};

const filterFive = (filters, n, allArticles = {}) => {
  // eslint-disable-next-line no-unused-vars
  const { archived, categories } = filters;

  // const includedCategories = allNews.filter((val) => categories.includes(val.category));
  let res = {};
  categories.forEach((val) => {
    if (archived) res[val] = allArticles[val]?.slice(0, n) ?? [];
    else
      res[val] =
        allArticles[val]
          .filter((elem) => new Date(elem.date.split(',')[0]).getDate() === new Date().getDate())
          .slice(0, n) ?? [];
  });
  return res;

  // return includedCategories.map((val) => {
  //   let trimm = [];
  //   if (!archived) {
  //     trimm = Object.keys(val.data)
  //       .filter(
  //         (elem) => new Date(val.data[elem].date.split(',')[0]).getDate() === new Date().getDate(),
  //       )
  //       .map((elem) => val.data[elem]);
  //   } else {
  //     trimm = Object.keys(val.data)
  //       .slice(0, n)
  //       .map((elem) => val.data[elem]);
  //   }
  //   return { ...val, data: trimm };
  // });
};
const filterArticles = (articles, avoidId, n) => {
  const res = [];
  Object.keys(articles).forEach((val) => {
    if (avoidId !== val) res.push(articles[val]);
  });

  return n >= res.length ? res : res.slice(0, n);
};
const helperFunctions = { addId, filterFive, filterArticles };
export default helperFunctions;
