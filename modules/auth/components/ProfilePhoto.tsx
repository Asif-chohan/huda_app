import * as ImagePicker from "expo-image-picker";
import { Assets } from "@/assets/images";
import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Box from "@/components/Box";
import Text from "@/components/Text";
export default function AvatarUploader() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleUploadTextPress = () => {
    if (image) {
      setImage(null);
    } else {
      pickImage();
    }
  };

  return (
    <Box alignItems="center" mv={34}>
      <Box pos="relative">
        <TouchableOpacity
          style={styles.avatarPlaceholder}
          onPress={pickImage}
          activeOpacity={0.8}
        >
          {image ? (
            <Image source={{ uri: image }} height={80} width={80} />
          ) : (
            <Assets.User height={32} width={32} />
          )}
        </TouchableOpacity>

        {image && (
          <Box pos="absolute" bottom={2} right={-2}>
            <Assets.Edit height={28} width={28} />
          </Box>
        )}
      </Box>

      <TouchableOpacity onPress={handleUploadTextPress}>
        <Text
          font={12.5}
          weight={700}
          fontFamily="bold"
          lineHeight={24}
          color={image ? "redText" : "primary"}
        >
          {image ? "Delete photo" : "Upload photo"}
        </Text>
      </TouchableOpacity>
    </Box>
  );
}

const styles = StyleSheet.create({
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginBottom: 17,
  },
});
