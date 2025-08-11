import { Assets } from "@/assets/images";
import AccountCard from "@/components/AccountCard";
import Button from "@/components/Button";
import Title from "@/components/Title";
import { useUserStore } from "@/store/userStore";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
interface PlatformType {
  id: number;
  name: string;
  icon: any;
}
const allAccountsList: PlatformType[] = [
  { id: 1, name: "Netflix", icon: <Assets.Netflix /> },
  { id: 2, name: "Apple TV", icon: <Assets.AppleTv /> },
  { id: 3, name: "Hulu", icon: <Assets.Hulu /> },
  { id: 4, name: "Kindle", icon: <Assets.AmazoneKindle /> },
  {
    id: 5,
    name: "Google Play Books",
    icon: <Assets.GoogleBook />,
  },
  { id: 6, name: "Spotify", icon: <Assets.Spotify /> },
  { id: 7, name: "Xbox", icon: <Assets.Xbox /> },
  {
    id: 8,
    name: "Playstation",
    icon: <Assets.PlayStation />,
  },
  { id: 9, name: "Amazon Prime", icon: <Assets.Prime /> },
];

// ------------------- COMPONENT -------------------
export default function LinkAccount() {
  const router = useRouter();
  const { user, setUser } = useUserStore();
  const [modalVisible, setModalVisible] = useState(false);

  // Linked accounts from store
  const linkedAccounts = user.platforms;

  // Available accounts are those not in linkedAccounts
  const availableAccounts = allAccountsList.filter(
    (acc) => !linkedAccounts.some((linked) => linked.id === acc.id)
  );

  const handleContinue = () => {
    console.log("Continue to next step");
    console.log("the user", user);
    router.push("/(auth)/signup/pick-passion");
  };

  const handleDisconnect = (account: PlatformType) => {
    const updatedPlatforms = linkedAccounts.filter(
      (acc) => acc.id !== account.id
    );
    setUser({ platforms: updatedPlatforms });
  };

  const handleLinkFromModal = (account: PlatformType) => {
    const updatedPlatforms = [...linkedAccounts, account];
    setUser({ platforms: updatedPlatforms });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        {/* Scrollable Content */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* Back Icon */}
          <Pressable style={styles.backIcon} onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={28} color="#1D1D1D" />
          </Pressable>

          {/* Title & Subtitle */}
          <View style={styles.headerWrapper}>
            <Title
              title="Link your accounts!"
              subtitle="Sync up and watch your entertainment experience transform into something special!"
            />
          </View>

          {/* Account Cards */}
          <View style={styles.cardsContainer}>
            {linkedAccounts.map((account) => (
              <AccountCard
                key={account.id}
                icon={account.icon}
                label="Disconnect"
                onPress={() => handleDisconnect(account)}
              />
            ))}
            {/* Add new button */}
            <AccountCard
              icon={<Assets.AddPlus />}
              label="Add new"
              onPress={() => setModalVisible(true)}
              isPlus={true}
            />
          </View>
        </ScrollView>

        {/* Fixed Continue Button at Bottom */}
        <View style={styles.buttonWrapper}>
          <Button title="Continue" onPress={handleContinue} />
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <View style={styles.modalHeader}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Assets.Back />
                </TouchableOpacity>
              </View>

              <ScrollView>
                {availableAccounts.map((account) => (
                  <View style={styles.modalItem} key={account.id}>
                    {/* Icon Wrapper */}
                    <View style={styles.iconWrapper}>
                      {/* <Image
                        source={account.icon}
                        style={styles.modalIcon}
                        resizeMode="contain"
                      /> */}
                      {account.icon}
                    </View>

                    <Text style={styles.modalText}>{account.name}</Text>

                    <TouchableOpacity
                      key={account.id}
                      onPress={() => handleLinkFromModal(account)}
                      style={{ marginLeft: "auto" }}
                    >
                      {/* <Image
                        source={require("@/assets/images/ArrowRight.png")}
                        style={styles.modalIcon}
                        resizeMode="contain"
                      /> */}
                      <Assets.Right />
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF4F0",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    flexGrow: 1,
  },
  backIcon: {
    paddingVertical: 10,
  },
  headerWrapper: {
    marginTop: 28,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 19,
    marginTop: 40,
  },
  buttonWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    backgroundColor: "#FDF4F0",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    backgroundColor: "#FDF4F0",
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 14,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "90%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  closeImage: {
    width: 48,
    height: 48,
    // optional if you want to change color
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modalItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 24, // full circle
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  modalIcon: {
    width: 24,
    height: 24,
  },
  modalText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#1D1D1D",
  },
});
