import { Button } from '@mui/joy';

const AddTodo = () => {
  return (
    <Button
      sx={{
        width: '96%',
        minHeight: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '8px',
        borderRadius: '20px',
      }}
    >
      Add todo
    </Button>
  );
};

export default AddTodo;
