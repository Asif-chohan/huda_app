import Box from "@/components/Box";
import Buttons from "@/components/Button";
import { users_mock_data } from "@/constants/search";
import React from "react";
import { Image } from "react-native";
import Text from "../Text";

const UsersSuggestions = () => {
  return (
    <Box mt={40}>
      <Text font={18} weight={"bold"}>
        {users_mock_data.heading}
      </Text>
      {users_mock_data.data.map((item, index) => (
        <Box key={index} flexDirection="row" alignItems="center" mt={15}>
          <Image
            source={item.image}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
          <Box ml={12} flex={1} flexDirection="column" style={{ gap: 8 }}>
            <Text numberOfLines={1} ellipsizeMode="tail" font={14} weight={"800"}>
              {item.text}
            </Text>
            <Box
              style={{
                borderWidth: 1.5,
                borderColor: "blue",
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 20,
                alignSelf: "flex-start",
              }}
            >
              <Text font={10} weight={"800"} style={{ color: "blue" }}>
                {item.tag}
              </Text>
            </Box>
          </Box>
          <Buttons
            title="Follow"
            onPress={() => {}}
            paddingX={12}
            paddingY={7}
          />
        </Box>
      ))}
    </Box>
  );
};

export default UsersSuggestions;
