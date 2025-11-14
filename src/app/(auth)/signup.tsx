import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";

import ShareButton from "@/component/button/share.button";
import ShareInput from "@/component/input/share.input";
import { registerAPI } from "@/utils/api";
import { APP_COLOR } from "@/utils/constant";

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 20, gap: 10 },
});

const SignupPage = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      setLoading(true);
      const res = await registerAPI(userName, email, password); // res = { token, userName, role }
      setLoading(false);

      if (res?.token) {
        Alert.alert("Thành công", "Đăng ký thành công, vui lòng đăng nhập!");
        router.replace("/(auth)/login");
      } else {
        Alert.alert("Đăng ký thất bại", "Email có thể đã được sử dụng");
      }
    } catch (error) {
      console.log("Signup error:", error);
      setLoading(false);
      Alert.alert("Lỗi", "Không thể kết nối tới server");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 25, fontWeight: "600", marginVertical: 30 }}>
          Đăng Ký
        </Text>

        <ShareInput title="Email" onChangeText={setEmail} value={email} />
        <ShareInput
          title="Tên người dùng"
          onChangeText={setUserName}
          value={userName}
        />
        <ShareInput
          title="Mật khẩu"
          securityTextEntry
          onChangeText={setPassword}
          value={password}
        />

        <ShareButton
          loading={loading}
          title="Đăng ký"
          onPress={handleSignup}
          textStyle={{ color: "#fff", textTransform: "uppercase" }}
          pressStyle={{ alignSelf: "stretch" }}
          buttonStyle={{
            marginHorizontal: 50,
            paddingVertical: 10,
            justifyContent: "center",
            borderRadius: 30,
            backgroundColor: APP_COLOR.ORANGE,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            marginVertical: 15,
          }}
        >
          <Text>Đã có tài khoản?</Text>
          <Link href="/(auth)/login">
            <Text style={{ textDecorationLine: "underline" }}>Đăng nhập</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupPage;
