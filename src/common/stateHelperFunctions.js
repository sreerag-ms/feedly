/* eslint-disable prefer-const */
import slugify from 'slugify';

export const addIdToArticles = ({ category, data: dataArray }) =>
  dataArray.map((element) => ({
    ...element,
    id: slugify(element.date + element.time + category + element.url),
    category,
  }));

export const filterAndTrim = (filters, n, allArticles = {}) => {
  const { archived, categories } = filters;
  let res = {};
  categories.forEach((val) => {
    if ((allArticles[val]?.length ?? 0) > 0)
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
  allAsArray(filterAndTrim(filters, 100, allArticles));
