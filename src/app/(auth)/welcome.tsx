import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { APP_COLOR } from "@/utils/constant";
import ShareButton from "@/component/button/share.button";
import bg from "@/assets/auth/welcome-background.png";
import { LinearGradient } from "expo-linear-gradient";
import SocialButton from "@/component/button/social.button";
import { Link, Redirect, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { getAccountAPI } from "@/utils/api";
import { useCurrentApp } from "@/context/app.context";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  welcomeText: {
    flex: 0.6,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 20,
  },
  welcomeBtn: {
    flex: 0.4,
    // justifyContent: "center",
  },
  heading: {
    fontSize: 40,
    fontWeight: "600",
  },
  body: {
    fontSize: 30,
    color: APP_COLOR.ORANGE,
    marginVertical: 10,
  },
  footer: {},
});
const WelcomePage = () => {
  return (
    <ImageBackground
      style={{
        flex: 1,
      }}
      source={bg}
    >
      <LinearGradient
        style={{ flex: 1 }}
        colors={["transparent", "#191B2F"]}
        locations={[0.2, 0.8]}
      >
        <View style={styles.container}>
          <View style={styles.welcomeText}>
            <Text style={styles.heading}>Welcome to</Text>
            <Text style={styles.body}>Duy</Text>
            <Text style={styles.footer}>React Native</Text>
          </View>
          <View style={styles.welcomeBtn}>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "red",
                marginHorizontal: 50,
              }}
            ></View>
            <SocialButton title="Đăng nhập với" />
            <View>
              <ShareButton
                title="Đăng nhập với email"
                onPress={() => {
                  router.navigate("/(auth)/login");
                }}
                textStyle={{ color: "#fff", paddingVertical: 5 }}
                pressStyle={{ alignSelf: "stretch" }}
                buttonStyle={{
                  marginHorizontal: 50,
                  paddingVertical: 10,
                  backgroundColor: "#2c2c2c",
                  borderColor: "#505050",
                  justifyContent: "center",
                  borderRadius: 30,
                  borderWidth: 1,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white" }}>chưa có tài khoản?</Text>
              <Link href={"/(auth)/signup"}>
                <Text
                  style={{ color: "white", textDecorationLine: "underline" }}
                >
                  đăng ký
                </Text>
              </Link>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};
export default WelcomePage;
