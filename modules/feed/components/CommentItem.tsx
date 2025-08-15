import React from "react";
import { FlatList, Pressable, TextInput, StyleSheet } from "react-native";
// adjust your imports
import BottomModal from "@/components/BottomModal";
import Box from "@/components/Box";
import Buttons from "@/components/Button";
import Texts from "@/components/Text";
import { SvgProps } from "react-native-svg";
interface ReplyTo {
  id: string;
  user: string;
}

interface Comment {
  id: string;
  user: string;
  avatar: React.FC<SvgProps>;
  text: string;
  replies: {
    id: string;
    user: string;
    avatar: React.FC<SvgProps>;
    text: string;
  }[];
}

interface CommentsModalProps {
  visible: boolean;
  onClose: () => void;
  comments: Comment[];
  newComment: string;
  setNewComment: (val: string) => void;
  replyTo: ReplyTo | null;
  setReplyTo: (val: ReplyTo | null) => void;
  handleAddComment: () => void;
}

export default function CommentsModal({
  visible,
  onClose,
  comments,
  newComment,
  setNewComment,
  replyTo,
  setReplyTo,
  handleAddComment,
}: CommentsModalProps) {
  const renderComment = ({ item }: { item: Comment }) => (
    <Box mb={16}>
      <Box flexDirection="row" alignItems="flex-start">
        <item.avatar />
        <Box ml={8} flex={1}>
          <Texts
            fontFamily="archivoblack"
            font={14}
            weight={400}
            lineHeight={26}
            color="heading"
          >
            {item.user}
          </Texts>
          <Texts font={13} fontFamily="medium" color="textSecondary" mt={2}>
            {item.text}
          </Texts>

          <Pressable
            onPress={() => setReplyTo({ id: item.id, user: item.user })}
          >
            <Texts mt={8} font={13} fontFamily="bold" color="heading">
              Reply
            </Texts>
          </Pressable>

          {item.replies?.length > 0 && (
            <Box mt={6} ml={40}>
              {item.replies.map((reply) => (
                <Box key={reply.id} mb={8} flexDirection="row">
                  <reply.avatar />
                  <Box ml={8} flex={1}>
                    <Texts fontFamily="medium" font={14} color="heading">
                      {reply.user}
                    </Texts>
                    <Texts font={14} mt={2}>
                      {reply.text}
                    </Texts>
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );

  return (
    <BottomModal
      visible={visible}
      title={`Comments (${comments.length})`}
      onClose={() => {
        onClose();
        setReplyTo(null);
      }}
      onApply={() => {}}
      showApplyButton={false}
    >
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={renderComment}
        showsVerticalScrollIndicator={false}
      />

      {/* Comment Input */}
      <Box
        flexDirection="row"
        alignItems="center"
        bgColor="bg"
        radius={24}
        ph={16}
        height={46}
        mt={12}
      >
        <TextInput
          style={styles.input}
          placeholder={
            replyTo ? `Replying to ${replyTo.user}` : "Add comment..."
          }
          value={newComment}
          onChangeText={setNewComment}
        />
        {replyTo && (
          <Pressable
            onPress={() => setReplyTo(null)}
            style={{ marginRight: 8 }}
          >
            <Texts font={12} color="brown">
              Cancel
            </Texts>
          </Pressable>
        )}
        <Pressable onPress={handleAddComment}>
          <Texts font={14} fontFamily="medium" color="primary">
            Post
          </Texts>
        </Pressable>
      </Box>
    </BottomModal>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    color: "#000",
  },
});
