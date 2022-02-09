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
  );*/


  function Cards(props){
    return(
        <React.Fragment>
            <p></p>
        </React.Fragment>
    )
  }


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
        {users.map((users) => {return users.name})}            
        </React.Fragment>
    )
}


  ReactDOM.render(
    <App/>,
    document.querySelector('#app')
  );