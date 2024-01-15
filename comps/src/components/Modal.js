import Button from "./Button"

const Modal = () => {
    return (
        <div>
            <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
            <div  className="absolute inset-40 p-10 bg-white">
                I'm a modal!
                <Button primary rounded>Close Modal</Button>
            </div>
        </div>
    )
}

export default Modal