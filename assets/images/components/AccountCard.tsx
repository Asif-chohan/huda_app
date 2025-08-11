import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  icon: any;
  label: string;
  onPress: () => void;
  isPlus?: boolean;
}

export default function AccountCard({ icon, label, onPress, isPlus }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <View style={[styles.iconWrapper, isPlus && styles.plusWrapper]}>
          <Image source={icon} style={styles.icon} resizeMode="contain" />
        </View>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
    paddingTop: 26,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
  },
  iconWrapper: {
    backgroundColor: "#F8F3EF",
    borderRadius: 9999,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 38,
    height: 38,
  },
  label: {
    paddingTop: 21,
    fontSize: 16,
    color: "#1D1D1D",
    fontWeight: "700",
    lineHeight: 24,
  },
  plusWrapper: {
    backgroundColor: "#DFD8D3",
    borderWidth: 1,
    borderColor: "#1D1D1D",
    shadowColor: "#1D1D1D",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 3, // Android shadow
  },
});
