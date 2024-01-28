import { View } from 'react-native';
import { styles } from './styles';
import { Input } from '@components/Input';
import { CreateButton } from '@components/CreateButton';
import { Summary } from '@components/Summary';
import { LogoImg } from '@components/Images/LogoImg';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoImg />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.actionsContainer}>
          <Input />
          <CreateButton />
        </View>

        <Summary />
      </View>
    </View>
  );
}
