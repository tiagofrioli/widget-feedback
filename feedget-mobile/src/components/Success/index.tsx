import { TouchableOpacity } from "@gorhom/bottom-sheet";
import React from "react";
import { Image, Text, View } from "react-native";
import successImg from "../../assets/success.png";
import { Copyright } from "../Copyright";
import { styles } from "./styles";
import { SuccessProps } from "./types";

export function Success({ onSendAnotherFeedback }: SuccessProps) {
  return (
    <View style={styles.container}>
      <Image source={successImg} style={styles.image} />
      <Text style={styles.title}>Agradecemos seu Feedback</Text>
      <TouchableOpacity style={styles.button} onPress={onSendAnotherFeedback}>
        <Text style={styles.buttonTitle}>Quero enviar outro Feedback</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}
