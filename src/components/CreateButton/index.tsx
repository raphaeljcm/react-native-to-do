import { TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { PlusIcon } from '@components/Images/PlusIcon';

export function CreateButton() {
  return (
    <TouchableOpacity style={styles.createButton}>
      <PlusIcon />
    </TouchableOpacity>
  );
}
