
import Box from "@/components/Box";
import Buttons from "@/components/Button";
import Texts from "@/components/Text";



import { Assets } from "@/assets/images";

import React, { useState } from "react";

import {
  FlatList,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  View
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
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [selectedContent, setSelectedContent] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);




  const activities = [
  { label: "Watched", color: "#A5D8F3", icon: <Assets.Claspperboard /> },
  { label: "Read", color: "#FFE680", icon: <Assets.Book /> },
  { label: "Listened", color: "#F5B8F0", icon: <Assets.Music /> },
  { label: "Played", color: "#B9F6A5", icon: <Assets.GamePad /> },
];
  const contents = [
    "Movies",
    "TV Shows",
    "Audiobooks",
    "Books",
    "Podcasts",
    "Music",
    "Music Videos",
    "Radio Shows",
    "Games",
    "Mobile Games",
  ];
const platforms = [
  { name: "Amazon Prime", icon: <Assets.Prime/> },
  { name: "Netflix", icon: <Assets.Netflix /> },
  { name: "Apple TV", icon: <Assets.AppleTv /> },
  { name: "Hulu", icon: <Assets.Hulu /> },
  { name: "Kindle", icon: <Assets.AmazoneKindle /> },
  { name: "Google Play Books", icon: <Assets.GoogleBook /> },
  { name: "Spotify", icon: <Assets.Spotify /> },
  { name: "Xbox", icon: <Assets.Xbox /> },
  { name: "Playstation", icon: <Assets.PlayStation /> },
];


  const applyFilters = () => {
    setModalVisible(false);
  };

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

      {/* Post Image */}
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
      <Box flexDirection="row" justifyContent="space-between" alignItems="center">
        <Box flexDirection="row" alignItems="center">
          <Assets.Heart height={20} width={20} />
          <Texts ml={4} font={13} fontFamily="medium" color="heading">
            {item.likes}
          </Texts>
          <Box ml={12}>
            <Assets.Chat height={20} width={20} />
          </Box>
          <Texts ml={4} font={13} fontFamily="medium" color="heading">
            {item.comments}
          </Texts>
        </Box>
        <Box flexDirection="row">
          <Buttons title="Finished" onPress={() => {}} paddingX={12} paddingY={7} />
          <Box ml={8}>
            <Buttons title="Want" onPress={() => {}} paddingX={12} paddingY={9} />
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box flex={1} bgColor="bgSecondary" pt={54}>
      {/* Header */}
      <Box flexDirection="row" justifyContent="space-between" alignItems="center" ph={20}>
        <Box pos="relative">
          <Box style={styles.purpleShadow} />
          <Assets.photo />
        </Box>
        <Box flexDirection="row" alignItems="center">
          <Assets.Bell style={{ marginRight: 16 }} />
          <Assets.UserPlus />
        </Box>
      </Box>

      {/* Tab Row + Selected Filters */}
      <Box flexDirection="row" alignItems="center" justifyContent="space-between" ph={20} pv={20}>
        <Box>
          <Box flexDirection="row">
            <Texts lineHeight={28} fontFamily="archivoblack" font={13.5} weight={400}>
              FOR YOU
            </Texts>
            <Texts color="filterGray" fontFamily="archivoblack" font={13.5} weight={400} pl={9.5} lineHeight={28}>
              TRENDING
            </Texts>
            <Texts color="filterGray" fontFamily="archivoblack" font={13.5} weight={400} pl={9.5} lineHeight={28}>
              TOP PICKS
            </Texts>
          </Box>



          {/* {(selectedActivity || selectedContent || selectedPlatform) && (
            <Texts font={12} color="textSecondary" mt={4}>
              {selectedActivity ? `${selectedActivity} • ` : ""}
              {selectedContent ? `${selectedContent} • ` : ""}
              {selectedPlatform || ""}
            </Texts>
          )} */}

<View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
  {selectedActivity && (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderColor: "#F0EAE5",
        borderRadius: 40,
        borderWidth: 1,
      }}
    >
      <Texts font={12} color="textSecondary">{selectedActivity}</Texts>
      <Pressable onPress={() => setSelectedActivity(null)}>
        <Assets.Close style={{ marginLeft: 8 }} />
      </Pressable>
    </View>
  )}

  {selectedContent && (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderColor: "#F0EAE5",
        borderRadius: 40,
        borderWidth: 1,
      }}
    >
      <Texts font={12} color="textSecondary">{selectedContent}</Texts>
      <Pressable onPress={() => setSelectedContent(null)}>
        <Assets.Close style={{ marginLeft: 8 }} />
      </Pressable>
    </View>
  )}

  {selectedPlatform && (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderColor: "#F0EAE5",
        borderRadius: 40,
        borderWidth: 1,
      }}
    >
      {platforms.find((p) => p.name === selectedPlatform)?.icon}
      <Texts font={12} color="textSecondary" style={{ marginLeft: 6 }}>
        {selectedPlatform}
      </Texts>
      <Pressable onPress={() => setSelectedPlatform(null)}>
        <Assets.Close style={{ marginLeft: 8 }} />
      </Pressable>
    </View>
  )}
</View>









        </Box>
        <Pressable onPress={() => setModalVisible(true)}>
          <Assets.Tuning />
        </Pressable>
      </Box>

      {/* Feed */}
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={renderPost}
        showsVerticalScrollIndicator={false}
      />


     {/* Filter Modal */}
<Modal visible={modalVisible} animationType="slide" transparent={true}>
  <Box flex={1} justifyContent="flex-end" alignItems="center" bgColor="modalLayer">
    <Box
      width="100%"
height="90%"
      bgColor="bgSecondary"
      bTLR={20}
      bTRR={20}
      
    >
      {/* Header */}
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        ph={20}
        pt={14}
        pb={25}
      
      
      >
        <Pressable onPress={() => setModalVisible(false)}>
          <Assets.Back /> {/* Replace with your actual back icon */}
        </Pressable>
        <Texts font={16} fontFamily="semibold" color="heading" >
          Filter
        </Texts>
        {/* Placeholder for symmetry */}
        <Box style={{ width: 24 }} />
      </Box>

      {/* Content */}
      <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>

        <Texts font={20} weight={400} fontFamily="archivoblack" mb={16}>   By activity type</Texts>
       
    






 
    <Box flexDirection="row" flexWrap="wrap" justifyContent="space-between">
      {activities.map((act) => {
        const isSelected = selectedActivity === act.label;
        return (
          <Pressable
            key={act.label}
            onPress={() => setSelectedActivity(act.label)}
            style={{
              backgroundColor: act.color,
              width: "49%", // 2 cards per row
              padding: 12,
              marginBottom: 8,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: "#1D1D1D",
                      shadowColor: "#1D1D1D",
              shadowOffset: isSelected ? { width: 0, height: 0 } : { width: 3, height: 3 },
              shadowOpacity: isSelected ? 0 : 1,
              shadowRadius: 0,
              opacity: isSelected ? 0.6 : 1,
              alignItems: "center",

            }}
          >
            <Box mb={12}>{act.icon}</Box>
            <Texts weight={400} font={14} fontFamily="archivoblack">{act.label}</Texts>
          </Pressable>
        );
      })}
    </Box>







       <Texts font={20} weight={400} fontFamily="archivoblack" mb={16} mt={40}>By type of content</Texts>
        <Box flexDirection="row" flexWrap="wrap">
          {contents.map((cont) => (
            <Pressable
              key={cont}
              onPress={() => setSelectedContent(cont)}
              style={{
                backgroundColor: "#fff",
                paddingHorizontal: 12,
                paddingVertical:6,
                marginLeft: 8,
                marginBottom:8,
                borderRadius:40,
                borderWidth: 1,
                borderColor: selectedContent === cont ? "#1D1D1D" : "#F0EAE6",
              }}
            >
              <Texts font={15} fontFamily="regular">{cont}</Texts>
            </Pressable>
          ))}
        </Box>

       <Texts font={20} weight={400} fontFamily="archivoblack" mb={16} mt={32}>
  By platform
</Texts>

<Box flexDirection="row" flexWrap="wrap" mb={7}>
  {platforms.map((plat) => (
    <Pressable
      key={plat.name}
      onPress={() => setSelectedPlatform(plat.name)}
      style={{
        backgroundColor: "#fff",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 40,
        borderWidth: 1,
        marginLeft: 8,
        marginBottom: 8,
        borderColor:
          selectedPlatform === plat.name ? "#1D1D1D" : "#F0EAE6",
      }}
    >
      <Box flexDirection="row" alignItems="center">
        <Box mr={4}>{plat.icon}</Box>
        <Texts>{plat.name}</Texts>
      </Box>
    </Pressable>
  ))}
</Box>

<Box mb={44}>
        <Buttons
          title="Apply filters"
          onPress={applyFilters}
          paddingX={32}
          paddingY={16}
        /></Box>
      </ScrollView>
    </Box>
  </Box>
</Modal>

    </Box>







  );
}

const styles = StyleSheet.create({
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
    elevation: 20,
  },
  postImage: { width: "100%", height: 220, borderRadius: 8 },
});
