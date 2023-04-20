import './App.css';
import MenuPage from './MenuPage';

const App = () => {
  return (
    <div className="App">
      <MenuPage src="01-IMG.jpg" />
      <MenuPage src="02-IMG.jpg" />
      <MenuPage src="03-IMG.jpg" />
      <MenuPage src="04-IMG.jpg" />
      <MenuPage src="05-IMG.jpg" />

      {/* <div className='Page' >
        <img
        src='01-IMG.jpg'
        alt='page-1'
        />
        
      </div> */}
      {/* <div className='Page2' >
        
      </div> */}
    </div>
  );
}

export default App;