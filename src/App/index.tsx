import styled from 'styled-components';
import { addTodo, removeTodo, toggleTodoStatus } from '../redux/todoSlice';
import { useAppDispatch, useAppSelector } from '../hooks/root';
import { TaskAdd } from './TaskAdd';
import { TaskList } from './TaskList';
import { Settings } from './Settings';
// import theme from '../theme';

const Wrapper = styled.div`
  font-size:  12px;
`

export const App = () => {
  const dispatch = useAppDispatch();
  const { todos, ui } = useAppSelector(state => state);

  return (
    <Wrapper className={`${ui.theme} max-w-md mx-auto my-10`}>
      <Settings />

      <div className='text-center text-skin-base text-2xl'>
        Todo List App
      </div>

      <TaskAdd
        onAddTodo={(des: string) => dispatch(addTodo(des))}
      />

      <TaskList
        className='mt-6'
        todos={todos}
        onRemoveTodo={(id: string) => dispatch(removeTodo(id))}
        onToggleTodoStatus={(id: string) => dispatch(toggleTodoStatus(id))}
      />
    </Wrapper>
  );
}
