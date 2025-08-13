
import Box from "@/components/Box";
import Buttons from "@/components/Button";
import Texts from "@/components/Text";



import { Assets } from "@/assets/images";

import React, { useState } from "react";


import BottomModal from "@/components/BottomModal";
import { useModal } from "@/hooks/useModal";
import AddFriendModal from "@/modules/feed/components/AddFriendModal";
import FiltrationModal from "@/modules/feed/components/FiltrationModal";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
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

  const friendsList = [
    { id: "1", username: "@janny", tag: "MOVIE BUFF", tagColor: "blue", photo: <Assets.photo /> },
    { id: "2", username: "@camile_k", tag: "GAME GURU", tagColor: "green", photo: <Assets.photo/> },
    { id: "3", username: "@elf_man", tag: "BOOK WARM", tagColor: "yellow", photo: <Assets.photo /> },
  ];





const dummyComments = [
  {
    id: "1",
    user: "@janny",
    avatar: <Assets.photo/>,
    text: "Beetlejuice is the perfect mix of comedy and horror—totally unique!",
    replies: [],
  },
  {
    id: "2",
    user: "@nikky",
    avatar: (
      <Box
        width={32}
        height={32}
        radius={16}
        bgColor="bgSecondary"
        alignItems="center"
        justifyContent="center"
      >
        <Texts font={14} fontFamily="medium">
          N
        </Texts>
      </Box>
    ),
    text: "Michael Keaton’s performance is iconic! 🤯🙌",
    replies: [
      {
        id: "2-1",
        user: "@john",
        avatar: <Assets.photo/>,
        text: "Totally agree! One of his best roles.",
      },
    ],
  },
];







  const applyFilters = () => {
    setModalVisible(false);
  };
  const { openModal, closeModal, isModalVisible } = useModal();
  const [instagramEnabled, setInstagramEnabled] = useState(false);
  const [contactsEnabled, setContactsEnabled] = useState(false);
  const [facebookEnabled,setFacebookEnabled] = useState(false)





  const [comments, setComments] = useState(dummyComments);
  const [newComment, setNewComment] = useState("");
  const [replyTo, setReplyTo] = useState<{ id: string; user: string } | null>(null);

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    if (replyTo) {
      // Add reply to specific comment
      setComments((prev) =>
        prev.map((comment) =>
          comment.id === replyTo.id
            ? {
                ...comment,
                replies: [
                  ...comment.replies,
                  {
                    id: `${comment.id}-${comment.replies.length + 1}`,
                    user: "@you",
                    avatar: <Assets.photo/>,
                    text: newComment.trim(),
                  },
                ],
              }
            : comment
        )
      );
    } else {
      // Add as a main comment
      setComments((prev) => [
        ...prev,
        {
          id: String(prev.length + 1),
          user: "@you",
          avatar:  <Assets.photo/>,
          text: newComment.trim(),
          replies: [],
        },
      ]);
    }

    setNewComment("");
    setReplyTo(null);
  };

  const renderComment = ({ item }: any) => (
    <Box mb={16}>
      <Box flexDirection="row" alignItems="flex-start">
        {item.avatar}
        <Box ml={8} flex={1}>
          <Texts fontFamily="archivoblack" font={14} weight={400} lineHeight={26} color="heading">
            {item.user}
          </Texts>
          <Texts font={13} fontFamily="medium" color="textSecondary" mt={2}>
            {item.text}
          </Texts>

          <Pressable onPress={() => setReplyTo({ id: item.id, user: item.user })}>
            <Texts mt={8} font={13} fontFamily="bold" color="heading">
              Reply
            </Texts>
          </Pressable>

          {item.replies?.length > 0 && (
            <Box mt={6} ml={40}>
              {item.replies.map((reply:any) => (
                <Box key={reply.id} mb={8} flexDirection="row">
                  {reply.avatar}
                  <Box ml={8} flex={1}>
                    <Texts fontFamily="medium" font={14} color="heading">
                      {reply.user}
                    </Texts>
                    <Texts font={14} mt={2}>
                      {reply.text}
                    </Texts>
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );










  const renderPost = ({ item }: { item: PostType }) => (

    <Box mb={64} ph={20}>




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



          {/* <Box ml={12}>
            <Assets.Chat height={20} width={20} />
          </Box>
          <Texts ml={4} font={13} fontFamily="medium" color="heading">
            {item.comments}
          </Texts> */}

<Pressable onPress={() => setModalVisible(true)}>
        <Box ml={12} flexDirection="row" alignItems="center">
          <Assets.Chat height={20} width={20} />
          <Texts ml={4} font={13} fontFamily="medium" color="heading">
            {comments.length}
          </Texts>
        </Box>
      </Pressable>





          
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
       <Pressable  onPress={() => openModal("custom")}  >  <Assets.UserPlus /></Pressable>
       
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
        <Pressable  onPress={() => openModal("filtration")}>
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





      <FiltrationModal
             visible={isModalVisible("filtration")}   
            onClose={closeModal}
        selectedActivity={selectedActivity}
        setSelectedActivity={setSelectedActivity}
        selectedContent={selectedContent}
        setSelectedContent={setSelectedContent}
        selectedPlatform={selectedPlatform}
        setSelectedPlatform={setSelectedPlatform}
        activities={activities}
        contents={contents}
        platforms={platforms}
        onApply={applyFilters}
      />

<AddFriendModal
  visible={isModalVisible("custom")}
  onClose={closeModal}
  contactsEnabled={contactsEnabled}
  setContactsEnabled={setContactsEnabled}
  facebookEnabled={facebookEnabled}
  setFacebookEnabled={setFacebookEnabled}
  instagramEnabled={instagramEnabled}
  setInstagramEnabled={setInstagramEnabled}
  friendsList={friendsList}
/>







   <BottomModal
        visible={modalVisible}
        title={`Comments (${comments.length})`}
        onClose={() => {
          setModalVisible(false);
          setReplyTo(null);
        }}
        onApply={() => {}}
        showApplyButton={false}
      >
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id}
          renderItem={renderComment}
          showsVerticalScrollIndicator={false}
        />

        {/* Comment Input */}
        <Box
          flexDirection="row"
          alignItems="center"
          bgColor="bg"
          radius={24}
          ph={16}
          height={46}
          mt={12}
        >
          <TextInput
            style={styles.input}
            placeholder={replyTo ? `Replying to ${replyTo.user}` : "Add comment..."}
            value={newComment}
            onChangeText={setNewComment}
          />
          {replyTo && (
            <Pressable onPress={() => setReplyTo(null)} style={{ marginRight: 8 }}>
              <Texts font={12} color="brown">
                Cancel
              </Texts>
            </Pressable>
          )}
          <Pressable onPress={handleAddComment}>
            <Texts font={14} fontFamily="medium" color="primary">
              Post
            </Texts>
          </Pressable>
        </Box>
      </BottomModal>














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
    input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0, // removes extra vertical padding for perfect center
    color: "#000",
  },
  shadow: {
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
});
