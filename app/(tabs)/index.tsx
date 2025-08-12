// screens/FeedScreen.tsx
import { Assets } from "@/assets/images";
import Box from "@/components/Box";
import Texts from "@/components/Text";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

type PostType = {
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
};

const dummyData: PostType[] = [
  {
    id: "1",
    image: require("@/assets/images/image.png"),
    username: "@janny",
    tag: "MOVIE BUFF",
    tagColor: "#17A5E0",
    time: "2 hrs ago",
    hashtag: "#beetlejuice",
    title: "Beetlejuice Beetlejuice",
    description:
      "Just watched Beetlejuice and loved it! 🎉 Michael Keaton is hilarious, and the visuals are so quirky",
    likes: 284,
    comments: 68,
  },
  {
    id: "2",
    username: "@lunasky",
    tag: "SOUND SEEKER",
    tagColor: "#E86AFF",
    time: "2 hrs ago",
    image: require("@/assets/images/image.png"),
    hashtag: "#theweeknd",
    title: "The Weeknd Vibes ⚡",
    description:
      "A weekend soundtrack powered by Blinding Lights—the perfect retro hit for nonstop good energy!",
    likes: 284,
    comments: 68,
  },
  {
    id: "3",
    username: "@wittywanderer",
    tag: "BOOK WARM",
    tagColor: "#F5D547",
    time: "2 hrs ago",
    image: require("@/assets/images/image.png"),
    hashtag: "#evelynhugo",
    title: "A must-read! 📚✨",
    description:
      "Just finished The Seven Husbands of Evelyn Hugo, and I’m blown away!",
    likes: 284,
    comments: 68,
  },
  {
    id: "4",
    username: "@candy",
    tag: "GAME GURU",
    tagColor: "#7ED957",
    time: "2 hrs ago",
    image: require("@/assets/images/image.png"),
    hashtag: "#thelastofus",
    title: "A game you can't miss! 🎮💔",
    description:
      "The bond between Joel and Ellie is incredible, and the post-apocalyptic world is hauntingly immersive.",
    likes: 284,
    comments: 68,
  },
];

export default function FeedScreen() {
  const renderPost = ({ item }: { item: PostType }) => (
    <Box mb={32} ph={20}>
      {/* User Info */}
      <Box flexDirection="row" alignItems="center" mb={12}>
        <Box mt={7}>
          <Assets.photo />
        </Box>
        <Box ml={8}>
          <Texts
            font={14}
            lineHeight={26}
            fontFamily="archivoblack"
            weight={400}
            color="heading"
          >
            {item.username}
          </Texts>
          <Box
            ph={8}
            radius={16}
            pt={2}
            pb={2}
            borderColor="green"
            borderWidth={1}
          >
            <Texts
              fontFamily="archivoblack"
              weight={400}
              font={10}
              color="green"
            >
              {item.tag}
            </Texts>
          </Box>
        </Box>
        <Texts ml="auto" color="textSecondary" font={13} fontFamily="medium">
          {item.time}
        </Texts>
        <Box ml={8}>
          <Assets.More />
        </Box>
      </Box>

      {/* Post Image with overlay */}
      <Box pos="relative">
        <Image source={item.image} style={styles.postImage} />
        <Box
          pos="absolute"
          bottom={8}
          left={8}
          right={8}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          // style={styles.imageOverlay}
        >
          <Box p={8} bgColor="bg" radius={50}>
            {/* <Ionicons name="logo-youtube" size={22} color="#fff" /> */}
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

      {/* Title & Description */}
      <Texts
        color="heading"
        mt={12}
        font={16}
        fontFamily="archivoblack"
        weight={400}
        lineHeight={26}
      >
        {item.title}
      </Texts>
      <Texts
        font={13}
        fontFamily="medium"
        weight={500}
        color="textSecondary"
        mb={12}
        style={{ letterSpacing: -0.08 }}
      >
        {item.description}
      </Texts>

      {/* Likes / Comments */}
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box flexDirection="row" alignItems="center">
          <Assets.Heart />
          {/* <Ionicons name="heart-outline" size={20} color="#333" /> */}
          <Text style={styles.actionText}>{item.likes}</Text>
          <Ionicons
            name="chatbubble-outline"
            size={20}
            color="#333"
            style={{ marginLeft: 12 }}
          />
          <Text style={styles.actionText}>{item.comments}</Text>
        </Box>

        {/* Buttons */}
        <Box style={styles.buttonsRow}>
          <TouchableOpacity style={styles.finishedBtn}>
            <Text style={{ color: "#fff" }}>Finished</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wantBtn}>
            <Text>Want</Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box flex={1} bgColor="bgSecondary" pt={54}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        ph={20}
      >
        <Box pos="relative">
          {/* Purple shadow shape FIRST so it renders behind */}
          <Box style={styles.purpleShadow} />
          <Assets.photo />
        </Box>

        {/* Top Right Icons */}
        <Box flexDirection="row" alignItems="center">
          <Assets.Bell style={{ marginRight: 16 }} />
          <Assets.UserPlus />
        </Box>
      </Box>

      {/* Tab Row */}
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        ph={20}
        pv={20}
      >
        <Box flexDirection="row">
          <Texts
            lineHeight={28}
            fontFamily="archivoblack"
            font={13.5}
            weight={400}
          >
            FOR YOU
          </Texts>
          <Texts
            color="filterGray"
            fontFamily="archivoblack"
            font={13.5}
            weight={400}
            pl={9.5}
            lineHeight={28}
          >
            TRENDING
          </Texts>
          <Texts
            color="filterGray"
            fontFamily="archivoblack"
            font={13.5}
            weight={400}
            pl={9.5}
            lineHeight={28}
          >
            TOP PICKS
          </Texts>
        </Box>
        <Assets.Tuning />
      </Box>

      {/* Feed */}
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={renderPost}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  // topRow: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   paddingHorizontal: 16,
  // },

  purpleShadow: {
    position: "absolute",
    width: 223,
    height: 139,
    top: -55.63,
    left: -53.65,
    backgroundColor: "rgba(212, 161, 252, 0.3)",
    transform: [{ rotate: "-162.2deg" }],
    borderRadius: 120,
    shadowColor: "rgba(212, 161, 252, 1)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 30,
    elevation: 20, // for Android glow-like effect
  },

  // tabRow: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   paddingHorizontal: 20,
  //   marginVertical: 20,
  // },

  // tabs: { flexDirection: "row", gap: 12 },
  // tabText: {
  //   fontWeight: "600",
  //   color: "#888",
  //   fontFamily: "ArchivoBlack",
  //   fontSize: 16,
  // },
  // activeTab: { color: "#000" },

  // postCard: { marginBottom: 24, paddingHorizontal: 16 },
  // userRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  // username: { fontWeight: "bold", fontSize: 14, fontFamily: "ArchivoBlack" },
  // tag: {
  //   paddingHorizontal: 6,
  //   paddingVertical: 2,
  //   borderRadius: 6,
  //   marginTop: 2,
  //   overflow: "hidden",
  //   fontSize: 10,
  //   color: "#17A5E0",
  //   borderWidth: 1,
  //   borderColor: "#17A5E0",
  //   fontFamily: "ArchivoBlack",
  //   backgroundColor: "white",
  // },
  // time: { marginLeft: "auto", color: "#888", fontSize: 12 },
  // imageContainer: { position: "relative" },
  postImage: { width: "100%", height: 220, borderRadius: 8 },

  // imageOverlay: {
  //   position: "absolute",
  //   bottom: 8,
  //   left: 8,
  //   right: 8,
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  // },

  // leftIcon: {
  //   backgroundColor: "rgba(0,0,0,0.5)",
  //   padding: 6,
  //   borderRadius: 20,
  // },
  // imageHashtag: {
  //   backgroundColor: "rgba(0,0,0,0.5)",
  //   color: "#fff",
  //   paddingHorizontal: 8,
  //   paddingVertical: 4,
  //   borderRadius: 12,
  //   fontSize: 12,
  // },
  // title: {
  //   fontWeight: "bold",
  //   fontSize: 16,
  //   marginTop: 8,
  //   fontFamily: "ArchivoBlack",
  // },
  // description: { fontSize: 14, color: "#444", marginBottom: 8 },
  // actionRow: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  // },
  likeCommentRow: { flexDirection: "row", alignItems: "center" },
  actionText: { marginLeft: 4, fontSize: 13 },
  buttonsRow: { flexDirection: "row", gap: 8 },
  finishedBtn: {
    backgroundColor: "#A259FF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  wantBtn: {
    borderWidth: 1,
    borderColor: "#000",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
});
