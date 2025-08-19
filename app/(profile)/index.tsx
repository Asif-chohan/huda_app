import { Assets } from "@/assets/images";
import Box from "@/components/Box";
import Texts from "@/components/Text";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet } from "react-native";
// adjust to your colors file
import { default as Buttons } from "@/components/Button";
import { useModal } from "@/hooks/useModal";
import ActivityModal from "@/modules/profile/components/ActivityModal";
import OptionsModal from "@/modules/profile/components/OptionModal";
import ProgressItem from "@/modules/profile/components/ProgressBar";
import { dummyPosts } from "@/modules/profile/data/post";


export default function ProfileScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"posts" | "want" | "finished">("posts");
  const [activeActivity, setActiveActivity] = useState<"auto" | "manual">("auto");
  const { openModal, closeModal, isModalVisible } = useModal();
  const filteredData =
    activeTab === "posts"
      ? dummyPosts.filter((p) => p.status === null)
      : activeTab === "want"
        ? dummyPosts.filter((p) => p.status === "want")
        : dummyPosts.filter((p) => p.status === "finished");

  return (
    <ScrollView style={{ flex: 1, paddingTop: 50, paddingHorizontal: 16, backgroundColor: "#FDF4F0", }} contentContainerStyle={{ paddingBottom: 40 }}>

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
          <Texts font={10} fontFamily="medium" lineHeight={18.5} color="textSecondary">Following</Texts>
        </Box>
        <Box ml={12} alignItems="flex-end">
          <Texts font={12.5} fontFamily="archivoblack" self="center" weight={400} lineHeight={26}>97</Texts>
          <Texts font={10} fontFamily="medium" lineHeight={18.5} color="textSecondary">Followers</Texts>
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
          /></Box>
      </Box>

      {/* Follow Button */}
      <Box mt={20} self="flex-start" ph={4}>


        <Buttons
          title="Follow"
          onPress={() => { }}

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
                <Pressable onPress={() => {openModal("addActivity");
                      console.log("Modal state after open:", isModalVisible("addActivity"))}
                }>
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

                  <Pressable onPress={() => { }}>
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
                    onPress={() => { }}
                    paddingX={12}
                    paddingY={7}
                  />
                  <Box ml={8}>
                    <Buttons
                      title="Want"
                      onPress={() => { }}
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








  <OptionsModal />
      <ActivityModal />







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
