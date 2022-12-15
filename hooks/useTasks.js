import React, { useContext , useEffect, useState } from 'react';

export const TaskContext = React.createContext();

const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState();

  useEffect(() => {
    setTaskList(
      [
        {
          title: "Today",
          data: ["Pizza", "Burger", "Risotto"],
        },
        {
          title: "05 Dez",
          data: ["French Fries", "Onion Rings", "Fried Shrimps"],
        },
        {
          title: "04 Dez",
          data: ["Water", "Coke", "Beer"],
        }
      ]
    )
  }, [])

  return (
    <>
      <TaskContext.Provider value={taskList}>
        { children }
      </TaskContext.Provider>
    </>
  );
}

const useTasks = () => useContext(TaskProvider);

export { TaskProvider, useTasks };