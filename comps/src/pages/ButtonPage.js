import Button from "../components/Button";
import { GoFlame, GoDatabase, GoHome, GoCpu, GoCloud } from "react-icons/go";

const ButtonPage = () => {
    const handleClick = () => {}
    const handleMouseEnter = () => {}
    const handleMouseLeave = () => {}
    const handleMouseOver = () => {}
    return (
        <div>
            <div>
                <Button primary rounded onClick={handleClick} className='mb-5'>
                    <GoCloud />
                    Cloud!
                </Button>
            </div>
            <div>
                <Button secondary outline onMouseEnter={handleMouseEnter}>
                    <GoDatabase />
                    Database!
                </Button>
            </div>
            <div>
                <Button success rounded outline onMouseLeave={handleMouseLeave}>
                    <GoHome />
                    Home!
                </Button>
            </div>
            <div>
                <Button warning onMouseOver={handleMouseOver}>
                    <GoCpu />
                    CPU!
                </Button>
            </div>
            <div>
                <Button danger rounded>
                    <GoFlame />
                    Jwala!
                </Button>
            </div>
        </div>
    );
};

export default ButtonPage;
