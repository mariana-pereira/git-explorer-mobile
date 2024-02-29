import { Search } from 'lucide-react-native';

import { Button, Input, InputContainer } from './styles';

export function TextInput() {
  return (
    <InputContainer>
      <Input placeholder="Username" />
      <Button on>
        <Search size={20} color="#fff" />
      </Button>
    </InputContainer>
  );
}
