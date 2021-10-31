import axios from 'axios';

const dummyApiUrl = process.env.REACT_APP_WEBHOOK_URL;

const send = (data) => axios.post(dummyApiUrl, data);

const dummyPost = { send };
export default dummyPost;
