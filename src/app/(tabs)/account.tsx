import ShareInput from "@/component/input/share.input";
import { useCurrentApp } from "@/context/app.context";
import { Image, StyleSheet, Text, View } from "react-native";
import demo from "@/assets/avatar/avatar.jpg";

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 20, marginTop: 30 },
  center: { alignItems: "center", gap: 10, marginBottom: 30 },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#ccc",
  },
});

const AccountPage = () => {
  const { appState } = useCurrentApp();

  const userName = appState?.userName || "";
  const email = appState?.email || "";

  return (
    <View style={styles.container}>
      {/* Avatar + username */}
      <View style={styles.center}>
        <Image style={styles.avatar} source={demo} />

        <Text style={{ fontSize: 20, fontWeight: "600" }}>{userName}</Text>
      </View>

      {/* Inputs */}
      <View style={{ gap: 20 }}>
        <ShareInput title="User Name" value={userName} />
        <ShareInput title="Email" value={email} />
      </View>
    </View>
  );
};

export default AccountPage;
