import axios from "axios";

const YOUTUBE_API_BASE_URL = 'https://youtube.googleapis.com/youtube/v3';

export default class Api {
  constructor() {
    this.httpClient = axios.create({
      baseURL: YOUTUBE_API_BASE_URL,
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY }
    });
  }

  async getVideos(keyword, pageToken) {
    const data = await this.httpClient.get('search', {
      params: {
        part: 'snippet',
        maxResults: 20,
        type: 'video',
        q: `개발 ${keyword}`,
        pageToken: pageToken,
      }
    }).then((res) => res.data);
    return data;
  }

  async getChannel(channelId) {
    const item = await this.httpClient.get('channels', {
      params: {
        part: 'snippet',
        id: channelId,
      }
    }).then((res) => res.data.items[0]);
    return item;
  }

  async getVideo(videoId) {
    const item = await this.httpClient.get('videos', {
      params: {
        part: 'snippet',
        id: videoId,
      }
    }).then((res) => res.data.items[0]);
    return item;
  }

  async getChannelVideos(channelId) {
    const videos = await this.httpClient.get('search', {
      params: {
        part: 'snippet',
        channelId: channelId,
      }
    }).then((res) => res.data.items);
    return videos;
  }
}


