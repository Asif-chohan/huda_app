
import { PostType } from "@/types/feed";

import { Assets } from "@/assets/images";
export const forYouData: PostType[] = [
  {
    activityType: "Watched",
    type: "movie",
    platform: "Netflix",
    id: "1",
    image: require("@/assets/images/image.png"),
    username: "@janny",
    tag: "MOVIE BUFF",
    tagColor: "#17A5E0",
    time: "2 hrs ago",
    hashtag: "#beetlejuice",
    title: "Beetlejuice Beetlejuice",
    description:
      "Just watched Beetlejuice and loved it! 🎉 Michael Keaton is hilarious, and the visuals are so quirky",
    likes: 284,
    comments: 68,
  },
  {
    id: "2",
    activityType: "Listened",
    contentType: "Music",
    platform: "Spotify",
    username: "@lunasky",
    tag: "SOUND SEEKER",
    tagColor: "#E86AFF",
    time: "2 hrs ago",
    image: require("@/assets/images/image.png"),
    hashtag: "#theweeknd",
    title: "The Weeknd Vibes ⚡",
    description:
      "A weekend soundtrack powered by Blinding Lights—the perfect retro hit for nonstop good energy!",
    likes: 284,
    comments: 68,
  },
];

export const trendingData: PostType[] = [
  {
    id: "3",
    activityType: "Read",
    contentType: "Books",
    platform: "Kindle",
    username: "@wittywanderer",
    tag: "BOOK WARM",
    tagColor: "#F5D547",
    time: "2 hrs ago",
    image: require("@/assets/images/image.png"),
    hashtag: "#evelynhugo",
    title: "A must-read! 📚✨",
    description:
      "Just finished The Seven Husbands of Evelyn Hugo, and I’m blown away!",
    likes: 284,
    comments: 68,
  },
];

export const topPicksData: PostType[] = [
  {
    id: "4",
    activityType: "Played",
    contentType: "Games",
    platform: "Playstation",
    username: "@candy",
    tag: "GAME GURU",
    tagColor: "#7ED957",
    time: "2 hrs ago",
    image: require("@/assets/images/image.png"),
    hashtag: "#thelastofus",
    title: "A game you can't miss! 🎮💔",
    description:
      "The bond between Joel and Ellie is incredible, and the post-apocalyptic world is hauntingly immersive.",
    likes: 284,
    comments: 68,
  },
];


  export const activities = [
    { label: "Watched", color: "#A5D8F3", icon: Assets.Claspperboard },
    { label: "Read", color: "#FFE680", icon: Assets.Book },
    { label: "Listened", color: "#F5B8F0", icon: Assets.Music},
    { label: "Played", color: "#B9F6A5", icon: Assets.GamePad },
  ];

    export const contents = [
      "Movies",
      "TV Shows",
      "Audiobooks",
      "Books",
      "Podcasts",
      "Music",
      "Music Videos",
      "Radio Shows",
      "Games",
      "Mobile Games",
    ];


      export const platforms = [
        { name: "Amazon Prime", icon: Assets.Prime },
        { name: "Netflix", icon: Assets.Netflix },
        { name: "Apple TV", icon: Assets.AppleTv },
        { name: "Hulu", icon: Assets.Hulu },
        { name: "Kindle", icon: Assets.AmazoneKindle },
        { name: "Google Play Books", icon: Assets.GoogleBook },
        { name: "Spotify", icon: Assets.Spotify },
        { name: "Xbox", icon: Assets.Xbox },
        { name: "Playstation", icon: Assets.PlayStation },
      ];

    export const friendsList = [
    {
      id: "1",
      username: "@janny",
      tag: "MOVIE BUFF",
      tagColor: "blue",
      photo: Assets.photo,
    },
    {
      id: "2",
      username: "@camile_k",
      tag: "GAME GURU",
      tagColor: "green",
      photo: Assets.photo,
    },
    {
      id: "3",
      username: "@elf_man",
      tag: "BOOK WARM",
      tagColor: "yellow",
      photo: Assets.photo,
    },
  ];







    export const dummyComments = [
      {
        id: "1",
        user: "@janny",
        avatar: Assets.photo,
        text: "Beetlejuice is the perfect mix of comedy and horror—totally unique!",
        replies: [],
      },
      {
        id: "2",
        user: "@nikky",
         avatar: Assets.photo,
        text: "Michael Keaton’s performance is iconic! 🤯🙌",
        replies: [
          {
            id: "2-1",
            user: "@john",
            avatar: Assets.photo,
            text: "Totally agree! One of his best roles.",
          },
        ],
      },
  
      
    ]