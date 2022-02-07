const firstName = "Maïssam"
const lastName = "Bensaber"

const myElement = <div>
        <span className="red">{lastName.toUpperCase()}</span>
        <br/>
        <span>{firstName[0].toUpperCase() + firstName.slice(1)}</span>
    </div>

ReactDOM.render(myElement, document.querySelector('#app'));
