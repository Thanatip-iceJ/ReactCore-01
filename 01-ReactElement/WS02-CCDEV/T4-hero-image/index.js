// #1 React : CreateElement

const img = React.createElement('img',
{
    src: "https://i.ibb.co/mhcL2P6/image.png",
    alt: 'team-photo'
})
const imgDiv = React.createElement('div', {className: 'team_img_wrapper'}, img)
// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root')
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(imgDiv)
