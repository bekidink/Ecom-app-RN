import { Colors } from "@/constants copy/Colors";
import { categoriesData } from "@/constants copy/dummyData";
import { CategoryType } from "@/types/type";
import { useHeaderHeight } from "@react-navigation/elements";
import { Stack } from "expo-router";
import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Image,
  Platform,
  View,
  FlatList,
  Text,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function ExploreScreen() {
  const [categories, setCategories] = useState<CategoryType[]>(categoriesData);
  const headerHeight = useHeaderHeight();
  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTransparent: true }} />
      <View style={[styles.container, { marginTop: headerHeight }]}>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Animated.View
              entering={FadeInDown.delay(300 + index + 100).duration(500)}
              style={styles.itemWrapper}
              key={index}
            >
              <Text style={styles.itemTitle}>{item.name}</Text>
              <Image
                source={{ uri: item.image }}
                style={{ width: 100, height: 100, borderRadius: 10 }}
              />
            </Animated.View>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  itemWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.extraGray,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.black,
  },
});
