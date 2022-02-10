/*function App(props) {
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(usersObject => setUsers(usersObject))
    }, [])

    const [users, setUsers] = React.useState([]);



    return(
        <React.Fragment>
        {
            users.map((u) =>(
                <UserCard key={u.id} user={u}/>
            ))
        }
        </React.Fragment>
    )
}

function UserCard({user}) {
    

    return (
        <ul className="user-card">
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.company.name}</li>
            <li>{user.phone}</li>
            <li>{user.website}</li>
        </ul>
    )
}

ReactDOM.render(<App/>, document.querySelector('#app'))*/

function NameForm (props) {
  return (
      <label>
        Nom :
        <input type="text" value={props.value} onChange={props.onChange} />
      </label>
  );
}

function EssayForm (props) {
    return (
        <label>
          Essay:
          <textarea value={props.value} onChange={props.onChange} />
        </label>
    );
}

function FlavorForm (props) {
  return (
      <label>
        Choisissez votre parfum favori :
        <select value={props.value} onChange={props.onChange}>
          <option value="grapefruit">Pamplemousse</option>
          <option value="lime">Citron vert</option>
          <option value="coconut">Noix de coco</option>
          <option value="mango">Mangue</option>
        </select>
      </label>
  );
}

function App(props){
  const [flavor, setFlavor] = React.useState('coconut');
  const [essay, setEssay] = React.useState('Écrivez un essai à propos de votre élément du DOM préféré');
  const [name, setName] = React.useState(' ');

  const handleFlavorChange = (event) => {
    setFlavor(event.target.value);
  }

  const handleEssayChange = (event) => {
    setEssay(event.target.value);
  }

  const handleNameChange=(event)=> {
    setName(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('Le User dont le nom est '+name+' et dont le parfum favori est -' + flavor+'- a écrit un essai : ' + essay);
    event.preventDefault();
  }


  return (
       <form onSubmit={handleSubmit}>
        <FlavorForm value={flavor} onChange={handleFlavorChange}/>
        <EssayForm value={essay} onChange={handleEssayChange}/>
        <NameForm value={name} onChange={handleNameChange} />
        <input type="submit" value="Envoyer" />
      </form>
  )
}

ReactDOM.render(<App/>, document.querySelector('#app'))