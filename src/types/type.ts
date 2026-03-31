export type PoemOrStoryType = {
  id: number;
  author?: string;
  hideAuthorName?: boolean;
  penname?: string;
  social?: {
    ao?: string;
    ig?: string;
    fb?: string;
    website?: string;
    yt?: string;
  };
  hasFormatting?: boolean;
  context?: string;
  title: string;
  content: string;
  place?: 1 | 2;
};

export type FilkType = PoemOrStoryType & {
  originalSongTitle: string;
  originalArtist: string;
  originalSongUrl: string;
  timestamps?: string | string[];
  videoPath?: string;
  audioPath?: string;
  hasVideo?: boolean;
  hasVideoOnYT?: boolean;
  ytVideoUrl?: string;
  hasAudio?: boolean;
};
