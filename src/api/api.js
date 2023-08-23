import axios from "axios";

export default class Api {
  // constructor() {
  // this.httpClient = axios.create({
  //   baseURL: 'https://www.googleapis.com/youtube/v3',
  //   params: { key: process.env.REACT_APP_YOUTUBE_API_KEY }
  // });
  // }

  async getVideos(keyword) {
    const items = await this.httpClient.get('search', {
      params: {
        part: 'snippet',
        maxResults: 20,
        type: 'video',
        q: `개발 ${keyword}`,
      }
    }).then((res) => res.data.items);
    return items;

  }

  async getDummyVideos(keyword) {
    const items = await axios
      .get("data/videosDummy.json")
      .then((res) => res.data.items);
    return items;
  }

  async getDummyChannel() {
    const item = await axios
      .get("channelDummy.json")
      .then((res) => res.data.items[0]);
    return item;
  }

  async getDummyVideo() {
    const item = await axios
      .get("videoDummy.json")
      .then((res) => res.data.items[0]);
    return item;
  }
}


