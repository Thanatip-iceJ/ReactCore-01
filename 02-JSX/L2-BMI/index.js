// #1 React : JSX

let height = 1.75;
let weight = 60;

const calcBMI = (w, h) => w / h ** 2;
// #2 ReactDOM : createRoot
const domNode = document.getElementById('root')
const root = ReactDOM.createRoot(domNode)
// #3 ReactDOM : TakeOver for Render Task
root.render(<h3>{calcBMI(weight, height).toFixed(2)}</h3>)
