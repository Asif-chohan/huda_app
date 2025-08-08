import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function AvatarUploader() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
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
      setImage(null); // Delete the photo
    } else {
      pickImage(); // Pick a photo
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
            <Ionicons name="person" size={32} color="#AAA29C" />
          )}
        </TouchableOpacity>

        {image && (
          <View style={styles.editIconContainer}>
            <Ionicons name="pencil" size={16} color="#fff" />
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
    bottom: 2, // move outside the avatar
    right: -2,
    backgroundColor: "#A259FF",
    borderRadius: 12,
    padding: 4,
    elevation: 2, // optional: shadow on Android
    shadowColor: "#000", // optional: shadow on iOS
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
});
