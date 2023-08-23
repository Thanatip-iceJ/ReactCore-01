const userHobby = 'Boxing'
const isMarried = true;
const exp = ['driver', 'dev', 'prime minister']
const userPets = {dog: 'Jum-meng', cat: 'john'}

const expList = exp.map(x => <li>{x}</li>)

const userProfile = (
    <div>
        <h1 className='header'>Fullname: John Doe</h1>
        <h4>age: {40 - 5 - 5}</h4>
        <h4>hobby: {userHobby}</h4>
        <h4>isMarried: {isMarried? 'true' : 'false'}</h4> 
        <h4>Experience: </h4>
        <ul>
            {exp.map(x => <li>{x}</li>)}
        </ul>
        <h4>Pets:</h4>
        <ul>
            <li>Dog: {userPets.dog}</li>
            <li>Cat: {userPets.cat}</li>
        </ul>
    </div>
) //{} = Expression && Babel doesn't render Boolean


//# ReactDOM
const domNode = document.getElementById('root')
const root = ReactDOM.createRoot(domNode)

root.render(userProfile)