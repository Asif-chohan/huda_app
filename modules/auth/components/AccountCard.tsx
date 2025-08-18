import { StyleSheet, TouchableOpacity, View } from "react-native";
import Text from "@/components/Text";
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
          {/* <Image source={icon} style={styles.icon} resizeMode="contain" /> */}
          {icon}
        </View>
        <TouchableOpacity onPress={onPress}>
          <Text
            pt={21}
            font={12.5}
            color="heading"
            weight={700}
            fontFamily="bold"
            lineHeight={24}
          >
            {label}
          </Text>
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
    padding: 9,
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
    width: 56,
    height: 56,
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
