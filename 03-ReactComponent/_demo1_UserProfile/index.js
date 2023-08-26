const UserProfileComponent = () => {
    return <h1 className='profile__card'>FullName: John Doe</h1>
}

const userProfile = (
    <div className='profile__card'>
        <h1>FullName: John Doe</h1>
        <h2>Age: 30</h2>
    </div>
)

// let user1 = userProfileComponent()

function App() {
    return (
        <div className='app'>
            <UserProfileComponent />
            <UserProfileComponent />
            <UserProfileComponent />
        </div>
    )
}

// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<App/>);
