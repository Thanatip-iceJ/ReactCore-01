// #1 React : CreateElement
const props = {
    className: 'btn',
    role:'button',
    type:'submit',
    onClick: () => alert('Successfully registered')
}
const btnEl = React.createElement('button', props , 'Register')
// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root')
const root = ReactDOM.createRoot(domRoot)
// #3 ReactDOM : TakeOver for Render Task
root.render(btnEl)