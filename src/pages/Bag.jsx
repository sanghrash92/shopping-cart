import React, { useState } from 'react';
import { FaShoppingBasket } from "react-icons/fa";
import Modal from '../components/Modal';
// import ReactDom from 'react-dom';

function Bag() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}><FaShoppingBasket /></button>

            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                Fancy Modal
            </Modal>
        </div>
    )
}

export default Bag