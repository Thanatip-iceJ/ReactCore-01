const btn1 = React.createElement('button', {className: 'btn view_more_btn'}, 'view all pages')
const btn2 = React.createElement('button', {className: 'btn documentation_btn'}, 'documentation')
const btnDiv = React.createElement('div', {className: 'btn_wrapper'}, btn1, btn2)
const pEl = React.createElement('p', {className: 'info-text'}, 'Build a beautiful, modern website with flexible components built from scratch.')
const br = React.createElement('br', null)
const span = React.createElement('span', null, 'Codecamp.')
const header1 = React.createElement('h1', {className: 'main-heading'}, 'Welcome to ', span, br, 'Develop anything' )
const img = React.createElement('img',
{
    src: "https://i.ibb.co/mhcL2P6/image.png",
    alt: 'team-photo'
})
const imgDiv = React.createElement('div', {className: 'team_img_wrapper'}, img)
// #1 React : CreateElement
function aCreator(txt) {
    const anchorTag = React.createElement('a', 'null', txt)
    const navEl = React.createElement('li', liAttr, anchorTag)
    return navEl;
};

const liAttr = {
    href: '#',
    className: 'nav_menu_link'
}

const link1 = aCreator('account')
const link2 = aCreator('about')
const link3 = aCreator('service')
const link4 = aCreator('contact')

const ul = React.createElement('ul', {className: 'nav_menu_link'}, link1, link2, link3, link4)

const navMenu = React.createElement('div', {
    className: 'nav_menu',
    id: 'nav_menu'
}, ul)
const h2 = React.createElement('h2', null, 'Devkit.')

const logo = React.createElement('div', {className: 'logo'}, h2)
const nav = React.createElement('nav', {className: 'nav'}, logo, navMenu)
const header = React.createElement('header', {className: "container header"}, nav)


//////////////////////////////////////////////////////////////////////
const right = React.createElement('div', {className: 'grid-item-2'}, imgDiv)
const left = React.createElement('div', {className: "grid-item-1"}, header1, pEl, btnDiv)
const gridBox = React.createElement('div', {className: 'grid-cols-2'}, left, right)
const container = React.createElement('div', {className: 'container'}, gridBox)
const section = React.createElement('section', {className: 'wrapper'}, container)
const wrapped = React.createElement('div', null, header, section)
// #2 ReactDOM : createRoot
const domRoot = document.querySelector('#root')
const root = ReactDOM.createRoot(domRoot)
// #3 ReactDOM : TakeOver for Render Task
root.render(wrapped)

