import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import { Stack } from "expo-router";
import UserAvatar from "@/components/shared/UserAvater";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

type Props = {};

const ProfileScreen = (props: Props) => {
  const headerHeight = useHeaderHeight();
  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTransparent: true }} />
      <View style={[styles.container, { marginTop: headerHeight }]}>
        <UserAvatar />
        <View style={styles.btnWrapper}>
          <Pressable style={styles.btn}>
            <Ionicons name="person-outline" size={20} color={Colors.black} />
            <Text style={styles.btnTxt}>Your Orders</Text>
          </Pressable>
          <Pressable style={styles.btn}>
            <Ionicons name="heart-outline" size={20} color={Colors.black} />
            <Text style={styles.btnTxt}>Your Wishlist</Text>
          </Pressable>
          <Pressable style={styles.btn}>
            <Ionicons name="cart-outline" size={20} color={Colors.black} />
            <Text style={styles.btnTxt}>Payment History</Text>
          </Pressable>
          <Pressable style={styles.btn}>
            <Ionicons name="gift-outline" size={20} color={Colors.black} />
            <Text style={styles.btnTxt}>Reward Points</Text>
          </Pressable>
          <Pressable style={styles.btn}>
            <Ionicons
              name="help-circle-outline"
              size={20}
              color={Colors.black}
            />
            <Text style={styles.btnTxt}>Customer Support</Text>
          </Pressable>
          <Pressable style={styles.btn}>
            <Ionicons name="pencil-outline" size={20} color={Colors.black} />
            <Text style={styles.btnTxt}>Edit Profile</Text>
          </Pressable>
          <Pressable style={styles.btn}>
            <Ionicons name="settings-outline" size={20} color={Colors.black} />
            <Text style={styles.btnTxt}>Settings</Text>
          </Pressable>
          <Pressable style={styles.btn}>
            <Ionicons name="log-out-outline" size={20} color={Colors.black} />
            <Text style={styles.btnTxt}>Log Out</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: "500",
    color: Colors.black,
    marginTop: 10,
  },
  btnWrapper: {
    marginTop: 20,
    gap: 10,
  },
  btn: {
    padding: 10,
    borderColor: Colors.lightGray,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  btnTxt: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.black,
  },
});
