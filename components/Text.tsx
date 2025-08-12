import { COLORS } from "@/theme/Color";
import { fontToDp, heightToDp, widthToDp } from "@/theme/responsiveUtility";
import { useTheme } from "@/theme/themeContext";
import React from "react";
import {
  DimensionValue,
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
  TextStyle,
} from "react-native";

interface TextProps extends RNTextProps {
  pl?: DimensionValue;
  pr?: DimensionValue;
  pt?: DimensionValue;
  pb?: DimensionValue;
  mt?: DimensionValue;
  mb?: DimensionValue;
  ml?: DimensionValue;
  mr?: DimensionValue;
  font?: number;
  weight?: TextStyle["fontWeight"];
  width?: DimensionValue;
  height?: DimensionValue;
  color?: keyof typeof COLORS.light;
  align?: "left" | "right" | "center" | "justify";
  self?: "auto" | "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  lineHeight?: number;
  pos?: "absolute" | "relative"; // position
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  fontFamily?:
    | "light"
    | "regular"
    | "medium"
    | "semibold"
    | "bold"
    | "heavy"
    | "archivoblack";
  textDecorationLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through"
    | undefined;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
  pl = 0,
  pr = 0,
  pt = 0,
  pb = 0,
  mt = 0,
  mb = 0,
  ml = 0,
  mr = 0,
  font = 14,
  lineHeight = 0,
  weight = "normal",
  width,
  height,
  color = "black",
  align,
  self = "auto",
  style,
  pos,
  top,
  bottom,
  left,
  right,
  fontFamily,
  textDecorationLine,
  children,
  ...rest
}) => {
  const { theme } = useTheme();

  // const currentColors = COLORS[theme] as typeof COLORS.light || COLORS.dark;
  const currentColors: { [key: string]: string } = COLORS[theme];
  const computedStyle = {
    paddingLeft: typeof pl === "number" ? widthToDp(pl) : pl,
    paddingRight: typeof pr === "number" ? widthToDp(pr) : pr,
    paddingTop: typeof pt === "number" ? heightToDp(pt) : pt,
    paddingBottom: typeof pb === "number" ? heightToDp(pb) : pb,
    marginTop: typeof mt === "number" ? heightToDp(mt) : mt,
    marginBottom: typeof mb === "number" ? heightToDp(mb) : mb,
    marginLeft: typeof ml === "number" ? widthToDp(ml) : ml,
    marginRight: typeof mr === "number" ? widthToDp(mr) : mr,
    fontSize: fontToDp(font),
    fontWeight: weight,
    width: typeof width === "number" ? widthToDp(width) : width,
    height: typeof height === "number" ? heightToDp(height) : height,
    color: color ? currentColors[color] : "black",
    textAlign: align,
    alignSelf: self,
    lineHeight: lineHeight || fontToDp(font) * 1.2, // Set a sensible default lineHeight
    position: pos,
    top: typeof top === "number" ? heightToDp(top) : undefined,
    bottom: typeof bottom === "number" ? heightToDp(bottom) : undefined,
    left: typeof left === "number" ? widthToDp(left) : undefined,
    right: typeof right === "number" ? widthToDp(right) : undefined,
    textDecorationLine,
    fontFamily:
      fontFamily === "light"
        ? "InterLight"
        : fontFamily === "regular"
        ? "InterRegular"
        : fontFamily === "medium"
        ? "InterMedium"
        : fontFamily === "semibold"
        ? "InterSemiBold"
        : fontFamily === "bold"
        ? "InterBold"
        : fontFamily === "heavy"
        ? "InterHeavy"
        : fontFamily === "archivoblack"
        ? "ArchivoBlack"
        : "InterRegular",
  };

  return (
    <RNText style={[styles.text, computedStyle, style]} {...rest}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 0,
    fontSize: 14,
    fontWeight: "normal",
    width: "auto",
    height: "auto",
    color: "#000",
    fontFamily: "Inter-Regular",
  },
});

export default Text;
