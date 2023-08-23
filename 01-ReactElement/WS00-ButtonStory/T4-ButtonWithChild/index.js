// #1 React : CreateElement
const props = {}
const span1 = React.createElement('span', null)
const span2 = React.createElement('span', null)
const span3 = React.createElement('span', null)
const span4 = React.createElement('span', null)
const span5 = React.createElement('span', null, 'Button')

const btnEl = React.createElement('button', null, span1,span2,span3,span4,span5)
// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root')
const root = ReactDOM.createRoot(domRoot)
// #3 ReactDOM : TakeOver for Render Task
root.render(btnEl)