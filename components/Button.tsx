import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  paddingX?: number;
  paddingY?: number;
  bgColor?: string;
  ml?: number; // optional margin left
}

export default function AuthButton({
  title,
  onPress,
  disabled,
  paddingX,
  paddingY,
  bgColor,
  ml,
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
      <Text style={styles.buttonText}>{title}</Text>
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
  buttonText: {
    lineHeight: 24,
    fontSize: 16,
    fontWeight: "bold",
    color: "#1D1D1D",
    fontFamily: "inter",
  },
});
