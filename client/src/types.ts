export interface TaskListProps {
    tasks: string[];
    onDelete: (index: number) => void;
}

export interface AddTaskFormProps {
    addTask: (task: string) => void;
}
