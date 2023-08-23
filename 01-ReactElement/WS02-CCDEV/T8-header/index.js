// #1 React : CreateElement
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

const navMenu = React.createElement('div', {
    className: 'nav_menu',
    id: 'nav_menu'
}, ul)
const h2 = React.createElement('h2', null, 'Devkit.')

const logo = React.createElement('div', {className: 'logo'}, h2)
const nav = React.createElement('nav', {className: 'nav'}, logo, navMenu)
const header = React.createElement('header', {className: "container header"}, nav)
// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root')
const root = ReactDOM.createRoot(domRoot)
// #3 ReactDOM : TakeOver for Render Task
root.render(header)
