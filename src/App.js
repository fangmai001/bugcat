import logo from './logo.svg';
import './App.css';
import aaa from './video-1.mp4'

const size = 50

const manyMore = () => {
  const result = []
  // const item = (
  //   <video autoPlay loop controls id={`video1`}>
  //     <source src={aaa} type="video/mp4" />
  //       Your browser does not support the video tag.
  //   </video>
  // )
  for (let index = 0; index < size; index++) {
    // result.push(
    //   <video height={50} width={50} loop id={`video${index}`}>
    //     <source src={aaa} type="video/mp4" />
    //       Your browser does not support the video tag.
    //   </video>
    // )
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
    document.querySelector(`#video${index}`).play()
  }
}

const onPauseClick = () => {
  for (let index = 0; index < size; index++) {
    document.querySelector(`#video${index}`).pause()
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
