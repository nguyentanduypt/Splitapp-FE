import ShareInput from "@/component/input/share.input";
import { useCurrentApp } from "@/context/app.context";
import { Image, Platform, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 20 },
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

  // BE hiện tại chưa trả avatar, nếu muốn dùng thì cần có trường avatar
  // const backend =
  //   Platform.OS === "android"
  //     ? process.env.EXPO_PUBLIC_ANDROID_API_URL
  //     : process.env.EXPO_PUBLIC_IOS_API_URL;

  // const avatarUri = appState?.avatar
  //   ? `${backend}/images/avatar/${appState.avatar}`
  //   : undefined;

  return (
    // <View style={styles.container}>
    //   <View style={styles.center}>
    //     <Image
    //       style={styles.avatar}
    //       source={
    //         avatarUri
    //           ? { uri: avatarUri }
    //           : require("@/assets/images/default-avatar.png") // avatar mặc định
    //       }
    //     />
    //     <Text style={{ fontSize: 20, fontWeight: "600" }}>
    //       {appState?.userName}
    //     </Text>
    //     <Text style={{ color: "gray" }}>{appState?.role}</Text>
    //   </View>

    //   <View style={{ gap: 20 }}>
    //     <ShareInput title="Full Name" value={appState?.userName || ""} />
    //     <ShareInput title="Email" value={appState?.email || ""} />
    //     <ShareInput title="Role" value={appState?.role || ""} />
    //   </View>
    // </View>
    <View>
      <Text>account</Text>
    </View>
  );
};

export default AccountPage;
