
const array = [
    {id:1, message:"cool", date:'2023-07-12', user:'John'},
    {id:2, message:"nice", date:'2023-07-13', user:'Jack'},
    {id:3, message:"great", date:'2023-07-14', user:'Joe'},
]

function ArrayPost(props) {
    return (
        <p>{props.date} {props.user}: {props.message} </p>
    )
}

function Posts() {
    return (
        <>
        {array.map(x => (
            <ArrayPost 
            id={x.id}
            message={x.message}
            date={x.date}
            user={x.user}
            />
        ))}
        </>
    )
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot)
root.render(<Posts />);

