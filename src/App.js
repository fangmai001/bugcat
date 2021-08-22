import './App.css';
import aaa from './video-1.mp4'

const size = 50

const manyMore = () => {
  const result = []
  for (let index = 0; index < size; index++) {
    result.push(
      <video loop id={`video${index}`}>
        <source src={aaa} type="video/mp4" />
          Your browser does not support the video tag.
      </video>
    )
  }
  return result
}

const onPlayClick = () => {
  for (let index = 0; index < size; index++) {
    const waitSec = Math.random() * 1000
    setTimeout(() => {
      const vid = document.getElementById(`video${index}`);
      vid.play();
      vid.volume = 0.1;
    }, waitSec)
  }
}

const onPauseClick = () => {
  for (let index = 0; index < size; index++) {
    const vid = document.getElementById(`video${index}`);
    vid.pause();
  }
}

function App() {
  return (
    <div>
      <button onClick={onPlayClick}>
        play
      </button>
      <button onClick={onPauseClick}>
        pause
      </button>
      <br />
      {manyMore()}
    </div>
  );
}

export default App;
