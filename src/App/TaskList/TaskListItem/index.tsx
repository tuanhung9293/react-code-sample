import { FC } from 'react';
import { TTodo } from '../../../redux/todoSlice';

type TProps = {
  todo: TTodo;
  onRemoveTodo: () => void;
  onToggleTodoStatus: () => void;
  className?: string;
}

export const TaskListItem: FC<TProps> = ({ todo, onRemoveTodo, onToggleTodoStatus }) => {
  return (
    <div key={todo.id} className='flex space-x-2 justify-between'>
      <p className={`${todo.completed ? 'line-through' : ''} text-lg`}>
        {todo.description}
      </p>

      <div className='flex space-x-2 items-center'>
        <button
          className='h-6 px-2 text-white bg-red600 hover:bg-red900 rounded'
          onClick={onRemoveTodo}
        >
          Delete
        </button>

        <input
          className='border border-skin-base'
          type='checkbox'
          checked={todo.completed}
          onChange={onToggleTodoStatus}
        />
      </div>
    </div>
  );
}
