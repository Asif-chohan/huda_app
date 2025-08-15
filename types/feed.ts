export type PostType = {
  id: string;
  username: string;
  tag: string;
  tagColor: string;
  time: string;
  image: any;
  hashtag: string;
  title: string;
  description: string;
  likes: number;
  comments: number;
  activityType?: string;
  type?: string;
  contentType?: string;
  platform?: string;
    status?: "finished" | "want" | null; 
};