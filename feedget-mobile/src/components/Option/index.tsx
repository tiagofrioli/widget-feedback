import { TouchableOpacity } from "@gorhom/bottom-sheet";
import React from "react";
import { Image, Text } from "react-native";

import { styles } from "./styles";
import { OptionProps } from "./types";

export function Option({ title, image, ...rest }: OptionProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
