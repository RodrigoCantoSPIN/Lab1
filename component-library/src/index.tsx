import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import InputField from './components/InputField';
import List from './components/List';

export default function App() {
  return (
    <View style={styles.container}>
      <Button onClick={() => console.log('click')} text='Click' />
      <InputField />
      <List data={['coche', 'moto', 'camion', 3, 4]} />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
