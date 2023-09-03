function Profile() {
    return <div>
        <h1>John Doe</h1>
        <h2>age: 27</h2>
    </div>
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<Profile />)
