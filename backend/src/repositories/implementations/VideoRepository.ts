import { IListVideoRepository } from "../IVideoRepository";
import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.API_KEY;

export class VideoRepository implements IListVideoRepository {
  async searchVideos(value: string, pageToken?: string): Promise<any> {
    if (!pageToken) pageToken = "";

    const listOfVideos = await axios({
      method: "get",
      url: ` https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${value}&key=${apiKey}&maxResults=10&pageToken=${pageToken}`,
    });

    const nextPageTokenValue = {
      nextPageToken: listOfVideos.data.nextPageToken,
    };

    const result = listOfVideos.data.items.map((video: any) => {
      return {
        videoId: video.id.videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnails: video.snippet.thumbnails,
      };
    });
    return { ...nextPageTokenValue, result };
  }
}
