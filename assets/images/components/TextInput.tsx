import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface Props extends TextInputProps {
  label?: string;
  endIcon?: React.ReactNode;
  editable?: boolean;
}

export default function AuthInput({
  label,
  secureTextEntry,
  placeholder,
  value,
  onChangeText,
  endIcon,
  multiline = false,
  numberOfLines,
  editable = true,
}: Props) {
  const [isFocused, setIsFocused] = useState(false);

  const showFloatingLabel = isFocused || (value?.length ?? 0) > 0;

  const labelStyle = {
    top: showFloatingLabel ? 6 : 12,
    fontSize: showFloatingLabel ? 12 : 16,
    color: "#797470",
  };

  const inputWrapperStyle = [
    styles.inputWrapper,
    multiline && styles.multilineWrapper,
  ];

  const inputStyle = [
    styles.input,
    multiline && styles.multilineInput,
    {
      zIndex: 1,
      paddingTop: (value?.length ?? 0) > 0 ? 21 : 16,
      paddingBottom: (value?.length ?? 0) > 0 ? 0 : 16,
    },
  ];

  return (
    <View style={styles.fullScreenCentered}>
      <View style={styles.container}>
        <Text style={[styles.label, labelStyle]}>{label}</Text>
        <View style={inputWrapperStyle}>
          <TextInput
            editable={editable}
            style={inputStyle}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder || ""}
            placeholderTextColor="#797470"
            underlineColorAndroid="transparent"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            multiline={multiline}
            numberOfLines={numberOfLines}
          />
          {endIcon && <View style={styles.icon}>{endIcon}</View>}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreenCentered: {
    justifyContent: "center",
    alignItems: "center",
  },
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  container: {
    position: "relative",
    width: "100%",
  },
  label: {
    position: "absolute",
    left: 20,
    marginTop: 6,
    zIndex: 1,
    textAlign: "center",
    fontWeight: "400",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 100,
    paddingLeft: 20,
    paddingRight: 16,
    height: 56,
  },
  input: {
    zIndex: 1,
    flex: 1,
    // paddingTop: 16,
    // paddingBottom: 16,
    fontSize: 16,
    color: "#1D1D1D",
    fontWeight: "400",
  },
  icon: {
    marginLeft: 8,
  },
  // Multiline specific
  multilineWrapper: {
    alignItems: "flex-start",
    borderRadius: 24,
    height: 104,
    paddingTop: 8,
  },
  multilineInput: {
    textAlignVertical: "top",
    paddingTop: 20,
    paddingBottom: 8,
  },
});
