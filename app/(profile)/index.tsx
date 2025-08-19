import { Assets } from "@/assets/images";
import Box from "@/components/Box";
import Texts from "@/components/Text";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
// adjust to your colors file
import BottomModal from "@/components/BottomModal";
import { default as Button, default as Buttons } from "@/components/Button";
import { useModal } from "@/hooks/useModal";
import CustomModal from "@/modules/feed/components/CustomModal";
import ProgressItem from "@/modules/profile/components/ProgressBar";
import { dummyPosts } from "@/modules/profile/data/post";

export default function ProfileScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"posts" | "want" | "finished">(
    "posts"
  );
  const [activeActivity, setActiveActivity] = useState<"auto" | "manual">(
    "auto"
  );
  const { openModal, closeModal, isModalVisible } = useModal();
  const filteredData =
    activeTab === "posts"
      ? dummyPosts.filter((p) => p.status === null)
      : activeTab === "want"
      ? dummyPosts.filter((p) => p.status === "want")
      : dummyPosts.filter((p) => p.status === "finished");

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: "#FDF4F0",
      }}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Pressable style={styles.backIcon} onPress={() => router.back()}>
        <Assets.Back />
      </Pressable>

      {/* User Info Row */}
      <Box flexDirection="row" alignItems="center" mt={28} ph={4}>
        <Box>
          <Assets.photo height={60} width={60} />
        </Box>
        <Box ml={12}>
          <Texts
            font={10}
            lineHeight={26}
            fontFamily="archivoblack"
            weight={400}
            color="heading"
          >
            @janny
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
              MOVIE BUFF
            </Texts>
          </Box>
        </Box>
        <Box ml="auto" alignItems="flex-end">
          <Texts
            font={12.5}
            fontFamily="archivoblack"
            self="center"
            weight={400}
            lineHeight={26}
          >
            123
          </Texts>
          <Texts
            font={10}
            fontFamily="medium"
            lineHeight={18.5}
            color="textSecondary"
          >
            Following
          </Texts>
        </Box>
        <Box ml={12} alignItems="flex-end">
          <Texts
            font={12.5}
            fontFamily="archivoblack"
            self="center"
            weight={400}
            lineHeight={26}
          >
            97
          </Texts>
          <Texts
            font={10}
            fontFamily="medium"
            lineHeight={18.5}
            color="textSecondary"
          >
            Followers
          </Texts>
        </Box>
      </Box>

      {/* Bio */}
      <Box mt={12} ph={4}>
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
          />
        </Box>
      </Box>

      {/* Follow Button */}
      <Box mt={20} self="flex-start" ph={4}>
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
                paddingVertical: 8, // vertical padding
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
                <Pressable onPress={() => openModal("addActivity")}>
                  <Box>
                    <Assets.More />
                  </Box>
                </Pressable>
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
              <Texts mt={12} font={12.5} lineHeight={26} fontFamily="bold">
                {item.title}
              </Texts>
              <Texts font={10} lineHeight={19.5} color="textSecondary">
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

                  <Pressable onPress={() => {}}>
                    <Box ml={12} flexDirection="row" alignItems="center">
                      <Assets.Chat height={20} width={20} />
                      <Texts
                        ml={4}
                        font={13}
                        fontFamily="medium"
                        color="heading"
                      >
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
                    leftIcon={<Assets.AddCircle width={20} height={20} />}
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
          <Box flexDirection="row" flexWrap="wrap" gap={70}>
            {filteredData.map((item, index) => (
              <Box
                key={item.id}
                alignItems="flex-start"
                mb={20}
                style={{
                  width: "40%", // allow two cards per row
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
                    alignItems: "flex-start", // Match parent alignment
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

      <BottomModal
        visible={isModalVisible("addActivity")}
        onClose={closeModal}
        onApply={() => {}}
        showApplyButton={false}
        title=""
      >
        {/* Modal Content */}
        <Box>
          {/* Row - Add activity */}
          <Pressable
            onPress={() => {
              closeModal(); // hide BottomModal
              openModal("autoActivity"); // show CustomModal
            }}
          >
            <Box flexDirection="row" alignItems="center" mb={20} pv={10}>
              <Assets.postCarousel height={24} width={24} />
              <Texts
                ml={16}
                font={12.5}
                lineHeight={24}
                fontFamily="regular"
                weight={400}
                color="heading"
              >
                Add activity
              </Texts>
            </Box>
          </Pressable>

          {/* Row - Want to read */}
          <Pressable
            onPress={() => {
              router.push("/(profile)/want-read");
              closeModal();
            }}
          >
            <Box flexDirection="row" alignItems="center" mb={20} pv={10}>
              <Assets.Checklist height={24} width={24} />
              <Texts
                ml={16}
                font={12.5}
                lineHeight={24}
                fontFamily="regular"
                weight={400}
                color="heading"
              >
                Want to read
              </Texts>
            </Box>
          </Pressable>

          {/* Row - Mark as finished */}
          <Pressable onPress={() => {}}>
            <Box flexDirection="row" alignItems="center" pv={10}>
              <Assets.CheckCircle height={24} width={24} />
              <Texts
                ml={16}
                font={12.5}
                lineHeight={24}
                fontFamily="regular"
                weight={400}
                color="heading"
              >
                Mark as finished
              </Texts>
            </Box>
          </Pressable>
        </Box>
      </BottomModal>

      <CustomModal
        visible={isModalVisible("autoActivity")}
        onClose={closeModal}
        title="Add Activity"
      >
        <Box flex={1} bgColor="surface" mb={44}>
          {/* Tabs */}
          <Box flexDirection="row" mb={22}>
            {["auto", "manual"].map((tab) => {
              const isActive = activeActivity === tab;
              return (
                <Pressable
                  key={tab}
                  onPress={() => setActiveActivity(tab as "auto" | "manual")}
                  style={{
                    flex: 1,
                    alignItems: "center",
                    paddingVertical: 8,
                    borderBottomWidth: 1,
                    borderBottomColor: isActive ? "#1D1D1D" : "#CFCBC8",
                  }}
                >
                  <Texts
                    font={12.5}
                    lineHeight={24}
                    fontFamily="regular"
                    color={isActive ? "heading" : "textSecondary"}
                  >
                    {tab === "auto" ? "Auto updated" : "Manual"}
                  </Texts>
                </Pressable>
              );
            })}
          </Box>

          {/* Tab Content */}
          {activeActivity === "auto" ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              {/* Watched Section */}
              <Box mb={24}>
                <Texts
                  font={15.5}
                  lineHeight={24}
                  fontFamily="archivoblack"
                  weight={400}
                  color="heading"
                  mb={12}
                >
                  Watched
                </Texts>

                {/* Platforms */}
                <Box flexDirection="row" alignItems="center" mb={16}>
                  <Box
                    height={48}
                    width={48}
                    radius={24}
                    bgColor="bg"
                    justifyContent="center"
                    alignItems="center"
                    mr={12}
                  >
                    <Assets.AppleTv />
                  </Box>

                  <Box
                    height={48}
                    width={48}
                    radius={24}
                    bgColor="bg"
                    justifyContent="center"
                    alignItems="center"
                    mr={12}
                  >
                    {" "}
                    <Assets.Prime />
                  </Box>
                  <Box
                    height={48}
                    width={48}
                    radius={24}
                    bgColor="bg"
                    justifyContent="center"
                    alignItems="center"
                    mr={12}
                  >
                    <Assets.Netflix />
                  </Box>
                  <Box
                    height={48}
                    width={48}
                    radius={24}
                    bgColor="bg"
                    justifyContent="center"
                    alignItems="center"
                    mr={12}
                  >
                    <Assets.Hulu />
                  </Box>
                </Box>

                {/* Horizontal List of Movies */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {[
                    {
                      id: 1,
                      title: "GOT",
                      image: require("@/assets/images/image.png"),
                    },
                    {
                      id: 2,
                      title: "Harry Potter",
                      image: require("@/assets/images/image.png"),
                    },
                    {
                      id: 3,
                      title: "It ends with us",
                      image: require("@/assets/images/image.png"),
                    },
                  ].map((item) => (
                    <Box key={item.id} mr={12} width={120}>
                      <Image
                        source={item.image}
                        style={{ width: 128, height: 175, borderRadius: 16 }}
                        resizeMode="cover"
                      />

                      <Box
                        pos="absolute"
                        bottom={40}
                        left={8}
                        right={8}
                        alignItems="center"
                      >
                        {" "}
                        <Button
                          title={"Add"}
                          paddingX={12}
                          paddingY={7}
                          onPress={() => {}}
                        />{" "}
                      </Box>

                      <Texts
                        mt={8}
                        font={12.5}
                        fontFamily="medium"
                        lineHeight={26}
                        weight={500}
                        color="heading"
                      >
                        {item.title}
                      </Texts>
                    </Box>
                  ))}
                </ScrollView>
              </Box>

              {/* Listened Section */}
              <Box mb={28}>
                <Texts
                  font={15.5}
                  lineHeight={24}
                  fontFamily="archivoblack"
                  weight={400}
                  color="heading"
                  mb={12}
                >
                  Listened
                </Texts>
                <Box
                  flexDirection="row"
                  alignItems="center"
                  bgColor="bg"
                  pv={15}
                  pl={16}
                  pr={12}
                  radius={16}
                >
                  <Box
                    width={40}
                    height={40}
                    radius={20}
                    bgColor="surfaceGray"
                    borderWidth={2}
                    borderColor="bg"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Assets.Spotify />
                  </Box>

                  <Box mh={16} flex={1}>
                    <Texts
                      font={12.5}
                      lineHeight={26}
                      weight={500}
                      fontFamily="medium"
                      color="heading"
                    >
                      Unlock your recent songs
                    </Texts>
                    <Texts
                      font={10}
                      lineHeight={18}
                      weight={500}
                      fontFamily="medium"
                      color="textSecondary"
                    >
                      Connect your Spotify.
                    </Texts>
                  </Box>
                  <Box>
                    <Assets.Right height={24} width={24} />
                  </Box>
                </Box>
              </Box>

              {/* Read Section */}

              <Box mb={28}>
                <Texts
                  font={15.5}
                  lineHeight={24}
                  fontFamily="archivoblack"
                  weight={400}
                  color="heading"
                  mb={12}
                >
                  Read
                </Texts>
                <Box
                  flexDirection="row"
                  alignItems="center"
                  bgColor="bg"
                  pv={15}
                  pl={16}
                  pr={12}
                  radius={16}
                >
                  <Box
                    width={40}
                    height={40}
                    radius={20}
                    bgColor="surfaceGray"
                    borderWidth={2}
                    borderColor="bg"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Assets.GoogleBook />
                  </Box>

                  <Box mh={16} flex={1}>
                    <Texts
                      font={12.5}
                      lineHeight={26}
                      weight={500}
                      fontFamily="medium"
                      color="heading"
                    >
                      Unlock your recent books
                    </Texts>
                    <Texts
                      font={10}
                      lineHeight={18}
                      weight={500}
                      fontFamily="medium"
                      color="textSecondary"
                    >
                      Connect your Google books or Amazon Kindle.
                    </Texts>
                  </Box>
                  <Box>
                    <Assets.Right height={24} width={24} />
                  </Box>
                </Box>
              </Box>

              {/* Played Section */}

              <Box mb={28}>
                <Texts
                  font={15.5}
                  lineHeight={24}
                  fontFamily="archivoblack"
                  weight={400}
                  color="heading"
                  mb={12}
                >
                  Played
                </Texts>
                <Box
                  flexDirection="row"
                  alignItems="center"
                  bgColor="bg"
                  pv={15}
                  pl={16}
                  pr={12}
                  radius={16}
                >
                  <Box
                    width={40}
                    height={40}
                    radius={20}
                    bgColor="surfaceGray"
                    borderWidth={2}
                    borderColor="bg"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Assets.Xbox />
                  </Box>

                  <Box mh={16} flex={1}>
                    <Texts
                      font={12.5}
                      lineHeight={26}
                      weight={500}
                      fontFamily="medium"
                      color="heading"
                    >
                      Unlock your recent games
                    </Texts>
                    <Texts
                      font={10}
                      lineHeight={18}
                      weight={500}
                      fontFamily="medium"
                      color="textSecondary"
                    >
                      Connect your Xbox or PlayStation.
                    </Texts>
                  </Box>
                  <Box>
                    <Assets.Right height={24} width={24} />
                  </Box>
                </Box>
              </Box>
            </ScrollView>
          ) : (
            <Box flex={1}>
              {/* Search bar */}

              <Box
                flexDirection="row"
                alignItems="center"
                bgColor="bg"
                radius={23}
                ph={16}
                height={46}
                mb={20}
                style={styles.shadow}
              >
                <Assets.Search style={{ marginRight: 8 }} />
                <TextInput style={styles.input} placeholder="Search" />
              </Box>

              {/* OR row */}
              <Box flexDirection="row" alignItems="center" mb={20}>
                <Box
                  flex={1}
                  bgColor="strokLight"
                  mr={15}
                  style={{ height: 1 }}
                />
                <Texts
                  font={12.5}
                  color="textSecondary"
                  weight={400}
                  lineHeight={24}
                >
                  or
                </Texts>
                <Box
                  flex={1}
                  bgColor="strokLight"
                  style={{ height: 1 }}
                  ml={15}
                />
              </Box>

              {/* Upload image */}
              <Texts
                font={15.5}
                lineHeight={24}
                fontFamily="archivoblack"
                weight={400}
                color="heading"
                mb={12}
              >
                Upload image
                <Texts
                  font={12.5}
                  fontFamily="regular"
                  self="center"
                  weight={400}
                  lineHeight={26}
                  mb={12}
                >
                  (optional)
                </Texts>
              </Texts>

              {/* Upload button */}
              <Box self="flex-start">
                <Buttons
                  title="Upload"
                  onPress={() => {}}
                  paddingX={16}
                  paddingY={9}
                  leftIcon={<Assets.Upload width={16} height={16} />}
                />
              </Box>

              {/* Select category */}
              <Texts
                font={15.5}
                lineHeight={24}
                fontFamily="archivoblack"
                weight={400}
                color="heading"
                mt={28}
                mb={12}
              >
                Select category
              </Texts>

              {/* Categories */}
              <Box flexDirection="row" flexWrap="wrap">
                {[
                  { name: "Watched", icon: <Assets.Claspperboard /> },
                  { name: "Read", icon: <Assets.Book /> },
                  { name: "Listened", icon: <Assets.Music /> },
                  { name: "Played", icon: <Assets.GamePad /> },
                ].map((item) => (
                  <Pressable
                    key={item.name}
                    style={{
                      backgroundColor: "#fff",
                      paddingHorizontal: 12,
                      paddingVertical: 6,
                      borderRadius: 40,
                      borderWidth: 1,
                      marginRight: 8,
                      marginBottom: 10,
                      borderColor: "#F0EAE6",
                    }}
                  >
                    <Box flexDirection="row" alignItems="center">
                      <Box mr={4}>
                        <Texts>{item.icon}</Texts>
                      </Box>
                      <Texts
                        font={12}
                        lineHeight={20}
                        weight={400}
                        fontFamily="regular"
                      >
                        {item.name}
                      </Texts>
                    </Box>
                  </Pressable>
                ))}
              </Box>

              {/* Headline input */}
              <Box>
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
              </Box>

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
                    textAlignVertical: "top", // for multiline alignment
                  }}
                />
              </Box>

              {/* Tags */}
              <Box flexDirection="row" gap={4}>
                <Assets.AddColCirclefrom height={20} width={20} />
                <Texts
                  font={12.5}
                  weight={700}
                  lineHeight={24}
                  fontFamily="bold"
                  mb={8}
                  color="primary"
                >
                  Add tag
                </Texts>

                <Box ml={16} flexDirection="row" flexWrap="wrap" mb={20}>
                  <Box
                    flexDirection="row"
                    alignItems="center"
                    bgColor="bg"
                    radius={40}
                    ph={12}
                    pv={6}
                    mr={8}
                    mb={8}
                  >
                    <Texts font={13} color="heading">
                      #beetlejuice
                    </Texts>
                  </Box>
                </Box>
              </Box>

              {/* Post button */}
              <Buttons
                title="Post"
                onPress={() => {}}
                paddingX={32}
                paddingY={12}
                bgColor="#B69EFF"
              />
            </Box>
          )}
        </Box>
      </CustomModal>
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
  input: {
    fontSize: 16,
    paddingVertical: 0,
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
