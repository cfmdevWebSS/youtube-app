
import axios from 'axios';

const KEY = 'AIzaSyB7WqFv2WPoV451kb-iXFyvjmHG4LlFtCc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});