import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
type Props = {};
const ProductDetail = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>product {id}</Text>
    </View>
  );
};
