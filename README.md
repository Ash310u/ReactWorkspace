# React State methods uses Array destructuring

## A example of Array distructuring

```js
const ArrayDes = () => {
  return [1,2,3,4]
}
const [ firstElement, secondElement ] = ArrayDes()
console.log(firstElement, secondElement);

// Output: 1,2
```

## Event capturing and bubbling method

```js
const drop =  document.querySelector('.w-48')

const handleClick = (event) => {
    if (drop.contains(event.target)) {
        console.log('inside div')
    } else {
        console.log('outside div')
    }
}

document.addEventListener('click', handleClick , true)

```

## State Concepts

<img src="./conceptsPNGS/stateUpdates.png" alt="State Updates">
<img src="./conceptsPNGS/addingElementsToAnArray.png" alt="Adding Elements To An Array">
<img src="./conceptsPNGS/removingElementsFromAnArray.png" alt="Removing Elements From An Array">
<img src="./conceptsPNGS/changingElements.png" alt="Changing Elements">
<img src="./conceptsPNGS/changingPropertiesInObjects.png" alt="Changing Properties In Objects">
<img src="./conceptsPNGS/removingPropertiesInObjects.png" alt="Removing Properties In Objects">
<div><img src="./conceptsPNGS/hooks.png" alt="Hooks" width="500"> <img src="./conceptsPNGS/useEffectCleanupFunc.png" alt="useEffect Cleanup function" width="500"><div/>
