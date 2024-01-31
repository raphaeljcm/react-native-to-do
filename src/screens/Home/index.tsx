import { View } from 'react-native';
import { styles } from './styles';
import { Input } from '@components/Input';
import { CreateButton } from '@components/CreateButton';
import { Summary } from '@components/Summary';
import { LogoImg } from '@components/Images/LogoImg';
import { Tasks } from '@components/Tasks';
import { useTasks } from '@hooks/useTasks';
import { useState } from 'react';

export function Home() {
  const [newTask, setNewTask] = useState('');
  const { tasks, addTask, checkTask, removeTask } = useTasks();

  const doneTasks = tasks.filter(task => task.done).length;

  const handleAddNewTask = () => {
    addTask(newTask);
    setNewTask('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoImg />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.actionsContainer}>
          <Input value={newTask} onChange={setNewTask} />
          <CreateButton onPress={handleAddNewTask} />
        </View>

        <Summary total={tasks.length} done={doneTasks} />
        <Tasks data={tasks} onCheckTask={checkTask} onDeleteTask={removeTask} />
      </View>
    </View>
  );
}
