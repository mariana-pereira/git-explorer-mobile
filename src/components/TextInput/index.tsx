import { Search } from 'lucide-react-native';
import React from 'react';
import { TextInputProps } from 'react-native';

import { Button, Input, InputContainer } from './styles';

interface InputProps extends TextInputProps {
  fetchUser: () => void;
}

export function TextInput({ fetchUser, ...rest }: InputProps) {
  return (
    <InputContainer>
      <Input placeholder="Username" {...rest} />
      <Button onPress={fetchUser}>
        <Search size={20} color="#fff" />
      </Button>
    </InputContainer>
  );
}
