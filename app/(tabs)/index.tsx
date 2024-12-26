import {
  Image,
  StyleSheet,
  Platform,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { CategoryType, ProductType } from "@/types/type";
import {
  categoriesData,
  productsData,
  saleProductsData,
} from "@/constants copy/dummyData";
import React from "react";
import { Stack } from "expo-router";
import Header from "@/components/shared/Header";
import ProductItem from "@/components/shared/ProductItem";
import { Colors } from "@/constants copy/Colors";
import ProductList from "@/components/shared/ProductList";
import Categories from "@/components/shared/Categories";
import FlashSale from "@/components/shared/FlashSale";

export default function HomeScreen() {
  const [products, setProducts] = useState<ProductType[]>(productsData);
  const [categories, setCategories] = useState<CategoryType[]>(categoriesData);
  const [saleProducts, setSaleProducts] =
    useState<ProductType[]>(saleProductsData);
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
      />
      <ScrollView>
        <Categories categories={categories} />
        <FlashSale products={saleProducts} />
        <View style={{ marginHorizontal: 20, marginBottom: 10 }}>
          <Image
            source={require("@/assets/images/sale-banner.jpg")}
            style={{ width: "100%", height: 150, borderRadius: 15 }}
          />
        </View>
        <ProductList products={products} flatList={false} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
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
});
