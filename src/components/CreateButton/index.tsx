import { TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { PlusIcon } from '@components/Images/PlusIcon';

type CreateButtonProps = {
  onPress: () => void;
};

export function CreateButton({ onPress }: CreateButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.createButton}
      activeOpacity={0.5}
    >
      <PlusIcon />
    </TouchableOpacity>
  );
}
