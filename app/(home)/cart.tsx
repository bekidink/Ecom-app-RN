import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { cartData } from "@/constants/dummyData";
import { CartItemType } from "@/types/type";
import { Stack } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";

type Props = {};

const CartScreen = (props: Props) => {
  const [carts, setCarts] = useState<CartItemType[]>(cartData);
  const headerHeight = useHeaderHeight();
  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTransparent: true }} />
      <View style={[styles.container, { marginTop: headerHeight }]}>
        <FlatList
          data={carts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <Animated.View
              entering={FadeInDown.delay(300 + index + 100).duration(500)}
            >
              <CartItem item={item} />
            </Animated.View>
          )}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.priceInfoWrapper}>
          <Text>Total: $300</Text>
        </View>
        <Pressable style={styles.checkoutBtn}>
          <Text style={styles.checkoutBtnText}>Checkout</Text>
        </Pressable>
      </View>
    </>
  );
};

export default CartScreen;
type Prop = {
  item: CartItemType;
};
const CartItem = ({ item }: Prop) => {
  return (
    <View style={styles.itemWrapper}>
      <Image source={{ uri: item.image }} style={styles.itemImg} />
      <View style={styles.infoWrapper}>
        <Text style={styles.itemTxt}>{item.title}</Text>
        <Text style={styles.itemTxt}>{item.price}</Text>
        <View style={styles.itemControllerWrapper}>
          <TouchableOpacity>
            <Ionicons name="trash-outline" size={20} color={"red"} />
          </TouchableOpacity>

          <View style={styles.quantityControllerWrapper}>
            <TouchableOpacity style={styles.quantityController}>
              <Ionicons name="remove-outline" size={20} color={Colors.black} />
            </TouchableOpacity>
            <Text>1</Text>
            <TouchableOpacity style={styles.quantityController}>
              <Ionicons name="add-outline" size={20} color={Colors.black} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.quantityController}>
            <Ionicons name="heart-outline" size={20} color={Colors.black} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  itemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.lightGray,
    borderRadius: 5,
  },
  itemImg: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  infoWrapper: {
    flex: 1,
    alignSelf: "flex-start",
    gap: 10,
  },
  itemTxt: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.black,
  },
  itemControllerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  quantityControllerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  quantityController: {
    padding: 5,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderRadius: 5,
  },
  footer: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: Colors.white,
  },
  priceInfoWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  totalTxt: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.black,
  },
  checkoutBtn: {
    flex: 1,
    backgroundColor: Colors.primary,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  checkoutBtnText: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.white,
  },
});
