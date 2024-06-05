import { useState } from 'react';

import { Modal, ModalClose, ModalDialog, Typography } from '@mui/joy';

const EditTodo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ModalDialog>
          <ModalClose onClick={() => setIsOpen(false)} />
          <Typography>Modal title</Typography>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default EditTodo;
