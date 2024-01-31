import { Checkbox } from '@components/Checkbox';
import { View, Text } from 'react-native';
import { Task } from 'src/types';
import { styles } from './styles';
import { DeleteButton } from '@components/DeleteButton';

type TasksItemProps = {
  data: Task;
  onCheckTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
};

export function TaskItem({ data, onCheckTask, onDeleteTask }: TasksItemProps) {
  return (
    <View style={styles.container}>
      <Checkbox id={data.id} checked={data.done} onCheck={onCheckTask} />
      <Text
        style={{
          flex: 1,
          color: data.done ? '#808080' : '#F2F2F2',
          fontSize: 16,
          fontFamily: 'Inter_400Regular',
          textDecorationLine: data.done ? 'line-through' : 'none',
        }}
      >
        {data.title}
      </Text>
      <DeleteButton id={data.id} onDelete={onDeleteTask} />
    </View>
  );
}
