import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import HeroPage from "./Pages/HeroPage";
import { useEffect, useRef } from "react";

function App() {
  const audioRef = useRef(null);

  // Function to handle the user interaction to play audio
  const handleUserInteraction = () => {
    if (audioRef.current) {
      audioRef.current.play(); // Play audio after user interaction
      document.removeEventListener("click", handleUserInteraction); // Remove the listener once audio starts
    }
  };

  useEffect(() => {
    // Add the event listener for user interaction (click anywhere on the page)
    document.addEventListener("click", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction); // Cleanup the listener
    };
  }, []);

  return (
    <div className="App">
      <HeroPage />
      {/* The audio element */}
      <audio ref={audioRef} loop>
        <source src="./song.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default App;
