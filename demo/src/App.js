import './App.css';
import DemoPlayers from './components/Players';
import Footer from './components/Footer';

// import Main from './components/Main';

import Navigation from './components/Navigation';




function App() {
  return (
    <div className="App">
    
      <Navigation />
       {/* <Main />  */}
       <DemoPlayers/>
      <Footer/>
      
    </div>

  );

}
export default App;
