import React from "react";
import { View, Text } from "react-native";
import { feedbackTypes, feedbackTypesProps } from "../../utils/feedbackTypes";
import { Copyright } from "../Copyright";
import { Option } from "../Option";

import { styles } from "./styles";
import { OptionsProps } from "./types";

export function Options({ onFeedbackTypechanged }: OptionsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu Feedback</Text>
      <View style={styles.option}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option
            key={key}
            title={value.title}
            image={value.image}
            onPress={() => onFeedbackTypechanged(key as feedbackTypesProps)}
          />
        ))}
      </View>
      <Copyright />
    </View>
  );
}
