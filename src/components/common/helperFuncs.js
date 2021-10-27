const addId = (categoryNews) => {
  const dataArray = categoryNews.data;
  const idDataObj = {};

  dataArray.forEach((element) => {
    const key = encodeURIComponent(element.date + element.time + element.title.slice(-10));
    idDataObj[key] = { ...element, id: key };
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
const helperFunctions = { addId, filterFive };
export default helperFunctions;
