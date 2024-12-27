import { useUser } from "@clerk/clerk-expo";
import { Image, StyleSheet, View } from "react-native";

const UserAvatar = () => {
  const {user}=useUser()
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        style={{ height: 100, width: 100, borderRadius: 50 }}
        source={{ uri: user?.imageUrl }}
      />
    </View>
  );
};
export default UserAvatar;
const styles = StyleSheet.create({});
