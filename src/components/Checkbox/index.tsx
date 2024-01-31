import { Check } from '@components/Images/Check';
import { useEffect, useState } from 'react';
import { Pressable } from 'react-native';

type CheckboxProps = {
  id: number;
  checked: boolean;
  onCheck: (id: number) => void;
};

type CheckboxStyle = {
  backgroundColor: string;
  borderColor: string;
};

const handleCheckboxStyle = (isChecked: boolean, isHover: boolean) => {
  if (isHover) {
    if (isChecked) {
      return {
        backgroundColor: '#8284FABF',
        borderColor: '#8284FA',
      };
    } else {
      return {
        backgroundColor: '#4EA8DE80',
        borderColor: '#4EA8DE',
      };
    }
  } else {
    if (isChecked) {
      return {
        backgroundColor: '#8284FA',
        borderColor: '#8284FA',
      };
    } else {
      return {
        backgroundColor: 'transparent',
        borderColor: '#4EA8DE',
      };
    }
  }
};

export function Checkbox({ id, checked, onCheck }: CheckboxProps) {
  const [isHover, setIsHover] = useState(false);
  const [currentBackground, setCurrentBackground] = useState<CheckboxStyle>(
    {} as CheckboxStyle,
  );

  useEffect(() => {
    const style = handleCheckboxStyle(checked, isHover);
    setCurrentBackground(style);
  }, [checked, isHover]);

  return (
    <Pressable
      onPressIn={() => setIsHover(true)}
      onPressOut={() => setIsHover(false)}
      onPress={() => onCheck(id)}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: currentBackground.borderColor,
        backgroundColor: currentBackground.backgroundColor,
      }}
    >
      {checked && <Check />}
    </Pressable>
  );
}
