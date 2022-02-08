const firstName = 'r0ulito';
const lastName = 'formateur';

function FirstName(props) {

    
    // Solution avec bonus
    const formatFirstName = (firstName) => {
        return firstName[0].toUpperCase() + firstName.substr(1);
    }

    return <span>{formatFirstName(props.text)}</span>
    

    // Solution sans bonus
    //return <span>{props.text[0].toUpperCase() + props.text.substr(1)}</span>
}

function LastName(props) {

    
    // Solution avec bonus
    const formatLastName = (lastName) => {
        return lastName.toUpperCase();
    }

    return <span>{formatLastName(props.text)}</span>
    

    // Solution sans bonus
    //return <span className="red-text">{props.text.toUpperCase()}</span>

}

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()}
    }
    render(){
        return (
            <div>
            <h1>Bonjour, monde !</h1>
            <h2>Il est {this.props.date.toLocaleTimeString('fr-FR')}.</h2>
            </div>
        );
    }
}

/*function Clock(props) {
    return (
        <div>
        <h1>Bonjour, monde !</h1>
        <h2>Il est {props.date.toLocaleTimeString('fr-FR')}.</h2>
        </div>
    );
}*/

function tick() {
    ReactDOM.render(
        <h1><Clock date={new Date()} /></h1>,
        document.querySelector('#app')
    );
}
setInterval(tick, 1000);    


//const helloWorld = <h1><Clock date={new Date()} /></h1>;

//ReactDOM.render(helloWorld, document.querySelector('#app'));
