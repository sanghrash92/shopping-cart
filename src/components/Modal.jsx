import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

const Modal_Styles = {
  position: 'fixed',
  width: '300px',
  height: '100%',
  top: '50%',
  left: '95%',
  transform: 'translate(-65%, -50%)',
  backgroundColor: '#fff',
  padding: '50px',
  zIndex: 1000,
  border: '1px solid'
}

function Modal({ open, children, onClose }) {

  if(!open) return null;

  return (
    <div style={Modal_Styles}>
      <button onClick={onClose}><AiFillCloseCircle /></button>
      {children}
    </div>
  )
}

export default Modal