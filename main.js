/*function UserGreeting(props) {
    return <h1>Bienvenue !</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Veuillez vous connecter</h1>;
  }
  function Greeting(props) {
      const [isLoggedIn, setIsLoggedIn] = React.useState(false);

      const handleLogIn = (e) => {
          e.preventDefault();
          setIsLoggedIn(true);
      }

      const handleLogOut = (e) => {
          e.preventDefault();
          setIsLoggedIn(false);
      }

    return(
        <React.Fragment>
            {isLoggedIn ? 
            <React.Fragment>
                <UserGreeting />
                <button onClick={handleLogOut}>Se déconnecter</button>
            </React.Fragment> : 
            <React.Fragment>
                <GuestGreeting />
                <button onClick={handleLogIn}>Se connecter</button>
            </React.Fragment> }
        </React.Fragment>
    )
  }
  
  ReactDOM.render(
    <Greeting />,
    document.querySelector('#app')
  );


  const UserCard = (props) => {
    let { name, email, phone, website, company } = props.user;
  
    React.useEffect(() => {
      console.log(props.user);
    }, []);
  
    return (
      <ul>
        <li>{name}</li>
        <li>{email}</li>
        <li>{phone}</li>
        <li>{website}</li>
        <li>{company.name}</li>
      </ul>
    );
  };


function App(props){
    const [users, setUsers] = React.useState([]);
    React.useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
    },[])

    React.useEffect(() =>{
        console.log(users);
    },[users])

    return(
        <React.Fragment>
        {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}            
        </React.Fragment>
    )
}


  ReactDOM.render(
    <App/>,
    document.querySelector('#app')
  );

 ------------------------------------------exo8-b--------------------------------------------*/


 function App(props){
    const [pokedata, setPokedata] = React.useState([]);
    React.useEffect(() =>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then(response => response.json())
        .then(data => setPokedata(data.results))        
    },[])

    React.useEffect(()=>{
            //console.log(pokedata);
    },[pokedata])

    return(
        <React.Fragment>
            {pokedata.map((pokemon) => (
                <PokeCard key={pokemon.name} {...pokemon} />
            ))}                  
        </React.Fragment>
    )
}

const PokeCard = (props) => {
    const [pokemon, setPokemon] = React.useState({});
    const [url, setUrl] = React.useState("")
    console.log (props.pokemon);
        React.useEffect(() =>{
            fetch(props.url)
            .then(response => response.json())
            .then(data => {setPokemon(data), setUrl(data.sprites.front_default)})        
        },[])
        
  
    return (
      <ul>
        <li>{pokemon.name}</li>
        <li><img src={url}/></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    );
  };


 ReactDOM.render(
    <App/>,
    document.querySelector('#app')
  );