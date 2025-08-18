import { PassionData, PlatformType } from "@/types/auth";
import { Assets } from "@/assets/images";


export const allAccountsList: PlatformType[] = [
  { id: 1, name: "Netflix", icon: Assets.Netflix },
  { id: 2, name: "Apple TV", icon: Assets.AppleTv },
  { id: 3, name: "Hulu", icon: Assets.Hulu },
  { id: 4, name: "Kindle", icon: Assets.AmazoneKindle },
  {
    id: 5,
    name: "Google Play Books",
    icon: Assets.GoogleBook,
  },
  { id: 6, name: "Spotify", icon: Assets.Spotify },
  { id: 7, name: "Xbox", icon: Assets.Xbox },
  {
    id: 8,
    name: "Playstation",
    icon: Assets.PlayStation,
  },
  { id: 9, name: "Amazon Prime", icon: Assets.Prime},
];





export const passionsData: PassionData[] = [
  {
    id: 1,
    icon: Assets.Book,
    label: "Books & literature",
    color: "#EDD358",
  },
  {
    id: 2,
    icon: Assets.Claspperboard,
    label: "Movies & TV Shows",
    color: "#78C4E0",
  },
  {
    id: 3,
    icon: Assets.Podcast,
    label: "Podcasts & Audio",
    color: "#ECA9F2",
  },
  {
    id: 4,
    icon: Assets.GamePad,
    label: "Games & Esports",
    color: "#8ACC8B",
  },
  {
    id: 5,
    icon: Assets.Music,
    label: "Music & Playlists",
    color: "#ECA9F2",
  },
  {
    id: 6,
    icon: Assets.Notebook,
    label: "Comics & Graphic Novels",
    color: "#EDD358",
  },
];