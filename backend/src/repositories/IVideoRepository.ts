export interface IListVideoRepository {
  searchVideos(value: string, nextPageToken?: string): Promise<any>;
}

export interface IDetailVideoRepository extends IListVideoRepository {
  details(id: string): Promise<any>;
}
