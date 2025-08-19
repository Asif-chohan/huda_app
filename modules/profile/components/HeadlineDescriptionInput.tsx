import Box from "@/components/Box";
import React from "react";
import { TextInput } from "react-native";

export const HeadlineDescriptionInput = () => {
  return (
    <Box>
      {/* Headline input */}
      <TextInput
        placeholder="Add catch eye headline"
        placeholderTextColor="#797470"
        style={{
          fontSize: 16,
          lineHeight: 26,
          fontFamily: "regular",
          fontWeight: "400",
          color: "#1D1D1D",
        }}
      />
      <Box style={{ height: 1 }} bgColor="inputStroke" mv={12} />

      {/* Description input */}
      <Box mb={12}>
        <TextInput
          placeholder="Add description"
          placeholderTextColor="#AAA29C"
          multiline
          style={{
            fontSize: 16,
            lineHeight: 24,
            fontFamily: "regular",
            fontWeight: "400",
            color: "#1D1D1D",
            paddingVertical: 0,
            textAlignVertical: "top",
          }}
        />
      </Box>
    </Box>
  );
};
