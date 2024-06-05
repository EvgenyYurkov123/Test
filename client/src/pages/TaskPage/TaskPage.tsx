import React, { useState, useEffect } from 'react';
import { Heading, Container, Flex, Box, Link } from '@chakra-ui/react';
import TaskList from '../../components/TaskList/TaskList';
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm';

const TaskPage: React.FC = () => {
    const [tasks, setTasks] = useState<string[]>([]);

    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task: string) => {
        setTasks([...tasks, task]);
    };

    const deleteTask = (index: number) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <Container p={'0'} minH="100vh" minW="100vw">
            <Flex direction="column" align="center" minH="100vh" minW="100vw" bg={'skyblue'}>
                <Flex justifyContent="flex-end" marginTop={4} marginRight={12} minW="100vw">
                    <Link href='/' >На главную</Link>
                </Flex>
                <Flex >

                    <Heading as="h1" size="xl" mb={8}>
                        Список задач
                    </Heading>

                </Flex>
                <Flex w="100%" justifyContent="space-between">
                    <Box w="45%" bg={'skyblue'} >
                        <TaskList tasks={tasks} onDelete={deleteTask} setTasks={setTasks} />

                    </Box>
                    <Box w="45%" p={'4'}>
                        <AddTaskForm addTask={addTask} />
                    </Box>
                </Flex>
            </Flex>
        </Container>
    );
};

export default TaskPage;
