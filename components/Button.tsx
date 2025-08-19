import { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Box from "./Box";

interface Props {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  paddingX?: number;
  paddingY?: number;
  bgColor?: string;
  ml?: number; // optional margin left
  leftIcon?: ReactNode;
}

export default function AuthButton({
  title,
  onPress,
  disabled,
  paddingX,
  paddingY,
  bgColor,
  ml,
  leftIcon,
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.disabled,
        paddingX !== undefined && { paddingHorizontal: paddingX },
        paddingY !== undefined && { paddingVertical: paddingY },
        bgColor && { backgroundColor: bgColor }, // apply background color
        ml !== undefined && { marginLeft: ml }, // apply margin left
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Box flexDirection="row" alignItems="center" justifyContent="center">
        {leftIcon && <Box style={styles.icon}>{leftIcon}</Box>}
        <Text style={styles.buttonText}>{title}</Text>
      </Box>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#C7A3FF",
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 22.5,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1D1D1D",
    alignSelf: "center",
    elevation: 3,
    shadowColor: "#1D1D1D",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  disabled: {
    opacity: 0.6,
  },
  icon: {
    marginRight: 4,
  },
  buttonText: {
    lineHeight: 24,
    fontSize: 16,
    fontWeight: "bold",
    color: "#1D1D1D",
    fontFamily: "inter",
  },
});
