// #1 React : CreateElement

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

//////////////////////////////////////////////////////////////////////
const right = React.createElement('div', {className: 'grid-item-2'}, imgDiv)
const left = React.createElement('div', {className: "grid-item-1"}, header1, pEl, btnDiv)
const gridBox = React.createElement('div', {className: 'grid-cols-2'}, left, right)
const container = React.createElement('div', {className: 'container'}, gridBox)
const section = React.createElement('section', {className: 'wrapper'}, container)
// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root')
const root = ReactDOM.createRoot(domRoot)
// #3 ReactDOM : TakeOver for Render Task
root.render(section)
