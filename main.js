const helloWorld = <h1>Hello World</h1>;


// mauvaise pratique


//ReactDOM.render(helloWorld, document.body);

// Meilleure pratique mais pas encore LA meilleure

ReactDOM.render(helloWorld, document.querySelector('#app'));