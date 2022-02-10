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
  
  const [state, setState] = React.useState(' ');


  const handleChange=(event)=> {
    setState(event.target.value);
  }

  const handleSubmit=(event)=> {
    alert('Le nom a été soumis : ' + state);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input type="text" value={state} onChange={handleChange} />
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  );
}

function EssayForm (props) {
  const [state, setState] = React.useState('Écrivez un essai à propos de votre élément du DOM préféré');

  const handleChange = (event) => {
    setState(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('Un essai a été envoyé : ' + state);
    event.preventDefault();
  }
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Essay:
          <textarea value={state} onChange={handleChange} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    );
}

function FlavorForm (props) {
  const [state, setState] = React.useState('coconut');

  const handleChange = (event) => {
    setState(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('Votre parfum favori est : ' + state);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Choisissez votre parfum favori :
        <select value={state} onChange={handleChange}>
          <option value="grapefruit">Pamplemousse</option>
          <option value="lime">Citron vert</option>
          <option value="coconut">Noix de coco</option>
          <option value="mango">Mangue</option>
        </select>
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  );
}

function App(props){

  return (
     <div>
       <FlavorForm/>
       <EssayForm/>
       <NameForm/>
     </div>
  )
}

ReactDOM.render(<App/>, document.querySelector('#app'))