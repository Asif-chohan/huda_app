

import { Assets } from "@/assets/images";
import Box from "@/components/Box";
import Texts from "@/components/Text";
import { useModal } from "@/hooks/useModal";
import CustomModal from "@/modules/feed/components/CustomModal";
import React, { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, TextInput, } from "react-native";

import Button from "@/components/Button"; // adjust to your button import
import { CategorySelector } from "./CategorySelector";
import { HeadlineDescriptionInput } from "./HeadlineDescriptionInput";
import { TagInput } from "./TagInput";
import { UploadImage } from "./UploadImage";

import BottomModal from "@/components/BottomModal";
import type { ImageSourcePropType } from "react-native";


type ActivityDetailsModalProps = {
  visible: boolean;
  onClose: () => void;
  image: ImageSourcePropType | null; // ✅ Image typing
};

const ActivityDetailsModal: React.FC<ActivityDetailsModalProps> = ({
  visible,
  onClose,
  image,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <CustomModal visible={visible} onClose={onClose} title="Add Activity">
      <Box flex={1} bgColor="surface">
        {/* White Area with Image */}
    {/* White Area with Image */}
<Box
  bgColor="bg"
  radius={16}
  alignItems="center"
  mb={40}
  style={{ overflow: "hidden" }}
>
  {image && (
    <Image
      source={image}
      style={{
        width: isExpanded ? "100%" : 220, // ✅ only width changes
        height: 220,                       // ✅ fixed height
        borderRadius: 12,
      }}
      resizeMode="cover"
    />
  )}

  {/* Expand/Collapse Icon */}
  <Pressable
    onPress={() => setIsExpanded(!isExpanded)}
    style={{
      position: "absolute",
      bottom: 12,
      right: 12,
    
    }}
  >
    {isExpanded ? (
      <Assets.ArrowIn width={40} height={40} />  // ✅ collapse icon
    ) : (
      <Assets.ArrowOut width={40} height={40} /> // ✅ expand icon
    )}
  </Pressable>
</Box>


        {/* Headline + Description */}
        <HeadlineDescriptionInput />

        {/* Category Selector */}
        <CategorySelector onSelect={(category) => console.log("Selected:", category)} />

        {/* Tags */}
        <Box mt={28} mb={32}>
          <TagInput />
        </Box>

        {/* Post Button */}
        <Button
          title="Post"
          onPress={() => console.log("Post clicked")}
          paddingX={32}
          paddingY={12}
        />
      </Box>
    </CustomModal>
  );
};













const ActivityModal = () => {
  const [activeActivity, setActiveActivity] = useState<"auto" | "manual">("auto");
  const [selectedImage, setSelectedImage] = useState<any>(null);
    const { openModal, closeModal, isModalVisible } = useModal();



  return (
    <>
    <CustomModal
      visible={isModalVisible("autoActivity")}
      onClose={closeModal}
      title="Add Activity"
    >
      <Box flex={1} bgColor="surface" mb={44}>
        {/* Tabs */}
        <Box flexDirection="row" mb={22}  >
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
                <Texts font={15.5} lineHeight={24} fontFamily="archivoblack" weight={400} color="heading" mb={12}>
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
                  >  <Assets.Prime /></Box>
                  <Box
                    height={48}
                    width={48}
                    radius={24}
                    bgColor="bg"
                    justifyContent="center"
                    alignItems="center"
                    mr={12}
                  >
                    <Assets.Netflix /></Box>
                  <Box
                    height={48}
                    width={48}
                    radius={24}
                    bgColor="bg"
                    justifyContent="center"
                    alignItems="center"
                    mr={12}
                  >    <Assets.Hulu /></Box>
                </Box>

                {/* Horizontal List of Movies */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {[
                    { id: 1, title: "GOT", image: require("@/assets/images/image.png"), },
                    { id: 2, title: "Harry Potter", image: require("@/assets/images/image.png"), },
                    { id: 3, title: "It ends with us", image: require("@/assets/images/image.png") },
                  ].map((item) => (
                    <Box key={item.id} mr={12} width={120}>
                      <Image
                        source={item.image}
                        style={{ width: 128, height: 175, borderRadius: 16 }}
                        resizeMode="cover"
                      />



                  


                      <Box pos="absolute" bottom={40} left={8} right={8} alignItems="center">
                        <Button title={"Add"} paddingX={12} paddingY={7} onPress={() => {    setSelectedImage(item.image); 
                  closeModal();
                        openModal("autoUpdateActivity");
                      console.log("Modal state for aut activity :", isModalVisible("autoUpdateActivity"))}
                } />
                          
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
                <Texts font={15.5} lineHeight={24} fontFamily="archivoblack" weight={400} color="heading" mb={12}>
                  Listened
                </Texts>
                <Box flexDirection="row" alignItems="center" bgColor="bg" pv={15} pl={16} pr={12} radius={16}>

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
                    <Texts font={12.5} lineHeight={26} weight={500} fontFamily="medium" color="heading">
                      Unlock your recent songs
                    </Texts>
                    <Texts font={10} lineHeight={18} weight={500} fontFamily="medium" color="textSecondary">
                      Connect your Spotify.
                    </Texts>
                  </Box>
                  <Box  >  <Assets.Right height={24} width={24} /></Box>
                </Box>


              </Box>

              {/* Read Section */}
       
                            <Box mb={28}>
                <Texts font={15.5} lineHeight={24} fontFamily="archivoblack" weight={400} color="heading" mb={12}>
                   Read
                </Texts>
                <Box flexDirection="row" alignItems="center" bgColor="bg" pv={15} pl={16} pr={12} radius={16}>

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
                    <Texts font={12.5} lineHeight={26} weight={500} fontFamily="medium" color="heading">
                     Unlock your recent books
                    </Texts>
                    <Texts font={10} lineHeight={18} weight={500} fontFamily="medium" color="textSecondary">
                             Connect your Google books or Amazon Kindle.
                    </Texts>
                  </Box>
                  <Box  >  <Assets.Right height={24} width={24} /></Box>
                </Box>


              </Box>

              {/* Played Section */}
  


 <Box mb={28}>
                <Texts font={15.5} lineHeight={24} fontFamily="archivoblack" weight={400} color="heading" mb={12}>
                          Played
                </Texts>
                <Box flexDirection="row" alignItems="center" bgColor="bg" pv={15} pl={16} pr={12} radius={16}>

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
                    <Texts font={12.5} lineHeight={26} weight={500} fontFamily="medium" color="heading">
                       Unlock your recent games
                    </Texts>
                    <Texts font={10} lineHeight={18} weight={500} fontFamily="medium" color="textSecondary">
                                Connect your Xbox or PlayStation.
                    </Texts>
                  </Box>
                  <Box  >  <Assets.Right height={24} width={24} /></Box>
                </Box>


              </Box>



            </ScrollView>
          ) : (
            <Box flex={1} >
      





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
      <Box flex={1} bgColor="strokLight" mr={15} style={{ height: 1 }} />
      <Texts
        font={12.5}
        color="textSecondary"
        weight={400}
        lineHeight={24}
      >
        or
      </Texts>
      <Box flex={1} bgColor="strokLight" style={{ height: 1 }} ml={15} />
    </Box>

    {/* Upload image */}
  



   <UploadImage onUpload={() => console.log("Upload clicked")} />

      {/* Category Selector */}
      <CategorySelector onSelect={(category) => console.log("Selected:", category)} />

      {/* Headline + Description */}
      <HeadlineDescriptionInput />

      {/* Tags */}
      <Box mt={28} mb={32}>
      <TagInput />
</Box>




    {/* Post button */}
    <Button
      title="Post"
      onPress={() => {}}
      paddingX={32}
      paddingY={12}
 
    />




   </Box>
        
          )}
        </Box>
      </CustomModal>
          <ActivityDetailsModal
        visible={isModalVisible("autoUpdateActivity")}
        onClose={closeModal}
        image={selectedImage}
      />
     <BottomModal
         visible={isModalVisible("addTag")}
         onClose={closeModal}
         onApply={() => {}}
         showApplyButton={false}
         title="Add tag"
       >
      <TextInput
      placeholder="#Add tag"
      placeholderTextColor="#9E9E9E"
      style={{
        backgroundColor: "#fff",
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 16,
        fontSize: 15,
        color: "#1D1D1D",
        borderWidth: 1,
        borderColor: "#E6E6E6",
        marginBottom: 24,
      }}
    />
        
        
        
        
        <Button
        
        onPress={() => {}}
        title="Add"
        paddingX={42.5}
        
        />
       
      </BottomModal>
      </>
  );
};

export default ActivityModal;


const styles = StyleSheet.create({

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
