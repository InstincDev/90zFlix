import React, {useState} from "react"
import {movies} from "../movies"

function Movies() {
    // Manage the currently playing audio
    const [movieMusic, setMovieMusic] = useState(null); 

    
  const playMusic = (music) => {
    // Stop any currently playing audio    
    if (movieMusic) {
      movieMusic.pause();
      movieMusic.currentTime = 0; // Reset playback position
    }

    // Create and play a new audio instance
    const newMusic = new Audio(music);
    newMusic.play();
    setMovieMusic(newMusic); // Save the new audio instance
  };

  const stopMusic = () => {
    if (movieMusic) {
      movieMusic.pause();
      movieMusic.currentTime = 0; // Reset playback position
    }
  };


    return(
        <div className="content">
            <h3 id="year">🎥 From Blockbusters to Classics: Top Flix From 1990 to 1999!🎞️</h3>
            <table>
                <tbody>
                    {movies.map((movie, i) => (
                    <tr key={movie.year}>
                        <td className="movie-card">
                            <img src={movie.image}
                            alt={movie.title}
                            className="movie-img"
                            // Play music on hover
                            onMouseEnter={()=>playMusic(movie.music)}
                            // Stop music when mouse leaves
                            onMouseLeave={stopMusic}/>
                             
                            <div className="movie-info">
                                <h3>{movie.title} ({movie.year})</h3>
                            </div>
                            <p>{movie.description}</p>
                        </td>
                        {i % 3 === 2}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Movies