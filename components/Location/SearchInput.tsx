import { Assets } from '@/assets/images';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Keyboard, StyleSheet, TextInput,
  View,
  ViewStyle
} from 'react-native';
type SearchInputProps = {
  removeFocusEvent?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  wrapperStyles?: ViewStyle
};

const SearchInput = ({removeFocusEvent = false, value="", onChangeText=()=>{}, wrapperStyles}: SearchInputProps) => {
  const {navigate} = useRouter();
  const handleFocusInput = () => {
    if(removeFocusEvent) return;
    Keyboard.dismiss();
    navigate("/search");
  };

  return (
    <View style={[styles.inputWrapper, wrapperStyles]}>
      <View style={styles.leftIcon}>
        <Assets.Search />
      </View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={"Search"}
        placeholderTextColor="#797470"
        underlineColorAndroid="transparent"
        onFocus={handleFocusInput}
      />
    </View>
  );
}

export default SearchInput

const styles = StyleSheet.create({
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
    fontSize: 16,
    color: "#1D1D1D",
    fontWeight: "400",
  },
  icon: {
    marginLeft: 8,
  },
  leftIcon: {
    marginRight: 8,
  },
});