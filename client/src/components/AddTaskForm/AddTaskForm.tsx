import React, { useState } from 'react';
import { Button, Input, Stack } from '@chakra-ui/react';
import { AddTaskFormProps } from '../../types';

const AddTaskForm: React.FC<AddTaskFormProps> = ({ addTask }) => {
    const [task, setTask] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (task.trim() !== '') {
            addTask(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Stack direction="row" spacing={4}>
                <Input
                    type="text"
                    placeholder="Введите новую задачу"
                    value={task}
                    onChange={handleChange}
                />
                <Button type="submit">Добавить</Button>
            </Stack>
        </form>
    );
};

export default AddTaskForm;
