import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ViewStyle
} from 'react-native';

interface ButtonProps {
  onClick: () => void;
  isDisabled: boolean;
  text: string | number;
  styles: ViewStyle;
}

export default function Button({
  onClick,
  isDisabled,
  text,
  styles
}: Partial<ButtonProps>) {
  return (
    <TouchableOpacity
      style={styles ?? stylesSheet.container}
      onPress={onClick}
      disabled={isDisabled}
    >
      <Text>{text ?? 'OK'}</Text>
    </TouchableOpacity>
  );
}

const stylesSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
