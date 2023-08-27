// #1 Write Your Function Component


const InfoText = () => (
    <div className='text-box'>
        <p>Welcome to Hensui, the newest addition to the</p>
        <p>vibrant Los Angeles dining scene! Our restaurant</p>
        <p>is dedicated to bringing you the most authentic</p>
        <p>and delicious Japanese cuisine</p>
        <br/>
        <p>Stay tuned for our grand opening date, sign up</p>
        <p>with your e-mail address to get notified.</p>
    </div>
)
// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<InfoText/>)