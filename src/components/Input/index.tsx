import { TextInput } from 'react-native';
import { styles } from './styles';

type InputProps = {
  value: string;
  onChange: (text: string) => void;
};

export function Input({ value, onChange }: InputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor="#808080"
      value={value}
      onChangeText={e => onChange(e)}
    />
  );
}
