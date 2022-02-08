/* 
// Étape 1
class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Bonjour, monde !</h1>
          <h2>Il est {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

ReactDOM.render(<Clock date={new Date()}/>, document.querySelector('#app')); 

*/


/* 

// Étape 2

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
  render() {
    return (
      <div>
        <h1>Bonjour, monde !</h1>
        <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.querySelector('#app')); 


 */



// Étape 3

/* class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
        <div>
            <h1>Bonjour, monde !</h1>
            <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        );
    }
}

ReactDOM.render(<Clock />, document.querySelector('#app'));  */
let textColor = { color: 'black' };

function Clock(props) {
    React.useEffect(() => {
        tick();
        //setStyle(textColor);       
    });
    const [date, setDate] = React.useState(new Date());
    
    const [divStyle, setStyle] = React.useState(textColor);

    const tick = () => {
        
        setInterval(() => {
            setDate(new Date());
            setStyle(textColor);
        }, 1000)
    }
    
    const triggerRandomColor = (e) => {
      e.preventDefault();
      textColor = {color: 'blue'};
    }

    const triggerDefaultColor = (e) => {
      e.preventDefault();
      textColor = {color: 'black'};
    }

    return (
        <div>
            <h1>Hello world</h1>
            <h2 style={divStyle}>Il est {date.toLocaleTimeString()}.</h2>
            <button onClick={triggerRandomColor}>Couleur Aléatoire</button>
            <button onClick={triggerDefaultColor}>Couleur par défaut</button>
            <br/>
            <button onClick={triggerRandomColor}>Arrêt Horloge</button>
            <button onClick={triggerDefaultColor}>Reprise Horloge</button>
        </div>
        );
}

ReactDOM.render(<Clock />, document.querySelector('#app'));





