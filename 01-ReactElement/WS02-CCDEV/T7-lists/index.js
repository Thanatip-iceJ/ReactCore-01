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
// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root')
const root = ReactDOM.createRoot(domRoot)
// #3 ReactDOM : TakeOver for Render Task
root.render(ul)
