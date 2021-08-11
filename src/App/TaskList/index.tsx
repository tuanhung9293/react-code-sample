import { FC } from 'react';
import { TTodo } from '../../redux/todoSlice';
import { TaskListItem } from './TaskListItem';

type TProps = {
  todos: TTodo[];
  onRemoveTodo: (id: string) => void;
  onToggleTodoStatus: (id: string) => void;
  className?: string;
}

export const TaskList: FC<TProps> = ({ todos, onRemoveTodo, onToggleTodoStatus, className }) => {
  return (
    <div className={`flex-col space-y-3 ${className}`}>
      {todos.map((todo) =>
        <TaskListItem
          key={todo.id}
          todo={todo}
          onRemoveTodo={() => onRemoveTodo(todo.id)}
          onToggleTodoStatus={() => onToggleTodoStatus(todo.id)}
        />
      )}
    </div>
  );
}
