

// -------------------------------------------
// Étape 1 => On modifie le composant input
// -------------------------------------------

/* class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Le nom a été soumis : ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Nom :
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Envoyer" />
        </form>
      );
    }
  }


function NameForm(props) {
    const [name, setName] = React.useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Le nom a été soumis: ${name}`);
    }



    return(
    <form onSubmit={handleSubmit}>
        <label>
        Nom :
        <input type="text" value={name} onChange={handleChange} />
        </label>
        <input type="submit" value="Envoyer" />
    </form>
);
}



// ReactDOM.render(<NameForm />, document.querySelector('#app'));






// -------------------------------------------
// Étape 2 => On modifie le composant textarea
// -------------------------------------------



/* class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Écrivez un essai à propos de votre élément du DOM préféré'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Un essai a été envoyé : ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Essay:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Envoyer" />
        </form>
      );
    }
  } 

function EssayForm(props) {
    const [text, setText] = React.useState('Écrivez un essai à propos de votre élément du DOM préféré');

    const handleChange = (e) => {
        e.preventDefault();
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Le texte a été soumis: ${text}`);
    }
      
    return(
        <form onSubmit={handleSubmit}>
          <label>
            Essay:
            <textarea rows={5} cols={35} value={text} onChange={handleChange} />
          </label>
          <input type="submit" value="Envoyer" />
        </form>

      )


  }



//   ReactDOM.render(<EssayForm />, document.querySelector('#app'));





// -------------------------------------------
// Étape 3 => On modifie le composant select
// -------------------------------------------

/* class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Votre parfum favori est : ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Choisissez votre parfum favori :
            <select value={this.state.value} onChange={this.handleChange}>
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
  } 

function FlavorForm(props) {
    const [value, setValue] = React.useState('coconut');
    const handleChange = (e) => {
        e.preventDefault();
        setValue(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`la valeur sélectionnée est: ${value}`);
    }

    return(
        <form onSubmit={handleSubmit}>
          <label>
            Choisissez votre parfum favori :
            <select value={value} onChange={handleChange}>
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



//ReactDOM.render(<FlavorForm/>, document.querySelector('#app'));




function MultiForm(props) {
    const [inputs, setInputs] = React.useState({
        name: '',
        text: '',
        value: "coconut"
    });

    

/*     

    // useCallback n'est pas forcément le meilleur choix ici

    
    const handleChange = React.useCallback(
        ({target: {name, value}}) => {
            setInputs(state => ({...state, [name]: value}), []);
            console.log(inputs);
        },
        [inputs]
    )

 

    
    const handleChange = ({target: {name, value}}) => {
        setInputs(state => ({...state, [name]: value}), []);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        for(const name in inputs) {
            console.log(`${name}: ${inputs[name]}`)
        }
    }


    return(
        <form onSubmit={handleSubmit}>
            <label>
                Nom :
                <input type="text" name="name" value={inputs.name} onChange={handleChange} />
            </label>

            <label>
                Essay:
                <textarea name="text" value={inputs.text} onChange={handleChange} />
            </label>

            <label>
                Choisissez votre parfum favori :
                <select name="value" value={inputs.value} onChange={handleChange}>
                    <option value="grapefruit">Pamplemousse</option>
                    <option value="lime">Citron vert</option>
                    <option value="coconut">Noix de coco</option>
                    <option value="mango">Mangue</option>
                </select>
            </label>

            <input type="submit" value="Envoyer" />
        </form>
    )
}

ReactDOM.render(<MultiForm />, document.querySelector('#app'));*/

function BaseNumberInput(props){
  return(
    <label>
      {props.name} : 
      <input type="text" name={props.name} value={props.value}  onChange={props.onChangeBase} />
    </label>
  );
}

//

function App(props){
  const [values , setValues] = React.useState({
    number : '',
    binary: ''
  });

  const handleChange=({ target: { name, value }}) => {
    setValues(state => ({...state, [name]: value}), [])
    if (name === "number"){
      console.log("number")
    }
    if (name === "binary"){
      console.log("binary")
    }

  }

  return (<div>
      <BaseNumberInput name="number" value={values.number} onChangeBase={handleChange}/>
      <BaseNumberInput name="binary" value={values.binary} onChangeBase={handleChange}/>
    </div>
  );
}


ReactDOM.render(<App />, document.querySelector('#app'));




/*----------------------------------------Correction--------------------------------------------

const App = () => {
  const [ base, setBase ] = React.useState(false);
  const [decimal, setDecimal] = React.useState('');
  const [convertedNumber, setConvertedNumber] = React.useState('');


  React.useEffect(() => {
    if(base) {
      setConvertedNumber(parseInt(decimal, 10).toString(base))
    }
    

  }, [decimal, base])


  const handleChange = (value) => {
    if(isNaN(value)) return
    setDecimal(value);
    // setConvertedNumber(parseInt(decimal, 10).toString(2))
  }

  const changeBase = (e) => {
    console.log("change");
    setBase(e.target.value)

  }



  return(
    <React.Fragment>
      <BaseNumberInput number={decimal} onChangeBase={handleChange}>Décimal</BaseNumberInput>
      <SelectBaseInput selectedBase={base} changeBase={changeBase}/>
      {base && <BaseNumberInput number={convertedNumber} onChangeBase={handleChange}>Binaire</BaseNumberInput>}
    </React.Fragment>
  )

}


const BaseNumberInput = ({ onChangeBase, number, base, children}) => {


  return(
    <div>
      <label>{children}</label>
      <input value={number} type="text" onChange={(e) =>onChangeBase(e.target.value)} />
    </div>
  )

}

const SelectBaseInput = ({ selectedBase, changeBase}) => {



  return(

    <select value={selectedBase} onChange={changeBase}>
      <option value={false} disabled>Choississez une option</option>
      <option value="2">Binaire</option>
      <option value="3">Ternaire</option>
      <option value="7">Septénaire</option>
      <option value="16">Héxadécimal</option>
    </select>
  )
}


ReactDOM.render(<App />, document.querySelector('#app'));
*/