// #1 Write Your Function Component


const Header = () => (
    <h1>Discover authentic <br/>Japanese cuisine in LA. <br/>Opening Soon!</h1>
)

// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<Header/>);
