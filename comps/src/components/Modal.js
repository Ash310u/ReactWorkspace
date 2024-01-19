import ReactDOM from "react-dom"
import { useEffect } from "react"

const Modal = ({ onClose, children, actionBar }) => {
    useEffect(() => {
        // Whenever Modal comp rendered then this class will be appeared" 
        document.body.classList.add('overflow-hidden');
        
        // Cleanup function to remove the class for scrolling after the modal is closed
        return () => {
            document.body.classList.remove('overflow-hidden');
        }
    },[])
    
    return ReactDOM.createPortal(
        <div >
            <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
            <div className="fixed inset-72 p-10  bg-white">
                <div className="flex flex-col justify-between">
                    {children}
                    <div className="flex justify-end">
                        {actionBar}
                    </div>
                </div>
            </div>
        </div >,

        document.querySelector('.modal-container')
    )
}

export default Modal