import { Colors } from "@/constants/Colors";
import { CartItemType } from "@/types/type";
import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
type Props = {
  item: CartItemType;
};
const CartItem = ({ item }: Props) => {
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
          <TouchableOpacity>
            <Ionicons name="trash-outline" size={20} color={"red"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="trash-outline" size={20} color={"red"} />
          </TouchableOpacity>
          {/* <View style={styles.quantityControllerWrapper}>
            <TouchableOpacity style={styles.quantityController}>
              <Ionicons name="remove-outline" size={20} color={Colors.black} />
            </TouchableOpacity>
            <Text>1</Text>
            <TouchableOpacity style={styles.quantityController}>
              <Ionicons name="add-outline" size={20} color={Colors.black} />
            </TouchableOpacity>
          </View> */}
          {/* <TouchableOpacity style={styles.quantityController}>
            <Ionicons name="add-outline" size={20} color={Colors.black} />
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};
export default CartItem;
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
});
