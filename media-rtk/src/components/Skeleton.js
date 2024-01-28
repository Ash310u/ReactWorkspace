import classnames from "classnames";

const Skeleton = ({ times, className }) => {
    const outerClassnames = classnames(
        'relative',
        'overflow-hidden',
        'bg-gray-200',
        'rounded',
        'mb-2.5',
        className
    );
    const innerClassnames = classnames(
        'animate-shimmer',
        'absolute',
        'inset-0',
        '-translate-x-full',
        // Gradient ///////////
        'bg-gradient-to-r', //
        'from-gray-200',   //
        'via-white',      //
        'to-gray-200'    //
        //////////////////
    );


    // If an array has no defined elements or only contains empty slots, the map method in JavaScript will essentially do nothing.
    // The map function operates on each defined element within the array and skips over empty slots. That's why I have to fill the Array.
    let boxes = Array(times).fill(0).map((_, i) => {
        // using '_' as first arg means ignoring the first column
        return <div key={i} className={outerClassnames}>
            <div className={innerClassnames} />
        </div>
    })

    return (
        <div>
            {boxes}
        </div>
    )
}

export default Skeleton