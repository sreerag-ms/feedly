import axios from 'axios';

const fetchImage = () => axios.get('https://picsum.photos/200/300');

export default fetchImage;
