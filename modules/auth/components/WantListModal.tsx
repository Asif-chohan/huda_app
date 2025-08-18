import React from "react";
import { Image } from "react-native";
import Box from "@/components/Box"; // adjust import path
import BottomModal from "@/components/BottomModal"; // adjust import path
import Texts from "@/components/Text"; // adjust import path
import Buttons from "@/components/Button"; // adjust import path

interface WantListModalProps {
  visible: boolean;
  selectedPost: any; // you can replace `any` with your proper type later
  closeModal: () => void;
}

const WantListModal: React.FC<WantListModalProps> = ({
  visible,
  selectedPost,
  closeModal,
}) => {
  if (!selectedPost) return null;

  const getTitle = () => {
    switch (selectedPost.activityType) {
      case "read":
        return "My future read list";
      case "listen":
        return "My future playlist";
      case "play":
        return "My future game list";
      default:
        return "My future watch list";
    }
  };

  const getSubtitle = () => {
    switch (selectedPost.activityType) {
      case "read":
        return "15 books";
      case "listen":
        return "25 music";
      case "play":
        return "12 games";
      default:
        return "10 movies";
    }
  };

  return (
    <BottomModal
      visible={visible}
      title={`Want to ${selectedPost.activityType || ""}`}
      onClose={closeModal}
      onApply={() => {}}
      showApplyButton={false}
    >
      <Box alignItems="center">
        {/* Image + text container */}
        <Box>
          {/* Image stack */}
          <Box style={{ flexDirection: "row" }}>
            {[0, 1, 2].map((i) => (
              <Image
                key={i}
                source={selectedPost.image}
                style={{
                  width: 127,
                  height: 175,
                  borderRadius: 8,
                  marginLeft: i === 0 ? 0 : -90,
                  borderWidth: 1,
                  borderColor: "#1D1D1D",
                  zIndex: 3 - i,
                  // Shadow (iOS)
                  shadowColor: "#1D1D1D",
                  shadowOffset: { width: 3, height: 3 },
                  shadowOpacity: 1,
                  shadowRadius: 0,
                }}
                resizeMode="cover"
              />
            ))}
          </Box>

          {/* Title + subtitle */}
          <Box mt={14} style={{ alignItems: "flex-start" }}>
            <Texts
              font={12.5}
              fontFamily="semibold"
              weight={600}
              color="heading"
              lineHeight={26}
            >
              {getTitle()}
            </Texts>
            <Texts
              font={12}
              fontFamily="regular"
              color="textSecondary"
              lineHeight={20}
            >
              {getSubtitle()}
            </Texts>
          </Box>
        </Box>

        {/* Buttons */}
        <Box flexDirection="row" mt={28}>
          <Buttons
            title="Cancel"
            onPress={closeModal}
            paddingX={31}
            bgColor="#DFD8D3"
          />
          <Buttons title="Confirm" onPress={() => {}} paddingX={31} ml={12} />
        </Box>
      </Box>
    </BottomModal>
  );
};

export default WantListModal;
