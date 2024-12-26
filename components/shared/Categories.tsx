import { Colors } from "@/constants copy/Colors";
import { CategoryType } from "@/types/type";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
type Props = {
  categories: CategoryType[];
};
const Categories = ({ categories }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.titleBtn}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={categories} horizontal showsHorizontalScrollIndicator={false} keyExtractor={(item)=>item.id.toString()} renderItem={({item,index})=>(
        <View style={styles.item}>
            <Image source={{uri:item.image}} style={styles.itemImg}/>
            <Text>{item.name}</Text>
            </View>
      )}/>
    </View>
  );
};
export default Categories;
const styles = StyleSheet.create({
    container:{
        marginBottom:20
    },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.6,
    color: Colors.black,
  },
  titleBtn: {
    fontSize: 14,
    fontWeight: "500",
  },
  item: {
    marginVertical: 14,
    gap: 5,
    alignItems: "center",
    marginLeft: 20,
  },
  itemImg: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: Colors.lightGray,
  },
});
