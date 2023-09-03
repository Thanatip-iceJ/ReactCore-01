const postArr = [
    {message: 'Happy new year', user:'John', date:'1/1/2021'},
    {message: 'Programming is fun', user:'Jack', date:'30/6/2021'},
    {message: 'Oh Amazing', user:'Sarah', date:'23/7/2021'},
]


function Post(props) {
    return (
        <div className='card'>
            <h2>{props.message}</h2>
            <div className='card__text'>
                <span>Author: {props.user}</span>
                <span>{props.date}</span>
            </div>
        </div>
    )
}

function Feed() {
    return (
        <div className='container'>
            {postArr.map(x => (
                <Post message={x.message} user={x.user} date={x.date}/>
            ))}
        </div>
    )
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot).render(<Feed />);
