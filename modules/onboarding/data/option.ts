import { Assets } from "@/assets/images";
import { Slide } from "@/types/onBoarding";

export const slides: Slide[] = [
  {
    id: 1,
    image: Assets.Onboarding1,

    title: "Log your\nentertainment history",
    subtitle:
      "Keep track of everything you've watched,\n read, played, or listened to.",
  },
  {
    id: 2,
    image: Assets.Onboarding2,
    title: "Discover new favorites",
    subtitle:
      "Find your next/ binge-worthy show, game,\n book, or podcast with ease.",
  },
  {
    id: 3,
    image: Assets.Onboarding3,
    title: "Build your future lists",
    subtitle:
      "Easily create and add to your 'to-watch' or\n 'to-read' lists, and never lose track of what\n you want to enjoy next.",
  },
  {
    id: 4,
    image: Assets.Onboarding4,
    title: "Get rewarded",
    subtitle:
      "Celebrate your entertainment milestones with unique achievements as you log your activity.",
  },
];