const firstName = "Maïssam"
const lastName = "Bensaber"

const myElement = <div>
        <span className="red">{format(lastName,"Upper")}</span>
        <br/>
        <span>{format(firstName,"Camel")}</span>
    </div>

ReactDOM.render(myElement, document.querySelector('#app'));


function format(str, format){
    switch (format){
        case "Upper":
            return str.toUpperCase()
        case "Camel":
            return str[0].toUpperCase() + str.slice(1)
        default:
            return "Unknown format"
    }
}