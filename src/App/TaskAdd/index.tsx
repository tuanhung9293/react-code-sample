import { FC, useState } from 'react';
import styled from 'styled-components';
import theme from '../../theme';

type TProps = {
  onAddTodo: (des: string) => void;
}

export const TaskAdd: FC<TProps> = ({ onAddTodo }) => {
  const [todoDescription, setTodoDescription] = useState('');
  const [error, setError] = useState('');

  const validate = () => {
    const isValid = !!todoDescription.trim();

    setError(isValid ? '' : 'This field is required!');
    return isValid;
  }

  return (
    <div className='mt-4'>
      <input
        type='text'
        className='w-full border border-skin-base focus:shadow-md'
        onChange={(e) => setTodoDescription(e.target.value)}
        value={todoDescription}
      />

      {error &&
        <div className='text-red600 text-sm text-center mt-1'>
          {error}
        </div>
      }

      <ButtonStyled
        onClick={() => {
          if (!validate()) return;
          onAddTodo(todoDescription);
          setTodoDescription('');
        }}
      >
        Add Item
      </ButtonStyled>
    </div>
  );
}

const ButtonStyled = styled.button`
  width: 100%;
  height: ${theme.spacing(8)};
  margin-top: ${theme.spacing(4)};
  background-color: ${theme.skin.bg};
  :hover {
    background-color: ${theme.skin.darker};
  }
`