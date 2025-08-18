import { SvgProps } from "react-native-svg";


export type PlatformType= {
  id: number;
  name: string;
  icon: React.FC<SvgProps>;
}

export type PassionData= {
  id: number;
  label: string;
  icon: React.FC<SvgProps>;
  color: string
}