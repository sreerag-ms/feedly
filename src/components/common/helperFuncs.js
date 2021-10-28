/* eslint-disable prefer-const */
import slugify from 'slugify';

const addId = (categoryNews) => {
  const dataArray = categoryNews.data;
  const idDataObj = {};

  dataArray.forEach((element) => {
    const key = slugify(element.date + element.time + element.title);
    idDataObj[key] = { ...element, id: key, category: categoryNews.category };
  });

  return { ...categoryNews, data: idDataObj };
};

const filterFive = (allNews, filters, n) => {
  let archived;
  let categories;
  // eslint-disable-next-line no-unused-vars
  ({ archived, categories } = filters);

  const includedCategories = allNews.filter((val) => categories.includes(val.category));

  return includedCategories.map((val) => {
    let trimm = [];
    if (!archived) {
      trimm = Object.keys(val.data)
        .filter(
          (elem) => new Date(val.data[elem].date.split(',')[0]).getDate() === new Date().getDate(),
        )
        .map((elem) => val.data[elem]);
      console.log('non archived', trimm);
    } else {
      // Object.keys(val.data).forEach((elem) => {
      //   console.log(val.data[elem].date);
      // });
      console.log('all archived');

      trimm = Object.keys(val.data)
        .slice(0, n)
        .map((elem) => val.data[elem]);
    }
    return { ...val, data: trimm };
  });
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
