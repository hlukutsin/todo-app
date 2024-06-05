import { Box } from '@mui/joy';

import AddTodo from './AddTodo.tsx';
import Todo from './Todo.tsx';
import EditTodo from './EditTodo.tsx';

const TodosList = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'var(--joy-palette-neutral-300, #CDD7E1)',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <AddTodo />
      <Todo />
      <EditTodo />
    </Box>
  );
};

export default TodosList;
