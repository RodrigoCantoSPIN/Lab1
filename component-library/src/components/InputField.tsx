import { useState } from 'react';
import { TextInput } from 'react-native';

export default function InputField() {
  const [inputVal, setInputVal] = useState<string>('');
  function handleOnChangeValue<T>(newValue: T) {
    if (typeof newValue === 'string') {
      setInputVal(newValue);
    } else {
      console.log('Wrong Value Type');
    }
  }

  return <TextInput onChange={handleOnChangeValue} value={inputVal} />;
}
