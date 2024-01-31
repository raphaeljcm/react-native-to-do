import { Trash } from '@components/Images/Trash';
import { useState } from 'react';
import { Alert, Pressable } from 'react-native';

type DeleteButtonProps = {
  id: number;
  onDelete: (id: number) => void;
};

export function DeleteButton({ id, onDelete }: DeleteButtonProps) {
  const [isBeingDeleted, setIsBeingDeleted] = useState(false);

  const toggleIsBeingDeleted = () => setIsBeingDeleted(prev => !prev);

  const handleOnPress = () => {
    Alert.alert(
      'Deletar tarefa',
      'Você tem certeza que deseja deletar essa tarefa?',
      [
        {
          text: 'Cancelar',
        },
        {
          text: 'Deletar',
          onPress: () => onDelete(id),
        },
      ],
    );
  };

  return (
    <Pressable
      onPress={handleOnPress}
      onPressIn={toggleIsBeingDeleted}
      onPressOut={toggleIsBeingDeleted}
      style={{
        alignSelf: 'center',
      }}
    >
      <Trash beingDeleted={isBeingDeleted} />
    </Pressable>
  );
}
