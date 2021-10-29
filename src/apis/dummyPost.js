import axios from 'axios';

const dummyApiUrl = 'https://webhook.site/9f54337a-cb5f-43e8-bb10-6caa824fb55a';

const send = (data) => axios.post(dummyApiUrl, data);

const dummyPost = { send };
export default dummyPost;
