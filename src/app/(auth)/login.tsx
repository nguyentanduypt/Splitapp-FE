import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import ShareButton from "@/component/button/share.button";
import ShareInput from "@/component/input/share.input";
import SocialButton from "@/component/button/social.button";
import { APP_COLOR } from "@/utils/constant";
import { loginAPI } from "@/utils/api";
import { useCurrentApp } from "@/context/app.context";

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 20, gap: 10 },
});

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAppState } = useCurrentApp();

  const handleLogin = async () => {
    try {
      setLoading(true);
      const res = await loginAPI(email, password); // res = { token, userName, role }
      setLoading(false);

      if (res?.token) {
        // Lưu token
        await AsyncStorage.setItem("token", res.token);
        // Lưu luôn email vào appState để lấy ra trong AccountPage
        setAppState({ ...res, email }); // res = { token, userName, role, email }
        router.replace("/(tabs)"); // chuyển sang tabs
      } else {
        Alert.alert("Đăng nhập thất bại", "Sai email hoặc mật khẩu");
      }
    } catch (error) {
      console.log("Login error:", error);
      setLoading(false);
      Alert.alert("Lỗi", "Không thể đăng nhập, vui lòng thử lại");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 25, fontWeight: "600", marginVertical: 30 }}>
          Đăng Nhập
        </Text>

        <ShareInput
          title="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />

        <ShareInput
          title="Password"
          securityTextEntry // giữ prop securityTextEntry
          onChangeText={setPassword}
          value={password}
        />

        <ShareButton
          loading={loading}
          title="Đăng nhập"
          onPress={handleLogin}
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
          <Text>Chưa có tài khoản?</Text>
          <Link href="/(auth)/signup">
            <Text style={{ textDecorationLine: "underline" }}>Đăng ký</Text>
          </Link>
        </View>

        <SocialButton title="Đăng nhập với" />
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
