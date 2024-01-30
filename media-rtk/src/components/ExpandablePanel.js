import { GoChevronDown, GoChevronLeft} from "react-icons/go";
import { useState } from "react";

const ExpandablePanel = ({ header, children }) => {
    const [expanded, setExpanded] = useState(false)

    const handleClick = () => {
        setExpanded((curr) => {
            return !curr;
        })
    }

    return (
        <div className="mb-2 border rounded-sm">
            <div className="flex p-2 flex-row justify-between items-center select-none" onClick={handleClick} >
                <div className="flex flex-row items-center justify-center">
                    {header}
                </div>
                {expanded ? <GoChevronLeft /> : <GoChevronDown />}
            </div>
            {expanded && <div className="p-2 border-t select-none">{children}</div> }
        </div>
    );
};

export default ExpandablePanel;
