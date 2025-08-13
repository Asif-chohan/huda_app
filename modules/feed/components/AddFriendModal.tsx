import React from "react";
import { StyleSheet, Switch, TextInput } from "react-native";

import { Assets } from "@/assets/images";
import Button from "@/components/Button";
import CustomModal from "./CustomModal";

import Box from "@/components/Box";
import Texts from "@/components/Text";



interface FriendItem {
  id: string;
  photo: React.ReactNode;
  username: string;
  tag: string;
}

interface AddFriendModalProps {
  visible: boolean;
  onClose: () => void;
  contactsEnabled: boolean;
  setContactsEnabled: (value: boolean) => void;
  facebookEnabled: boolean;
  setFacebookEnabled: (value: boolean) => void;
  instagramEnabled: boolean;
  setInstagramEnabled: (value: boolean) => void;
  friendsList: FriendItem[];
}

export default function AddFriendModal({
  visible,
  onClose,
  contactsEnabled,
  setContactsEnabled,
  facebookEnabled,
  setFacebookEnabled,
  instagramEnabled,
  setInstagramEnabled,
  friendsList,
}: AddFriendModalProps) {
  return (
    <CustomModal
      visible={visible}
      onClose={onClose}
      title="Add friends"
      footer={<Button paddingX={32} title="Save" onPress={() => {}} />}
    >
      {/* Section Title */}
      <Texts fontFamily="archivoblack" font={20} weight={400} mb={16}>
        Find new friends
      </Texts>

      {/* Toggle Items */}
      {[
        { icon: <Assets.Book />, label: "Contacts", value: contactsEnabled, onChange: setContactsEnabled },
        { icon: <Assets.Facebook />, label: "Facebook", value: facebookEnabled, onChange: setFacebookEnabled },
        { icon: <Assets.InstagramColor />, label: "Instagram", value: instagramEnabled, onChange: setInstagramEnabled },
      ].map((item, index) => (
        <Box
          key={item.label}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          mb={index < 2 ? 8 : 0}
          pv={6}
        >
          <Box flexDirection="row" alignItems="center">
            <Box
              width={48}
              height={48}
              radius={24}
              bgColor="bg"
              alignItems="center"
              justifyContent="center"
            >
              {item.icon}
            </Box>
            <Texts ml={12} fontFamily="medium" font={16}>
              {item.label}
            </Texts>
          </Box>
          <Switch value={item.value} onValueChange={item.onChange} />
        </Box>
      ))}

      {/* Search */}
      <Box
        flexDirection="row"
        alignItems="center"
        bgColor="bg"
        radius={23}
        ph={16}
        height={46}
        mb={20}
        mt={40}
        style={styles.shadow}
      >
        <Assets.Search style={{ marginRight: 8 }} />
        <TextInput style={styles.input} placeholder="Search" />
      </Box>

      {/* Friends List */}
      {friendsList.map((item) => (
        <Box
          key={item.id}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          mb={16}
        >
          <Box flexDirection="row" alignItems="center">
            {item.photo}
            <Box ml={8}>
              <Texts font={11} weight={400} fontFamily="archivoblack" color="heading">
                {item.username}
              </Texts>
              <Box
                ph={8}
                radius={16}
                pt={2}
                pb={2}
                borderColor="green"
                borderWidth={1}
                mt={4}
              >
                <Texts fontFamily="archivoblack" weight={400} font={8} color="brown">
                  {item.tag}
                </Texts>
              </Box>
            </Box>
          </Box>
          <Button paddingX={12} paddingY={7} title="Follow" onPress={() => {}} />
        </Box>
      ))}
    </CustomModal>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
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
