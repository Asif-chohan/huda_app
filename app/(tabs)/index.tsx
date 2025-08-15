import Box from "@/components/Box";
import Buttons from "@/components/Button";
import Texts from "@/components/Text";

import { Assets } from "@/assets/images";

import React, { useState } from "react";
import { useModal } from "@/hooks/useModal";
import AddFriendModal from "@/modules/feed/components/AddFriendModal";
import FiltrationModal from "@/modules/feed/components/FiltrationModal";
import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import CommentsModal from "@/modules/feed/components/CommentItem";
import { useToggleSwitches } from "@/hooks/useToggleSwitches";
import { PostType } from "@/types/feed";

import {
  forYouData,
  trendingData,
  topPicksData,
  dummyComments,
  activities,
  contents,
  platforms,
  friendsList,
} from "@/modules/feed/data/feed";
import { useFeedFilters } from "@/modules/feed/hooks/useFilter";
import { FilterChip } from "@/modules/feed/components/FilterChip";

export default function FeedScreen() {
  const applyFilters = () => {
    //  apply  the filter logic
  };
  const { openModal, closeModal, isModalVisible } = useModal();
  const { toggles, toggleSwitch } = useToggleSwitches();

  const [comments, setComments] = useState(dummyComments);
  const [newComment, setNewComment] = useState("");
  const [replyTo, setReplyTo] = useState<{ id: string; user: string } | null>(
    null
  );

  const [selectedTab, setSelectedTab] = useState<
    "forYou" | "trending" | "topPicks"
  >("forYou");
  const { filters, setFilter, clearFilter } = useFeedFilters();
  // Filtering function
  const getCurrentData = (): PostType[] => {
    let data: PostType[] =
      selectedTab === "forYou"
        ? forYouData
        : selectedTab === "trending"
        ? trendingData
        : topPicksData;

    if (filters.activity) {
      data = data.filter((item) => item.activityType === filters.activity);
    }

    if (filters.content) {
      data = data.filter((item) => item.contentType === filters.content);
    }

    if (filters.platform) {
      data = data.filter((item) => item.platform === filters.platform);
    }

    return data;
  };

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
                    avatar: Assets.photo,
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
          avatar: Assets.photo,
          text: newComment.trim(),
          replies: [],
        },
      ]);
    }

    setNewComment("");
    setReplyTo(null);
  };

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
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box flexDirection="row" alignItems="center">
          <Assets.Heart height={20} width={20} />
          <Texts ml={4} font={13} fontFamily="medium" color="heading">
            {item.likes}
          </Texts>

          <Pressable onPress={() => openModal("chat")}>
            <Box ml={12} flexDirection="row" alignItems="center">
              <Assets.Chat height={20} width={20} />
              <Texts ml={4} font={13} fontFamily="medium" color="heading">
                {comments.length}
              </Texts>
            </Box>
          </Pressable>
        </Box>

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
  );

  return (
    <Box flex={1} bgColor="bgSecondary" pt={54}>
      {/* Header */}
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        ph={20}
      >
        <Box pos="relative">
          <Box style={styles.purpleShadow} />
          <Assets.photo />
        </Box>
        <Box flexDirection="row" alignItems="center">
          <Assets.Bell style={{ marginRight: 16 }} />
          <Pressable onPress={() => openModal("custom")}>
            <Assets.UserPlus />
          </Pressable>
        </Box>
      </Box>

      {/* Tab Row + Selected Filters */}
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        ph={20}
        pv={20}
      >
        <Box>
          {/* Tab Row */}
          <Box flexDirection="row">
            <Pressable onPress={() => setSelectedTab("forYou")}>
              <Texts
                lineHeight={28}
                fontFamily="archivoblack"
                font={13.5}
                weight={400}
                color={selectedTab === "forYou" ? "heading" : "filterGray"}
              >
                FOR YOU
              </Texts>
            </Pressable>
            <Pressable onPress={() => setSelectedTab("trending")}>
              <Texts
                color={selectedTab === "trending" ? "heading" : "filterGray"}
                fontFamily="archivoblack"
                font={13.5}
                weight={400}
                pl={9.5}
                lineHeight={28}
              >
                TRENDING
              </Texts>
            </Pressable>
            <Pressable onPress={() => setSelectedTab("topPicks")}>
              <Texts
                color={selectedTab === "topPicks" ? "heading" : "filterGray"}
                fontFamily="archivoblack"
                font={13.5}
                weight={400}
                pl={9.5}
                lineHeight={28}
              >
                TOP PICKS
              </Texts>
            </Pressable>
          </Box>

          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
            {filters.activity && (
              <FilterChip
                label={filters.activity}
                onRemove={() => clearFilter("activity")}
              />
            )}
            {filters.content && (
              <FilterChip
                label={filters.content}
                onRemove={() => clearFilter("content")}
              />
            )}
            {filters.platform && (
              <FilterChip
                label={filters.platform}
                icon={
                  platforms.find((p) => p.name === filters.platform)?.icon ||
                  null
                }
                onRemove={() => clearFilter("platform")}
              />
            )}
          </View>
        </Box>
        <Pressable onPress={() => openModal("filtration")}>
          <Assets.Tuning />
        </Pressable>
      </Box>

      {/* Feed */}
      <FlatList
        data={getCurrentData()}
        keyExtractor={(item) => item.id}
        renderItem={renderPost}
        showsVerticalScrollIndicator={false}
      />
      <FiltrationModal
        visible={isModalVisible("filtration")}
        onClose={closeModal}
        filters={filters}
        setFilter={setFilter}
        activities={activities}
        contents={contents}
        platforms={platforms}
        onApply={applyFilters}
      />

      <AddFriendModal
        visible={isModalVisible("custom")}
        onClose={closeModal}
        toggles={toggles}
        toggleSwitch={toggleSwitch}
        friendsList={friendsList}
      />

      <CommentsModal
        visible={isModalVisible("chat")}
        onClose={closeModal}
        comments={comments}
        newComment={newComment}
        setNewComment={setNewComment}
        replyTo={replyTo}
        setReplyTo={setReplyTo}
        handleAddComment={handleAddComment}
      />
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
  // input: {
  //   flex: 1,
  //   fontSize: 16,
  //   paddingVertical: 0, // removes extra vertical padding for perfect center
  //   color: "#000",
  // },
  // shadow: {
  //   shadowColor: "#000",
  //   shadowOpacity: 0.05,
  //   shadowRadius: 4,
  //   shadowOffset: { width: 0, height: 2 },
  //   elevation: 1,
  // },
});
