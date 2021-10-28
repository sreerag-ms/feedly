import axios from 'axios';

const inshortsNewsApi = 'https://inshortsapi.vercel.app/news?';
const category = (topic) => axios.get(`${inshortsNewsApi}category=${topic}`);
const all = () => category('all');
const readmoreApi = (url) => axios.get(url);
const inshortsApi = { category, all, readmoreApi };
export default inshortsApi;
