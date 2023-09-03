const friends = ['mountain', 'tree', 'queen']


function Friends(props) {
    return (
        <>
        <p>{props.name}</p>
        </>
    )
}

function List() {
    return (
        <>
        {friends.map((x, i) => (
            <Friends 
            name={x} 
            key={i}
            />
        ))}
        </>
    )
}


const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<List/>)
