export interface IListVideoRepository {
  searchVideos(value: string, nextPageToken?: string): Promise<any>;
}
