import Button from "./button";

const App = () => {
    return (
        <div>
            <div>
                <Button primary >Click Me!</Button>
            </div>
            <div>
                <Button secondary>See Deal!</Button>
            </div>
            <div>
                <Button success>Buy Now!</Button>
            </div>
            <div>
                <Button warning>Hide Ads!</Button>
            </div>
            <div>
                <Button danger>Feedback!</Button>
            </div>
        </div>
    );
};

export default App;
