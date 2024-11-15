import Header from './components/header/header.component';
import Timer from './components/timer/timer.component';
import './App.css';

function App() {
    // const { countdownInput } = useContext(CountdownContext);
    // const { hours, minutes, seconds } = countdownInput;

    return (
      <>
        <div className='timer-app'>
          <Header />
          <Timer />
        </div>
      </>
    );
}

export default App;