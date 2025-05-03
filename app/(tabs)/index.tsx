import Button from "@/components/Button";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image source={PlaceholderImage} />
      </View>
      <View style={style.footerContainer}>
        <Button label="Choose a Photo" theme="primary" />
        <Button label="Use this Photo" />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop:28
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
