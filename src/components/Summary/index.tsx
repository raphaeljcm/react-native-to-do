import { Text, View } from 'react-native';
import { styles } from './styles';

type SummaryProps = {
  total: number;
  done: number;
};

export function Summary({ total, done }: SummaryProps) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.created}>Criadas</Text>
        <Text style={styles.summaryValue}>{total}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.done}>Concluídas</Text>
        <Text style={styles.summaryValue}>{done}</Text>
      </View>
    </View>
  );
}
