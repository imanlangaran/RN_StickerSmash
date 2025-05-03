import Button from "@/components/Button";
import { Image, StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import ImageViewer from "@/components/ImageViewer";
import { useState } from "react";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {

  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log(result);
    } else {
      alert("You did not select any image");
    }
  };

  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
      </View>
      <View style={style.footerContainer}>
        <Button
          label="Choose a Photo"
          theme="primary"
          onPress={pickImageAsync}
        />
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
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
