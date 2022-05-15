import { ImageProps, TouchableOpacityProps } from "react-native";

export interface OptionProps extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}
