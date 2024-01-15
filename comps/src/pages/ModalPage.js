import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

const ModalPage = () => {
    const [showModal, setShowModal] = useState(false)
    const handleClose = () => {
        setShowModal(false)
    }
    return (
        <div>
            <Button primary rounded onClick={() => setShowModal(true)}>Open Modal</Button>
            {showModal && <Modal onClose={handleClose}/>}
        </div>
    );
};

export default ModalPage