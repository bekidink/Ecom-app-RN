import { Colors } from "@/constants/Colors";
import { icon } from "@/constants/icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  onPress: Function;
  onLongPress: Function;
  isFocused: boolean;
  label: string;
  routeName: string;
};
const TabBarButton = (props: Props) => {
  const { onLongPress, onPress, label, routeName, isFocused } = props;
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabBtn}
    >
      {routeName == "cart" && (
        <View style={styles.badgeWrapper}>
          <Text style={styles.badgeText}>3</Text>
        </View>
      )}
      {icon[routeName]({ color: isFocused ? "#673ab7" : "#22" })}
      <Text style={{ color: isFocused ? "#63ab7" : "#222" }}>{label}</Text>
    </Pressable>
  );
};
export default TabBarButton;
const styles = StyleSheet.create({
  tabBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  badgeWrapper: {
    position: "absolute",
    backgroundColor: Colors.highlight,
    top: -5,
    right: 20,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 10,
    zIndex: 10,
  },
  badgeText: {
    color: Colors.black,
    fontSize: 12,
  },
});
