// screens/FeedScreen.tsx
import { Assets } from "@/assets/images";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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
    tagColor: "#4BB3FD",
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
    <View style={styles.postCard}>
      {/* User Info */}
      <View style={styles.userRow}>
        <Assets.photo />
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={[styles.tag]}>{item.tag}</Text>
        </View>
        <Text style={styles.time}>{item.time}</Text>
        <View style={{ marginLeft: 8 }}>
          <Assets.More />
        </View>
      </View>

      {/* Post Image with overlay */}
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.postImage} />
        <View style={styles.imageOverlay}>
          <View style={styles.leftIcon}>
            <Ionicons name="logo-youtube" size={22} color="#fff" />
          </View>
          <Text style={styles.imageHashtag}>{item.hashtag}</Text>
        </View>
      </View>

      {/* Title & Description */}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>

      {/* Likes / Comments */}
      <View style={styles.actionRow}>
        <View style={styles.likeCommentRow}>
          <Ionicons name="heart-outline" size={20} color="#333" />
          <Text style={styles.actionText}>{item.likes}</Text>
          <Ionicons
            name="chatbubble-outline"
            size={20}
            color="#333"
            style={{ marginLeft: 12 }}
          />
          <Text style={styles.actionText}>{item.comments}</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.finishedBtn}>
            <Text style={{ color: "#fff" }}>Finished</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wantBtn}>
            <Text>Want</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top Row */}

      <View style={styles.topRow}>
        <View style={styles.profileWrapper}>
          {/* Purple shadow shape FIRST so it renders behind */}
          <View style={styles.purpleShadow} />

          {/* Profile Photo */}
          <Assets.photo />
        </View>

        {/* Top Right Icons */}
        <View style={styles.topIcons}>
          <Assets.Bell style={{ marginRight: 12 }} />
          <Assets.UserPlus />
        </View>
      </View>

      {/* Tab Row */}
      <View style={styles.tabRow}>
        <View style={styles.tabs}>
          <Text style={[styles.tabText, styles.activeTab]}>FOR YOU</Text>
          <Text style={styles.tabText}>TRENDING</Text>
          <Text style={styles.tabText}>TOP PICKS</Text>
        </View>
        <Assets.Tuning />
      </View>

      {/* Feed */}
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={renderPost}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 50 },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  profileWrapper: {
    position: "relative",
  },
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
  topIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  tabRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  tabs: { flexDirection: "row", gap: 12 },
  tabText: {
    fontWeight: "600",
    color: "#888",
    fontFamily: "ArchivoBlack",
    fontSize: 16,
  },
  activeTab: { color: "#000" },
  postCard: { marginBottom: 24, paddingHorizontal: 16 },
  userRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  username: { fontWeight: "bold", fontSize: 14, fontFamily: "ArchivoBlack" },
  tag: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    marginTop: 2,
    overflow: "hidden",
    fontSize: 10,
    color: "#17A5E0",
    borderWidth: 1,
    borderColor: "#17A5E0",
    fontFamily: "ArchivoBlack",
    backgroundColor: "white",
  },
  time: { marginLeft: "auto", color: "#888", fontSize: 12 },
  imageContainer: { position: "relative" },
  postImage: { width: "100%", height: 200, borderRadius: 8 },
  imageOverlay: {
    position: "absolute",
    bottom: 8,
    left: 8,
    right: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftIcon: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 6,
    borderRadius: 20,
  },
  imageHashtag: {
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 8,
    fontFamily: "ArchivoBlack",
  },
  description: { fontSize: 14, color: "#444", marginBottom: 8 },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
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
