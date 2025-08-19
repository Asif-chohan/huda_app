import Box from "@/components/Box";
import Categories from "@/components/Location/Categories";
import Recents from "@/components/Location/Recents";
import SearchInput from "@/components/Location/SearchInput";
import UsersSuggestions from "@/components/Location/UserSuggestions";
import Text from "@/components/Text";
import { useRouter } from "expo-router";
import React from 'react';
import { Pressable, ScrollView } from "react-native";

const Search = () => {
  const [search,setSearch] = React.useState("");
  const {navigate} = useRouter();
  return (
    <Box flex={1} bgColor="bgSecondary" pt={54}>
      <Box
        width={"90%"}
        flexDirection="row"
        alignItems="center"
        style={{ marginHorizontal: "auto", gap: 8 }}
      >
        <SearchInput
          removeFocusEvent={true}
          value={search}
          onChangeText={setSearch}
          wrapperStyles={{ flex: 1 }}
        />
        <Pressable onPress={() => navigate("/location")}>
          <Text color="purple" weight={"bold"} font={18}>
            Cancel
          </Text>
        </Pressable>
      </Box>

      <Box width={"90%"} mt={20} style={{ marginHorizontal: "auto", gap: 8 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
          <Recents />
          <Categories />
          <UsersSuggestions />
        </ScrollView>
      </Box>
    </Box>
  );
}

export default Search;
