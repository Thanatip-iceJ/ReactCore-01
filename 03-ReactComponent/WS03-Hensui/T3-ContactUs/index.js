// #1 Write Your Function Component
const ContactUs = () => (
    <div className='contact'>
        <input type="text" name="" value=""/>
        <button type="">Submit</button>
    </div>
)
// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<ContactUs/>)
