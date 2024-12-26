import { Image, StyleSheet, View } from "react-native";

const UserAvatar = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        style={{ height: 100, width: 100, borderRadius: 50 }}
        source={{ uri: "https://xsgames.co/randomusers/avatar.php?g=male" }}
      />
    </View>
  );
};
export default UserAvatar;
const styles = StyleSheet.create({});
