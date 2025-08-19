


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





export const dummyPosts: PostType[] = [
  {
    id: "1",
    username: "janny",
    tag: "MOVIE BUFF",
    tagColor: "green",
    time: "2 hrs ago",
    image: require("@/assets/images/image.png"),
    hashtag: "#beetlejuice",
    title: "Beetlejuice Beetlejuice",
    description:
      "Just watched Beetlejuice and loved it! 🎉 Michael Keaton is hilarious, and the visuals are so quirky",
    likes: 284,
    comments: 68,
    platform: "Netflix",
    status: null,
  },
  {
    id: "2",
    username: "janny",
    tag: "MUSIC LOVER",
    tagColor: "purple",
    time: "2 hrs ago",
    image: require("@/assets/images/image.png"),
    hashtag: "#theweeknd",
    title: "The Weeknd Vibes ⚡",
    description:
      "A weekend soundtrack powered by Blinding Lights — nonstop good energy!",
    likes: 284,
    comments: 68,
    platform: "Spotify",
    status: null,
  },
  {
    id: "3",
    username: "janny",
    tag: "BOOK WORM",
    tagColor: "orange",
    time: "2 hrs ago",
    image: require("@/assets/images/image.png"),
    hashtag: "#evelynhugo",
    title: "A must-read! 📖✨",
    description:
      "Just finished The Seven Husbands of Evelyn Hugo, and I’m blown away!",
    likes: 284,
    comments: 68,
    platform: "Kindle",
    status: null,
  },
  {
    id: "4",
    username: "janny",
    tag: "BOOK WORM",
    tagColor: "orange",
    time: "Want to read",
    image: require("@/assets/images/image.png"),
    hashtag: "#stephenking",
    title: "Want to read",
    description: "15 books",
    likes: 0,
    comments: 0,
    activityType: "15 books",
    status: "want",
  },
  {
    id: "5",
    username: "janny",
    tag: "MOVIE BUFF",
    tagColor: "green",
    time: "Want to watch",
    image: require("@/assets/images/image.png"),
    hashtag: "#got",
    title: "Want to watch",
    description: "25 movies",
    likes: 0,
    comments: 0,
    activityType: "25 movies",
    status: "want",
  },
  {
    id: "6",
    username: "janny",
    tag: "GAMER",
    tagColor: "red",
    time: "Want to play",
    image: require("@/assets/images/image.png"),
    hashtag: "#lastofus",
    title: "Want to play",
    description: "25 games",
    likes: 0,
    comments: 0,
    activityType: "25 games",
    status: "want",
  },
  {
    id: "7",
    username: "janny",
    tag: "MUSIC LOVER",
    tagColor: "purple",
    time: "Want to listen",
    image: require("@/assets/images/image.png"),
    hashtag: "#theweeknd",
    title: "Want to listen",
    description: "25 songs",
    likes: 0,
    comments: 0,
    activityType: "25 songs",
    status: "want",
  },
  {
    id: "8",
    username: "janny",
    tag: "BOOK WORM",
    tagColor: "orange",
    time: "Finished Book",
    image: require("@/assets/images/image.png"),
    hashtag: "#finishedbook",
    title: "Finished Reading",
    description: "Read 50 books",
    likes: 0,
    comments: 0,
    activityType: "50 books",
    status: "finished",
  },
];