import Button from "./button";
import { GoFlame, GoDatabase, GoHome, GoCpu, GoCloud } from "react-icons/go";

const App = () => {
    const handleClick = () => {
            console.log('clicked');
    }
    return (
        <div>
            <div>
                <Button primary rounded onClick={handleClick}>
                    <GoCloud />
                    Cloud!
                </Button>
            </div>
            <div>
                <Button secondary outline >
                    <GoDatabase />
                    Database!
                </Button>
            </div>
            <div>
                <Button success rounded outline>
                    <GoHome />
                    Home!
                </Button>
            </div>
            <div>
                <Button warning>
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

export default App;
