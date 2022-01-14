import './App.css';
import Section from './component/Section';
import createContext from './component/themeContext';
import React from 'react';

class App extends React.Component {

  state = {
    theme : 'dark',
    switchTheme : ()=>(
        this.setState((prevState)=>{
          return prevState.theme === 'dark' ? {theme : 'light'} : {theme : 'dark'}
        }))
    
  }




  render(){

    return (
      <div>
        <createContext.Provider value={this.state}>
        <Section/>
        </createContext.Provider>
      </div>
    );
  }

}

export default App;
