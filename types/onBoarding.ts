import { SvgProps } from "react-native-svg";

export type Slide = {
  id: number;
  image: React.FC<SvgProps>;
  title: string;
  subtitle: string;
};
export type SwipeContentProps = {
  slides: Slide[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  handleNext: () => void;
  height: number;
};