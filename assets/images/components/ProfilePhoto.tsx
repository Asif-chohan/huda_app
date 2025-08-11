// import Pencil from "@/assets/images/Edit.svg";
// import User from "@/assets/images/User.svg";
import * as ImagePicker from "expo-image-picker";
import { Assets } from "@/assets/images";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
    <View style={styles.photoUpload}>
      <View style={styles.avatarWrapper}>
        <TouchableOpacity
          style={styles.avatarPlaceholder}
          onPress={pickImage}
          activeOpacity={0.8}
        >
          {image ? (
            <Image source={{ uri: image }} style={styles.avatarImage} />
          ) : (
            <Assets.User />
          )}
        </TouchableOpacity>

        {image && (
          <View style={styles.editIconContainer}>
            <Assets.Prime />
          </View>
        )}
      </View>

      <TouchableOpacity onPress={handleUploadTextPress}>
        <Text style={[styles.uploadText, image && styles.deleteText]}>
          {image ? "Delete photo" : "Upload photo"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  photoUpload: {
    alignItems: "center",
    marginVertical: 34,
  },
  avatarWrapper: {
    position: "relative",
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
  uploadText: {
    color: "#A259FF",
    fontWeight: "700",
    marginTop: 17,
    fontSize: 16,
  },
  deleteText: {
    color: "#B73229",
  },
  editIconContainer: {
    position: "absolute",
    bottom: 2,
    right: -2,
  },
});
