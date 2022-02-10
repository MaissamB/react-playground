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

 ------------------------------------------exo8-b--------------------------------------------


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
  );*/

  const colours = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };
  
  const App = () => {
    const number = 25;
    const [pokemons, setPokemon] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [previousUrl, setPreviousUrl] = React.useState("");
    const [nextUrl, setNextUrl] = React.useState("");
  
    React.useEffect(() => {
      fetchPokemons(`https://pokeapi.co/api/v2/pokemon?limit=15&offset=0`);
    }, []);
  
    const fetchPokemons = (url) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setPokemon(data.results);
          setPreviousUrl(data.previous);
          setNextUrl(data.next);
        });
    };
  
    React.useEffect(() => {
      if (pokemons.length === 0) setIsLoading(true);
      if (pokemons.length > 0) setIsLoading(false);
    }, [pokemons]);
  
    const changeOffset = (value) => {
      if (value === "<") {
        if (previousUrl === null) return;
        fetchPokemons(previousUrl);
      } else {
        fetchPokemons(nextUrl);
      }
    };
  
    return (
      <React.Fragment>
        <Pagination onButtonClick={changeOffset} />
        {isLoading && <h1>Loading...</h1>}
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} {...pokemon} />
        ))}
        <Pagination onButtonClick={changeOffset} />
      </React.Fragment>
    );
  };
  
  const PokemonCard = (props) => {
    const [pokemon, setPokemon] = React.useState({});
    const [type, setType] = React.useState("");
    const [style, setStyle] = React.useState({});
    const [sprite, setSprite] = React.useState("");
    React.useEffect(() => {
      fetch(props.url)
        .then((res) => res.json())
        .then((data) => {
          setPokemon(data);
          setType(data.types[0].type.name);
          setSprite(data.sprites.other["official-artwork"].front_default);
        });
    }, []);
  
    React.useEffect(() => {
      setStyle({
        backgroundColor: colours[type],
        boxShadow: `${colours[type]} 1px 2px 3px`,
      });
    }, [type]);
  
    return (
      <div className="pokemon-card" style={style}>
        <img className="pokemon-img" src={sprite} alt="" />
        <div>N° {String(pokemon.id).padStart(3, 0)}</div>
        <div>Nom: {pokemon.name}</div>
        <div>Poids: {pokemon.weight / 10} kgs</div>
      </div>
    );
  };
  
  const Pagination = ({ onButtonClick }) => {
    return (
      <div style={{ textAlign: "center" }}>
        <button
          onClick={({ target: { value } }) => onButtonClick(value)}
          value="<"
        >
          {"<"}
        </button>
        <button
          onClick={({ target: { value } }) => onButtonClick(value)}
          value=">"
        >
          {">"}
        </button>
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.querySelector("#app"));