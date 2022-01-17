{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://...',
      data: 'byte-data...',
    };
  }

  // K를 T 에 key 타입으로 제한
  //   type Pick<T, K extends keyof T> = {
  //     [P in K]: T[P];
  //   };

  type VideoMetadata = Pick<Video, 'title' | 'id'>;

  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: 'title',
    };
  }
}
