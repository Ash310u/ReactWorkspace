import Link from './components/Link'
import Route from './components/Route'
import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";

const App = () => {
    return (
        <div>
            <Link to='/accordion'>Accordion</Link> 
            <Link to='/dropdown'>Dropdown</Link> 
            <div>
                <Route path='/accordion'><AccordionPage/></Route>
                <Route path='/dropdown'><DropdownPage/></Route>
            </div>
        </div>
    )
};

export default App;