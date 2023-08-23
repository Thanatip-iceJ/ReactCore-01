// #1 React : CreateElement

const link = React.createElement('a', {
    href: '#',
    className: 'nav_menu_link'
}, 'account'
)
const li = React.createElement('li', {className: 'nav_menu_item'}, link)
// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root')
const root = ReactDOM.createRoot(domRoot)
// #3 ReactDOM : TakeOver for Render Task
root.render(li)
