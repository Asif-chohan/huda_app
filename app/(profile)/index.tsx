import { Assets } from "@/assets/images";
import Box from "@/components/Box";
import Texts from "@/components/Text";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet } from "react-native";
 // adjust to your colors file
import Buttons from "@/components/Button";
import ProgressItem from "@/modules/profile/components/ProgressBar";
export type PostType = {
  id: string;
  username: string;
  tag: string;
  tagColor: string;
  time: string;
  image: any;
  hashtag: string;
  title: string;
  description: string;
  likes: number;
  comments: number;
  activityType?: string;
  type?: string;
  contentType?: string;
  platform?: string;
  status?: "finished" | "want" | null;
};

const dummyPosts: PostType[] = [
  {
    id: "1",
    username: "janny",
    tag: "MOVIE BUFF",
    tagColor: "green",
    time: "2 hrs ago",
    image: require("@/assets/images/image.png"),    hashtag: "#beetlejuice",
    title: "Beetlejuice Beetlejuice",
    description: "Just watched Beetlejuice and loved it! 🎉 Michael Keaton is hilarious, and the visuals are so quirky",
    likes: 284,
    comments: 68,
    platform: "Netflix",
    status: null,
  },
  {
    id: "2",
    username: "janny",
    tag: "MUSIC LOVER",
    tagColor: "purple",
    time: "2 hrs ago",
          image: require("@/assets/images/image.png"),
    hashtag: "#theweeknd",
    title: "The Weeknd Vibes ⚡",
    description: "A weekend soundtrack powered by Blinding Lights — nonstop good energy!",
    likes: 284,
    comments: 68,
    platform: "Spotify",
    status: null,
  },
  {
    id: "3",
    username: "janny",
    tag: "BOOK WORM",
    tagColor: "orange",
    time: "2 hrs ago",
       image: require("@/assets/images/image.png"),
    hashtag: "#evelynhugo",
    title: "A must-read! 📖✨",
    description: "Just finished The Seven Husbands of Evelyn Hugo, and I’m blown away!",
    likes: 284,
    comments: 68,
    platform: "Kindle",
    status: null,
  },
  {
    id: "4",
    username: "janny",
    tag: "BOOK WORM",
    tagColor: "orange",
    time: "Want to read",
        image: require("@/assets/images/image.png"),
    hashtag: "#stephenking",
    title: "Want to read",
    description: "15 books",
    likes: 0,
    comments: 0,
    activityType: "15 books",
    status: "want",
  },
  {
    id: "5",
    username: "janny",
    tag: "MOVIE BUFF",
    tagColor: "green",
    time: "Want to watch",
        image: require("@/assets/images/image.png"),
    hashtag: "#got",
    title: "Want to watch",
    description: "25 movies",
    likes: 0,
    comments: 0,
    activityType: "25 movies",
    status: "want",
  },
  {
    id: "6",
    username: "janny",
    tag: "GAMER",
    tagColor: "red",
    time: "Want to play",
    image: require("@/assets/images/image.png"),
    hashtag: "#lastofus",
    title: "Want to play",
    description: "25 games",
    likes: 0,
    comments: 0,
    activityType: "25 games",
    status: "want",
  },
  {
    id: "7",
    username: "janny",
    tag: "MUSIC LOVER",
    tagColor: "purple",
    time: "Want to listen",
    image: require("@/assets/images/image.png"),
    hashtag: "#theweeknd",
    title: "Want to listen",
    description: "25 songs",
    likes: 0,
    comments: 0,
    activityType: "25 songs",
    status: "want",
  },
  {
    id: "8",
    username: "janny",
    tag: "BOOK WORM",
    tagColor: "orange",
    time: "Finished Book",
    image: require("@/assets/images/image.png"),
    hashtag: "#finishedbook",
    title: "Finished Reading",
    description: "Read 50 books",
    likes: 0,
    comments: 0,
    activityType: "50 books",
    status: "finished",
  },
];

export default function ProfileScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"posts" | "want" | "finished">("posts");

  const filteredData =
    activeTab === "posts"
      ? dummyPosts.filter((p) => p.status === null)
      : activeTab === "want"
      ? dummyPosts.filter((p) => p.status === "want")
      : dummyPosts.filter((p) => p.status === "finished");

  return (
    <ScrollView style={{ flex: 1,paddingTop:50,    paddingHorizontal: 16,     backgroundColor: "#FDF4F0",}} contentContainerStyle={{ paddingBottom: 40 }}>
   
      <Pressable style={styles.backIcon} onPress={() => router.back()}>
        <Assets.Back />
      </Pressable>

      {/* User Info Row */}
      <Box flexDirection="row" alignItems="center" mt={28} ph={4} >
        <Box >
          <Assets.photo height={60} width={60} />
        </Box>
        <Box ml={12}>
          <Texts font={10} lineHeight={26} fontFamily="archivoblack" weight={400} color="heading">
            @janny
          </Texts>
          <Box ph={8} radius={16} pt={2} pb={2} borderColor="green" borderWidth={1}>
            <Texts fontFamily="archivoblack" weight={400} font={10} color="green">
              MOVIE BUFF
            </Texts>
          </Box>
        </Box>
        <Box ml="auto" alignItems="flex-end">
          <Texts font={12.5} fontFamily="archivoblack" self="center" weight={400} lineHeight={26}>123</Texts>
          <Texts font={10} fontFamily="medium" lineHeight={18.5}  color="textSecondary">Following</Texts>
        </Box>
        <Box ml={12} alignItems="flex-end">
         <Texts font={12.5} fontFamily="archivoblack" self="center" weight={400} lineHeight={26}>97</Texts>
          <Texts font={10} fontFamily="medium" lineHeight={18.5}  color="textSecondary">Followers</Texts>
        </Box>
      </Box>

      {/* Bio */}
      <Box  mt={12} ph={4}>
        <Texts font={12.5} color="heading" fontFamily="medium" lineHeight={26}>
          Lost in a good story is my happy place.
        </Texts>
      </Box>

      {/* Progress Bars */}
  
      <Box mt={20} ph={4}>
        <ProgressItem
          label="Movie Guru"
          current={5}
          total={10}
          unit="movies"
          fillColor="#17A5E0"
          bgColor="#D2E5EC"
        />
        <Box mt={12}>
        <ProgressItem
          label="Page Turner"
          current={3}
          total={8}
          unit="books"
          fillColor="#EDD358"
          bgColor="#CCE5CC"
        /></Box>
      </Box>

      {/* Follow Button */}
      <Box  mt={20} self="flex-start" ph={4}>


          <Buttons
                title="Follow"
                onPress={() => {}}
                paddingX={12}
                bgColor="#DFD8D3"
                paddingY={7}
              />




      </Box>

      {/* Tabs */}
   <Box
  flexDirection="row"
  justifyContent="space-around"
  mt={28}
  borderBottomWidth={1}
  borderColor="badgeLight"
  ph={4}
>
  {["posts", "want", "finished"].map((tab) => {
    const isActive = activeTab === tab;
    return (
      <Pressable
        key={tab}
        onPress={() => setActiveTab(tab as any)}
        style={{
          paddingHorizontal: 36, // horizontal padding for each label
          paddingVertical: 8,    // vertical padding
          borderBottomWidth: 1,
          borderBottomColor: isActive ? "#1D1D1D" : "#CFCBC8", // heading color when active
        }}
      >
        <Texts
          font={12.5}
          lineHeight={24}
          fontFamily="regular"
          color={isActive ? "heading" : "textSecondary"}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </Texts>
      </Pressable>
    );
  })}
</Box>







{/* Content */}
<Box ph={4} mt={20}>
  {activeTab === "posts" &&
    filteredData.map((item) => (
      <Box key={item.id} mb={70}>
        {/* Post Header */}
        <Box flexDirection="row" justifyContent="space-between" mb={12}>
          <Box>
            <Texts color="textSecondary" font={13} fontFamily="medium">
              {item.time}
            </Texts>
          </Box>
          <Box>
            <Assets.More />
          </Box>
        </Box>

        {/* Post Image + Overlays */}
        <Box pos="relative">
          <Image
            source={item.image}
            style={{ width: "100%", height: 200, borderRadius: 8 }}
          />
          <Box
            pos="absolute"
            bottom={8}
            left={8}
            right={8}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box p={8} bgColor="bg" radius={50}>
              <Assets.Youtube />
            </Box>
            <Box
              bgColor="bg"
              ph={12}
              borderWidth={1}
              borderColor="borderColor"
              pv={6}
              radius={16}
            >
              <Texts font={13} fontFamily="medium" color="textSecondary">
                {item.hashtag}
              </Texts>
            </Box>
          </Box>
        </Box>

        {/* Post Text */}
        <Texts
          mt={12}
          font={12.5}
          lineHeight={26}
          fontFamily="bold"
        >
          {item.title}
        </Texts>
        <Texts
          font={10}
          lineHeight={19.5}
          color="textSecondary"
        >
          {item.description}
        </Texts>

        {/* Likes / Comments / Buttons */}
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt={12}
        >
          {/* Likes & Comments */}
          <Box flexDirection="row" alignItems="center">
            <Assets.Heart height={20} width={20} />
            <Texts ml={4} font={13} fontFamily="medium" color="heading">
              {item.likes}
            </Texts>

            <Pressable onPress={() =>{}}>
              <Box ml={12} flexDirection="row" alignItems="center">
                <Assets.Chat height={20} width={20} />
                <Texts ml={4} font={13} fontFamily="medium" color="heading">
                  78
                </Texts>
              </Box>
            </Pressable>
          </Box>

          {/* Finished & Want Buttons */}
          <Box flexDirection="row">
            <Buttons
              title="Finished"
              onPress={() => {}}
              paddingX={12}
              paddingY={7}
            />
            <Box ml={8}>
              <Buttons
                title="Want"
                onPress={() => {}}
                paddingX={12}
                paddingY={9}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    ))}

{(activeTab === "want" || activeTab === "finished") && (
  <Box flexDirection="row" flexWrap="wrap" justifyContent="space-between">
    {filteredData.map((item, index) => (
      <Box
        key={item.id}
        alignItems={index % 2 === 0 ? "flex-start" : "flex-end"} // Alternate alignment
        mb={20}
        style={{
          width: "48%", // allow two cards per row
        }}
      >
        {/* Image stack */}
        <Box style={{ flexDirection: "row" }}>
          {[0, 1, 2].map((i) => (
            <Image
              key={i}
              source={item.image}
              style={{
                width: 108,
                height: 149,
                borderRadius: 8,
                marginLeft: i === 0 ? 0 : -90,
                borderWidth: 1,
                borderColor: "#1D1D1D",
                zIndex: 3 - i,
                shadowColor: "#1D1D1D",
                shadowOffset: { width: 3, height: 3 },
                shadowOpacity: 1,
                shadowRadius: 0,
              }}
              resizeMode="cover"
            />
          ))}
        </Box>

        {/* Title & Subtitle */}
        <Box 
          mt={14} 
          style={{ 
            alignItems: index % 2 === 0 ? "flex-start" : "center", // Match parent alignment
            width: "100%",
          }}
        >
          <Texts
            font={12.5}
            fontFamily="semibold"
            weight={600}
            color="heading"
            lineHeight={26}
          >
            {item.title}
          </Texts>
          <Texts
            font={12}
            fontFamily="regular"
            color="textSecondary"
            lineHeight={20}
          >
            {item.activityType}
          </Texts>
        </Box>
      </Box>
    ))}
  </Box>
)}


      </Box>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backIcon: {

    paddingVertical: 12,
  },
  followButton: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
    alignSelf: "flex-start",
  },
});
