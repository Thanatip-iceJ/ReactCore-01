
function ProductItem({product}) {
    return <div>
        <h1>{product}</h1>
    </div>
}


const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<ProductItem product='Mango'/>)
