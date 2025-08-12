import { COLORS } from "@/theme/Color";
import React from "react";
import {
  DimensionValue,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { heightToDp, widthToDp } from "../theme/responsiveUtility";
import { useTheme } from "../theme/themeContext";

interface ButtonProps extends TouchableOpacityProps {
  // Button styles
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
  width?: DimensionValue;
  height?: DimensionValue;
  flex?: number;
  flexDirection?: ViewStyle["flexDirection"];
  justifyContent?: ViewStyle["justifyContent"];
  alignItems?: ViewStyle["alignItems"];
  alignSelf?:
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "baseline";
  radius?: number;
  pos?: "absolute" | "relative";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  bgColor?: keyof typeof COLORS.light; // backgroundColor
  borderColor?: keyof typeof COLORS.light;
  borderWidth?: number;
  borderTopColor?: keyof typeof COLORS.light;
  borderBottomColor?: keyof typeof COLORS.light;
  borderLeftColor?: keyof typeof COLORS.light;
  borderRightColor?: keyof typeof COLORS.light;

  // Text styles
  textColor?: keyof typeof COLORS.light;
  textSize?: number;
  fontWeight?: TextStyle["fontWeight"];
  textAlign?: TextStyle["textAlign"];
  title: string;
  disabled?: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({
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
  width,
  height = 6,
  flex,
  flexDirection = "row",
  justifyContent = "center",
  alignItems = "center",
  alignSelf,
  radius = 8,
  pos,
  top,
  bottom,
  left,
  right,
  bgColor,
  borderColor,
  borderWidth,
  borderTopColor,
  borderBottomColor,
  borderLeftColor,
  borderRightColor,
  textColor,
  textSize,
  fontWeight,
  textAlign,
  style,
  title,
  disabled,
  ...rest
}) => {
  const { theme } = useTheme();
  // const currentColor = (COLORS[theme] as typeof COLORS.light) || COLORS.dark;
  const currentColor: { [key: string]: string } = COLORS[theme];
  const buttonStyle = {
    paddingLeft: typeof pl === "number" ? widthToDp(pl) : undefined,
    paddingRight: typeof pr === "number" ? widthToDp(pr) : undefined,
    paddingTop: typeof pt === "number" ? heightToDp(pt) : undefined,
    paddingBottom: typeof pb === "number" ? heightToDp(pb) : undefined,
    paddingHorizontal: typeof ph === "number" ? widthToDp(ph) : undefined,
    paddingVertical: typeof pv === "number" ? heightToDp(pv) : undefined,
    marginLeft: typeof ml === "number" ? widthToDp(ml) : undefined,
    marginRight: typeof mr === "number" ? widthToDp(mr) : undefined,
    marginTop: typeof mt === "number" ? heightToDp(mt) : undefined,
    marginBottom: typeof mb === "number" ? heightToDp(mb) : undefined,
    marginHorizontal: typeof mh === "number" ? widthToDp(mh) : undefined,
    marginVertical: typeof mv === "number" ? heightToDp(mv) : undefined,
    width: typeof width === "number" ? widthToDp(width) : width,
    height:
      typeof pv !== "undefined"
        ? undefined
        : typeof height === "number"
        ? heightToDp(height)
        : height,
    flex: flex,
    flexDirection: flexDirection,
    justifyContent: justifyContent,
    alignItems: alignItems,
    alignSelf: alignSelf,
    borderRadius: radius,
    position: pos,
    top: typeof top === "number" ? heightToDp(top) : undefined,
    bottom: typeof bottom === "number" ? heightToDp(bottom) : undefined,
    left: typeof left === "number" ? widthToDp(left) : undefined,
    right: typeof right === "number" ? widthToDp(right) : undefined,
    backgroundColor: bgColor ? currentColor[bgColor] : undefined,
    borderColor: borderColor ? currentColor[borderColor] : undefined,
    borderWidth: borderWidth,
    borderTopColor: borderTopColor ? currentColor[borderTopColor] : undefined,
    borderBottomColor: borderBottomColor
      ? currentColor[borderBottomColor]
      : undefined,
    borderLeftColor: borderLeftColor
      ? currentColor[borderLeftColor]
      : undefined,
    borderRightColor: borderRightColor
      ? currentColor[borderRightColor]
      : undefined,
    opacity: disabled ? 0.5 : 1,
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.button,
        buttonStyle,
        style,
        // {
        //   borderColor: currentColor['heading'],
        //   backgroundColor: currentColor['primary'],
        // },
      ]}
      {...rest}
    >
      <Text
        style={[
          styles.text,
          {
            color: textColor ? currentColor[textColor] : currentColor["white"],
            fontSize: textSize,
            fontWeight: fontWeight,
            textAlign: textAlign,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    height: 54,
  },
  text: {
    fontSize: 16,
    fontFamily: "Gilroy-Medium",
  },
});

export default CustomButton;
