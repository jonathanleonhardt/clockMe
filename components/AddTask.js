import React, { useState } from 'react';
import { View } from "react-native";
import { Dialog, FAB, Input } from '@rneui/themed';

const AddTask = () => {
  const [visible, setVisible] = useState(false);

  const toggleDialog = () => {
    setVisible(!visible);
  };
  
  return (
    <View>
      <Dialog
        isVisible={visible}
        onBackdropPress={toggleDialog}
      >
        <Dialog.Title title="Task info"/>
        <Input
          placeholder='BASIC INPUT'
        />
      </Dialog>
      <FAB
        onPress={toggleDialog}
        placement="right"
        icon={{ name: 'schedule', color: 'white' }}
        color="#189AB4"
      />
    </View>
  );
}

export default AddTask;