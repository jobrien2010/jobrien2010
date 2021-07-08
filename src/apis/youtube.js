import axios from 'axios';

const KEY = 'AIzaSyA5Nr11jFPuCN115YZ1HomjRxDRgMZ2b2Y';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})