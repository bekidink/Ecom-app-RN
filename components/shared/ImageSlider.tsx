import { Dimensions, FlatList, Image, View, ViewToken } from "react-native";
import Pagination from "./Paginaton";
import { useRef, useState } from "react";

type Props = {
  images: string[];
};
const width = Dimensions.get("window").width;
const ImageSlider = ({ images }: Props) => {
  const [paginationIndex, setPaginationIndex] = useState(0);
  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (
      viewableItems[0].index !== undefined &&
      viewableItems[0].index !== null
    ) {
      setPaginationIndex(viewableItems[0].index % images.length);
    }
  };
  const viewabilityConfig = { itemVisiblePercentThreshold: 50 };
  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);
  return (
    <View>
      <FlatList
        data={images}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => (
          <View
            style={{
              width: width,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item }}
              style={{ width: 300, height: 300, borderRadius: 10 }}
            />
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        scrollEventThrottle={16}
      />
      <Pagination images={images} index={paginationIndex} />
    </View>
  );
};
export default ImageSlider;
