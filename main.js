class Hello extends React.Component {
    render() {
      return React.createElement('div', null, `Hello World`);
    }
  }
  
  ReactDOM.render(
    React.createElement(Hello),
    document.getElementById('root')
  );