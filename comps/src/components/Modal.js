import ReactDOM from "react-dom"
import Button from "./Button"

const Modal = ({ onClose }) => {
    return ReactDOM.createPortal(
        <div >
            <div onClick={onClose} className="absolute inset-0 bg-gray-300 opacity-80"></div>
            <div className="absolute inset-72 p-10  bg-white">
                I'm a modal!
            </div>
        </div >,

        document.querySelector('.modal-container')
    )
}

export default Modal