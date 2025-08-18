import { Assets } from "@/assets/images";
import Box from "@/components/Box";
import Texts from "@/components/Text";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView } from "react-native";


const books = [
  {
    id: 1,
    title: "Harry Potter and the Philosopher's Stone",
     image: require("@/assets/images/image.png"),
  },
  {
    id: 2,
    title: "7 husbands of Evelyn Hugo",
    image: require("@/assets/images/image.png"),
  },
  {
    id: 3,
    title: "It",
     image: require("@/assets/images/image.png"),
  },
  {
    id: 4,
    title: "Little women",
      image: require("@/assets/images/image.png"),
  },
  {
    id: 5,
    title: "It ends with us",
    image: require("@/assets/images/image.png"),
  },
  {
    id: 6,
    title: "Harry Potter and the Deathly Hallows",
      image: require("@/assets/images/image.png"),
  },
];

export default function WantToReadScreen() {
  const router = useRouter();

  return (
    <Box flex={1} bgColor="surface" pt={50} pb={20} ph={16}>
      {/* Header */}
      <Box flexDirection="row" alignItems="center" mb={28}>


          <Box
            height={48}
            width={48}
            alignItems="center"
            justifyContent="center"
          >
            <Pressable onPress={() => router.back()}>
              <Assets.Back height={21} width={21} />
            </Pressable>
          </Box>



        
        <Box flex={1} alignItems="center" mr={48}>
          <Texts
       
            color="heading"
       font={12.5}
       fontFamily="semibold"
       lineHeight={26}
       weight={600}
          >
            Want to read
          </Texts>
        </Box>
      </Box>

      {/* Book list */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {books.map((book) => (
          <Box
            key={book.id}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            mb={16}
            ph={4}
          >
            {/* Left side: Image + Title */}
            <Box flexDirection="row" alignItems="center" >
              <Image
                source={require("@/assets/images/image.png")}
                style={{ width: 40, height: 40, borderRadius: 8 }}
              />



            <Box mh={12} width={247}>
      <Texts
        numberOfLines={1}
        ellipsizeMode="tail"
        font={12.5}
        fontFamily="medium"
        weight={500}
        lineHeight={26}
        color="heading"
      >
        {book.title}
      </Texts>
    </Box>


            </Box>

            {/* Right side: 3-dots icon */}
               <Pressable>
              <Assets.More height={24} width={24} />
            </Pressable>
         
          </Box>
        ))}
      </ScrollView>
    </Box>
  );
}
