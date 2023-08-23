// #1 React : JSX

let fullName = 'Pavit Pimchanagul'
let birthYear = 1998;
const CURRENT_YEAR = 2023;
let textColor = 'text-blue'
const userProfile = (
    <div>
        <h1 className='text-red'>Fullname: {fullName}</h1>
        <p className={textColor}>Age: {CURRENT_YEAR - birthYear}</p>
    </div>
)
// #2 ReactDOM : createRoot
const domNode = document.getElementById('root')
const root = ReactDOM.createRoot(domNode)
// #3 ReactDOM : TakeOver for Render Task
root.render(userProfile)
