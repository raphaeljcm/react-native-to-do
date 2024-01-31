import { FlatList, Text, View } from 'react-native';
import { TaskItem } from './TaskItem';
import { Divider } from '@components/Divider';
import { Clipboard } from '@components/Images/Clipboard';
import { styles } from './styles';
import { Task } from 'src/types';

type TasksProps = {
  data: Task[];
  onCheckTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
};

export function Tasks({ data, onCheckTask, onDeleteTask }: TasksProps) {
  if (data.length === 0) {
    return (
      <>
        <Divider />

        <View style={styles.emptyContainer}>
          <Clipboard />

          <View>
            <Text style={styles.emptyTitle}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.emptySubtitle}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        </View>
      </>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <TaskItem
          data={item}
          onCheckTask={onCheckTask}
          onDeleteTask={onDeleteTask}
        />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}
