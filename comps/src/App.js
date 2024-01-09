import Button from "./button";

const App = () => {
    return (
        <div>
            <div>
                <Button primary rounded>Click Me!</Button>
            </div>
            <div>
                <Button secondary outline >See Deal!</Button>
            </div>
            <div>
                <Button success rounded outline>Buy Now!</Button>
            </div>
            <div>
                <Button warning>Hide Ads!</Button>
            </div>
            <div>
                <Button danger rounded>Feedback!</Button>
            </div>
        </div>
    );
};

export default App;
