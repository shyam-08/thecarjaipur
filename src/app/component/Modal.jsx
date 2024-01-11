// components/Modal.js
import { Input } from '@mui/material';
import React from 'react';
import Modal from 'react-modal';

const CustomModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <h2>Subscribe to our Newsletter</h2>
      {/* Your form content goes here */}
      <form >
    <Input type='text' placeholder='Name'/>
    <Input type='number' placeholder='Enter Your Number'/>
        <button type="submit">Submit</button>
      </form>
      <p>We ensure you your detail will be safe.</p>
    </Modal>
  );
};

export default CustomModal;
