import { COLORS } from "@/theme/Color";
import { heightToDp, widthToDp } from "@/theme/responsiveUtility";
import { useTheme } from "@/theme/themeContext";
import React from "react";
import {
  DimensionValue,
  View as RNView,
  ViewProps as RNViewProps,
  StyleSheet,
  ViewStyle,
} from "react-native";

// Defining the types for the props
interface ViewProps extends RNViewProps {
  pl?: DimensionValue; // paddingLeft
  pr?: DimensionValue; // paddingRight
  pt?: DimensionValue; // paddingTop
  pb?: DimensionValue; // paddingBottom
  ph?: DimensionValue; // paddingHorizontal
  pv?: DimensionValue; // paddingVertical
  ml?: DimensionValue; // marginLeft
  mr?: DimensionValue; // marginRight
  mt?: DimensionValue; // marginTop
  mb?: DimensionValue; // marginBottom
  mh?: DimensionValue; // marginHorizontal
  mv?: DimensionValue; // marginVertical
  p?: DimensionValue; // padding
  m?: DimensionValue; // margin

  width?: DimensionValue; // width
  height?: DimensionValue; // height
  minHeight?: DimensionValue; // minHeight
  minWidth?: DimensionValue; // minWidth
  flex?: number; // flex
  flexDirection?: ViewStyle["flexDirection"]; // flexDirection
  justifyContent?: ViewStyle["justifyContent"]; // justifyContent
  alignItems?: ViewStyle["alignItems"]; // alignItems
  flexWrap?: "nowrap" | "wrap"; // flexWrap
  self?: "auto" | "flex-start" | "flex-end" | "center" | "stretch" | "baseline"; // alignSelf
  radius?: number; // borderRadius
  pos?: "absolute" | "relative"; // position
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  gap?: number;
  bgColor?: keyof typeof COLORS.light; // backgroundColor
  borderColor?: keyof typeof COLORS.light; // borderColor
  borderWidth?: number; // borderWidth
  borderTopColor?: keyof typeof COLORS.light; // borderTopColor
  borderBottomColor?: keyof typeof COLORS.light; // borderBottomColor
  borderLeftColor?: keyof typeof COLORS.light; // borderLeftColor
  borderRightColor?: keyof typeof COLORS.light; // borderRightColor
  borderTopWidth?: number; // borderTopWidth
  borderBottomWidth?: number; // borderBottomWidth
  borderLeftWidth?: number; // borderLeftWidth
  borderRightWidth?: number; // borderRightWidth
  bTLR?: number; // borderTopLeftRadius
  bTRR?: number; // borderTopRightRadius
  bBLR?: number; // borderBottomLeftRadius
  bBRR?: number; // borderBottomRightRadius
  circle?: number; // circular view size
  lightShadow?: boolean; // light shadow
  darkShadow?: boolean; // dark shadow
  mediumShadow?: boolean; // medium shadow
  children?: React.ReactNode; // children of the view
}

const View: React.FC<ViewProps> = ({
  pl,
  pr,
  pt,
  pb,
  ph,
  pv,
  ml,
  mr,
  mt,
  mb,
  mh,
  mv,
  p,
  m,
  width,
  height,
  minHeight,
  minWidth,
  flex,
  flexDirection,
  justifyContent,
  alignItems,
  flexWrap = "nowrap",
  radius,
  pos,
  top,
  bottom,
  left,
  right,
  gap,
  bgColor,
  borderColor,
  borderWidth,
  borderTopColor,
  borderBottomColor,
  borderLeftColor,
  borderRightColor,
  borderTopWidth,
  borderBottomWidth,
  borderLeftWidth,
  borderRightWidth,
  bTLR,
  bTRR,
  bBLR,
  bBRR,
  self,
  circle,
  lightShadow,
  darkShadow,
  mediumShadow,
  style,
  children, // Default to 'light' theme
  ...rest
}) => {
  const { theme } = useTheme();
  // Get the appropriate color set based on the theme ('light' or 'dark')
  // const currentColors =
  //   (COLORS[theme] as typeof COLORS.light) || typeof COLORS.dark;
  const currentColors: { [key: string]: string } = COLORS[theme];
  return (
    <RNView
      style={[
        styles.view,
        {
          padding: p,
          margin: m,
          paddingLeft: typeof pl === "number" ? widthToDp(pl) : pl,
          paddingRight: typeof pr === "number" ? widthToDp(pr) : pr,
          paddingTop: typeof pt === "number" ? heightToDp(pt) : pt,
          paddingBottom: typeof pb === "number" ? heightToDp(pb) : pb,
          paddingHorizontal: typeof ph === "number" ? widthToDp(ph) : undefined,
          paddingVertical: typeof pv === "number" ? heightToDp(pv) : undefined,
          marginTop: typeof mt === "number" ? heightToDp(mt) : mt,
          marginBottom: typeof mb === "number" ? heightToDp(mb) : mb,
          marginLeft: typeof ml === "number" ? widthToDp(ml) : ml,
          marginRight: typeof mr === "number" ? widthToDp(mr) : mr,
          marginHorizontal: typeof mh === "number" ? widthToDp(mh) : undefined,
          marginVertical: typeof mv === "number" ? heightToDp(mv) : undefined,
          width: typeof width === "number" ? widthToDp(width) : width,
          height: typeof height === "number" ? heightToDp(height) : height,
          minHeight:
            typeof minHeight === "number" ? heightToDp(minHeight) : minHeight,
          minWidth:
            typeof minWidth === "number" ? widthToDp(minWidth) : minWidth,
          flex: flex,
          gap: gap,
          flexDirection: flexDirection,
          justifyContent: justifyContent,
          alignItems: alignItems,
          flexWrap,
          borderRadius: radius,
          position: pos,
          top: typeof top === "number" ? heightToDp(top) : undefined,
          bottom: typeof bottom === "number" ? heightToDp(bottom) : undefined,
          left: typeof left === "number" ? widthToDp(left) : undefined,
          right: typeof right === "number" ? widthToDp(right) : undefined,
          backgroundColor: bgColor ? currentColors[bgColor] : undefined,
          borderColor: borderColor ? currentColors[borderColor] : undefined,
          borderWidth: borderWidth,
          borderTopColor: borderTopColor
            ? currentColors[borderTopColor]
            : undefined,
          borderBottomColor: borderBottomColor
            ? currentColors[borderBottomColor]
            : undefined,
          borderLeftColor: borderLeftColor
            ? currentColors[borderLeftColor]
            : undefined,
          borderRightColor: borderRightColor
            ? currentColors[borderRightColor]
            : undefined,
          borderTopWidth,
          borderBottomWidth,
          borderLeftWidth,
          borderRightWidth,
          alignSelf: self,
          borderTopLeftRadius: bTLR,
          borderTopRightRadius: bTRR,
          borderBottomLeftRadius: bBLR,
          borderBottomRightRadius: bBRR,
          ...(circle && {
            borderRadius: circle / 2,
            width: circle,
            height: circle,
          }),
          ...(lightShadow && styles.lightShadow),
          ...(darkShadow && styles.darkShadow),
          ...(mediumShadow && styles.mediumShadow),
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </RNView>
  );
};

// Define the shadow styles
const styles = StyleSheet.create({
  view: {
    padding: 0,
    margin: 0,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderRadius: 0,
    position: "relative",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    gap: 0,
  },
  lightShadow: {
    shadowColor: "#060C3B",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1.1,
  },
  darkShadow: {
    shadowColor: "#060C3B",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  mediumShadow: {
    shadowColor: "#505050",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.8,
    shadowRadius: 40,
    elevation: 7,
  },
});

export default View;
