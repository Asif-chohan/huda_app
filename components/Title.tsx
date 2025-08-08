import { StyleSheet, Text, View } from "react-native";

interface Props {
  title: string;
  subtitle?: string | null;
  fontSize?: number;
}

export default function AuthTitle({ title, subtitle, fontSize }: Props) {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          fontSize !== undefined ? { fontSize } : undefined,
        ]}
      >
        {title}
      </Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "400",
    color: "#1D1D1D",
    textAlign: "center",
    letterSpacing: -0.8,
    fontFamily: "ArchivoBlack",
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: "#797470",
    fontWeight: "400",
    textAlign: "center",
    marginTop: 4,
  },
});
