import './styles/_global.scss';
import Card from './Components/Card/Card';
import mobileBackground from '../src/assets/mobileBackground.svg';
function App() {


  return (
    <>
  
      <img className="mobileBackground" src={mobileBackground} alt="Mobile background"/>
  
    <Card />
    </>
  )
}

export default App
