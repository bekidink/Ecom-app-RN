import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View, ViewToken } from "react-native";
type Props = {
  images: string[];
  index: number;
};
const Pagination = (props: Props) => {
  return (
    <View style={styles.container}>
      {props.images.map((item, index) => (
        <View
          key={index}
          style={[
            styles.paginationDots,
            {
              backgroundColor: props.index === index ? Colors.primary : "#ccc",
            },
          ]}
        ></View>
      ))}
      <View style={styles.paginationNumberContainer}>
        <View style={styles.paginationNumberBox}>
          <Text style={styles.paginationText}>
            ${props.index +1}/${props.images.length}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Pagination;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  paginationDots: {
    width: 30,
    height: 4,
    margin: 3,
    borderRadius: 5,
    backgroundColor: "#ccc",
  },
  paginationNumberContainer: {
    position: "absolute",
    alignItems: "flex-end",
    width: "100%",
    paddingRight: 20,
  },
  paginationNumberBox: {
    backgroundColor: Colors.extraGray,
    paddingBottom: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  paginationText: {
    color: Colors.primary,
    fontSize: 13,
  },
});
