
function ProductItem(props) {
    return <div>
        <h1>{props.name}</h1>
        <h2>{props.price}</h2>
        <p>{props.description}</p>
    </div>
}


const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<ProductItem name='mango' price='100000' description='expensive'/>)
