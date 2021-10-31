/* eslint-disable prefer-const */
import slugify from 'slugify';

export const addIdToArticles = ({ category, data: dataArray }) =>
  dataArray.map((element) => ({
    ...element,
    id: slugify(element.date + element.time + element.title),
    category,
  }));

export const filterFive = (filters, n, allArticles = {}) => {
  const { archived, categories } = filters;
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
};

export const allAsArray = (allArticles = {}) =>
  Object.values(allArticles).reduce((acc, val) => [...acc, ...val], []);

export const filterAll = (allArticles = {}, filters) =>
  allAsArray(filterFive(filters, 100, allArticles));
