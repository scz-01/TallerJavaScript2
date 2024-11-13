import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '4px solid #66f0d9',
  boxShadow: 30,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Abrir Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Titulo del modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever 
          since the 1500s, when an unknown printer took a galley of type 
          and scrambled it to make a type specimen book. It has survived not only five centuries, 
          but also the leap into electronic typesetting, remaining essentially unchanged.
          </Typography>
        </Box>
      </Modal>
      <Link to="/">Inicio</Link>
    </div>
  );
}