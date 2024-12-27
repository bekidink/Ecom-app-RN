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
import { useEffect, useState } from "react";
import { CategoryType, ProductType, SaleItemType } from "@/types/type";
import {
  categoriesData,
  productsData,
  saleProductsData,
} from "@/constants/dummyData";
import React from "react";
import { Stack } from "expo-router";
import Header from "@/components/shared/Header";
import ProductItem from "@/components/shared/ProductItem";
import { Colors } from "@/constants/Colors";
import ProductList from "@/components/shared/ProductList";
import Categories from "@/components/shared/Categories";
import FlashSale from "@/components/shared/FlashSale";
import axios from "axios";
export default function HomeScreen() {
  const [products, setProducts] = useState<ProductType[]>();
  const [categories, setCategories] = useState<CategoryType[]>();
  const [saleProducts, setSaleProducts] = useState<SaleItemType[]>();
  const categoryData = () => {
    axios
      .get("http://192.168.43.97:8000/api/v1/category")
      .then((res) => {
        const data = res.data;
        setCategories(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const productData = () => {
    axios
      .get("http://192.168.43.97:8000/api/v1/product")
      .then((res) => {
        const data = res.data;
        setProducts(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const saleProductData = () => {
    axios
      .get("http://192.168.43.97:8000/api/v1/sale-products")
      .then((res) => {
        const data = res.data;
        setSaleProducts(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    console.log("useff");
    categoryData();
    productData();
    saleProductData();
  }, []);
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
      />
      <ScrollView>
        {categories && <Categories categories={categories!} />}
        {saleProducts && <FlashSale products={saleProducts} />}
        <View style={{ marginHorizontal: 20, marginBottom: 10 }}>
          <Image
            source={require("@/assets/images/sale-banner.jpg")}
            style={{ width: "100%", height: 150, borderRadius: 15 }}
          />
        </View>
        {products && <ProductList products={products} flatList={false} />}
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
