import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

const ModalPage = () => {
    const [showModal, setShowModal] = useState(false)

    const handleClose = () => {
        setShowModal(false)
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          handleClose();
        }
    })

    const actionBar = <div>
        <Button onClick={handleClose} primary rounded> I Accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here It's a notice from Professor Albus Dumbledore
        </p>
    </Modal>

    return (
        <div>
            <Button primary rounded onClick={() => setShowModal(true)}>Open Modal</Button>
            {showModal && modal}
        </div>
    );
};

export default ModalPage