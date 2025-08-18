import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

import { Assets } from "@/assets/images";
import AccountCard from "@/modules/auth/components/AccountCard";
import Button from "@/components/Button";
import { useModal } from "@/hooks/useModal";
import { useUserStore } from "@/store/userStore";
import { allAccountsList } from "@/modules/auth/data/option";
import { PlatformType } from "@/types/auth";

import Box from "@/components/Box";
import Text from "@/components/Text";
import SelectPlatformModal from "@/modules/auth/components/SelectPlatform";

export default function LinkAccountComponent() {
  const router = useRouter();
  const { user, setUser } = useUserStore();
  const { openModal, closeModal, isModalVisible } = useModal();

  const linkedAccounts = user.platforms;

  const availableAccounts = allAccountsList.filter(
    (acc) => !linkedAccounts.some((linked) => linked.id === acc.id)
  );

  const handleContinue = () => {
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
      <Box pt={50} pb={44} ph={16} flex={1} bgColor="surface">
        {/* Scrollable Content */}
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          {/* Back Icon */}
          <Box
            height={48}
            width={48}
            alignItems="center"
            justifyContent="center"
          >
            <Pressable onPress={() => router.back()}>
              <Assets.Back height={21} width={21} />
            </Pressable>
          </Box>

          {/* Title & Subtitle */}
          <Box ph={4} mt={28}>
            <Text
              fontFamily="archivoblack"
              font={22}
              color="heading"
              lineHeight={31}
              align="center"
            >
              Link your accounts!
            </Text>
            <Text
              weight={400}
              fontFamily="regular"
              font={12.5}
              color="subHeading"
              lineHeight={24}
              align="center"
            >
              Sync up and watch your entertainment experience transform into
              something special!
            </Text>
          </Box>

          {/* Account Cards */}
          <Box
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-between"
            style={{ rowGap: 19 }}
            mt={40}
            ph={4}
          >
            {linkedAccounts.map((account) => (
              <AccountCard
                key={account.id}
                icon={<account.icon height={38} width={38} />}
                label="Disconnect"
                onPress={() => handleDisconnect(account)}
              />
            ))}
            {/* Add new button */}
            <AccountCard
              icon={<Assets.AddPlus height={24} width={24} />}
              label="Add new"
              onPress={() => openModal("linkAccount")}
              isPlus={true}
            />
          </Box>
        </ScrollView>

        {/* Fixed Continue Button at Bottom */}
        <Box>
          <Button paddingX={22.5} title="Continue" onPress={handleContinue} />
        </Box>

        {/* Select Platform Modal */}
        <SelectPlatformModal
          visible={isModalVisible("linkAccount")}
          onClose={closeModal}
          availableAccounts={availableAccounts}
          onSelect={handleLinkFromModal}
        />
      </Box>
    </KeyboardAvoidingView>
  );
}
