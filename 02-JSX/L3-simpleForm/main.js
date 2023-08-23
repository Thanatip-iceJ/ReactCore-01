// #1 React : JSX

// const props = {className:'username', id:'username_id', name:'username'}

const formData = (
    <>
        <label htmlFor="username_id">Username</label>
        <input className='username' id='username_id' name='username' />
    </>
)
// #2 ReactDOM : createRoot
const domNode = document.getElementById('root')
const root = ReactDOM.createRoot(domNode)
// #3 ReactDOM : TakeOver for Render Task
root.render(formData)