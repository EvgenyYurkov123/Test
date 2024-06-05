import React, { useState } from 'react';
import { Box, Text, Button, Input, Flex } from '@chakra-ui/react';
import { TaskListProps } from '../../types';

interface ExtendedTaskListProps extends TaskListProps {
    setTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

const TaskList: React.FC<ExtendedTaskListProps> = ({ tasks, onDelete, setTasks }) => {
    const [editedTasks, setEditedTasks] = useState<(string | undefined)[]>([]);


    const handleEditClick = (index: number) => {
        const newEditedTasks = [...editedTasks];
        newEditedTasks[index] = tasks[index];
        setEditedTasks(newEditedTasks);
    };

    const handleSaveClick = (index: number) => {
        const newTasks = [...tasks];
        newTasks[index] = editedTasks[index] ?? tasks[index];
        setEditedTasks((prevEditedTasks) => {
            if (!prevEditedTasks) return prevEditedTasks; 
            const updatedEditedTasks = [...prevEditedTasks];
            updatedEditedTasks[index] = undefined;
            return updatedEditedTasks;
        });
        setTasks(newTasks);
    };







    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newEditedTasks = [...editedTasks];
        newEditedTasks[index] = event.target.value;
        setEditedTasks(newEditedTasks);
    };

    const handleDelete = (index: number) => {
        onDelete(index);
    };

    return (
        <Box bg={'skyblue'} p={4}>
            {tasks.map((task, index) => (
                <Flex key={index} justifyContent="space-between" mb={2} alignItems="flex-start">
                    {editedTasks[index] !== undefined ? (
                        <Flex align={'center'}>
                            <Input
                                type="text"
                                value={editedTasks[index]}
                                onChange={(e) => handleInputChange(e, index)}
                                m={4}
                            />
                            <Button colorScheme="green" size="sm" p={5} onClick={() => handleSaveClick(index)}>Сохранить</Button>
                        </Flex>
                    ) : (
                        <Flex justifyContent="space-between" width="100%">
                            <Text p={2} flex="1" overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis" maxW="400px">{`${index + 1}. ${task}`}</Text>
                            <Flex>
                                <Button colorScheme="blue" size="sm" m={'1'} onClick={() => handleEditClick(index)}>Редактировать</Button>
                                <Button colorScheme="red" size="sm" m={'1'} onClick={() => handleDelete(index)}>Удалить</Button>
                            </Flex>
                        </Flex>
                    )}
                </Flex>
            ))}
        </Box>
    );
};

export default TaskList;
