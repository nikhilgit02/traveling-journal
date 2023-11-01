import './App.css';
import Navbar from './components/Navbar';
import Stack from './components/Stack';
import data from './components/data'

function App() {
  const details = data.map(item =>
    <Stack 
      key ={item.id}
      item={item}
      />
    )

  return (
    <div>
      <Navbar/>
      {details}
    </div>
  );
}

export default App;
