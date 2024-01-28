import { Text, View } from 'react-native';
import { styles } from './styles';

export function Summary() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.created}>Criadas</Text>
        <Text style={styles.summaryValue}>0</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.done}>Concluídas</Text>
        <Text style={styles.summaryValue}>0</Text>
      </View>
    </View>
  );
}
