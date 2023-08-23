// #1 React : CreateElement
function filler() {
    let anchorTag = React.createElement('' )
}

const link1 = React.createElement('a', {
    href: '#',
    className: 'nav_menu_link'
}, 'account'
)

const link2 = React.createElement('a', {
    href: '#',
    className: 'nav_menu_link'
}, 'about'
)

const link3 = React.createElement('a', {
    href: '#',
    className: 'nav_menu_link'
}, 'service'
)

const link4 = React.createElement('a', {
    href: '#',
    className: 'nav_menu_link'
}, 'contact'
)

const ul = React.createElement('ul', {className: 'nav_menu_link'}, link1, link2, link3, link4)
// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root')
const root = ReactDOM.createRoot(domRoot)
// #3 ReactDOM : TakeOver for Render Task
root.render(ul)
