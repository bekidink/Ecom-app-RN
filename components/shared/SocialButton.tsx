import { Ionicons } from "@expo/vector-icons";
import { Href, Link } from "expo-router";
import React from "react";
import { Pressable, View,Text,StyleSheet } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Google from "@/assets/images/google-logo.svg";
type Props = {
    emailHref: Href<string | object>
}
const SocialButton=(props:Props)=>{
    const{emailHref}=props
    return (
      <View style={styles.socialLoginWrapper}>
        <Animated.View entering={FadeInDown.delay(300).duration(500)}>
          <Link href={emailHref} asChild>
            <Pressable style={styles.button}>
              <Ionicons name="mail-outline" size={20} color={Colors.black} />
              <Text style={styles.btnTxt}>Continue with Email</Text>
            </Pressable>
          </Link>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(700).duration(500)}>
          <Link href={"/signin"} asChild>
            <Pressable style={styles.button}>
              <Google width={20} height={20} />
              <Text style={styles.btnTxt}>Continue with Google</Text>
            </Pressable>
          </Link>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(1100).duration(500)}>
          <Link href={"/signin"} asChild>
            <Pressable style={styles.button}>
              <Ionicons name="logo-apple" size={20} color={Colors.black} />
              <Text style={styles.btnTxt}>Continue with Email</Text>
            </Pressable>
          </Link>
        </Animated.View>
      </View>
    );
}
export default SocialButton
const styles = StyleSheet.create({
socialLoginWrapper: {
    alignSelf: "stretch",
  },
  button: {
    flexDirection: "row",
    padding: 10,
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    marginBottom: 15,
  },
  btnTxt: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
  },
});