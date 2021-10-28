import axios from 'axios';

const inshortsNewsApi = 'https://inshortsapi.vercel.app/news?';
const category = (topic) => axios.get(`${inshortsNewsApi}category=${topic}`);
const all = () => category('all');
const readmore = (url) => axios.get(url);
const inshortsApi = { category, all, readmore };
export default inshortsApi;
