import React, {useState} from "react"
import {movies} from "../movies"
import {musicPlayer} from "../musicPlayer";

function Movies() {
    // Manage the currently playing audio
  const handleMouseMove = (music) => {
    musicPlayer(music); // Start playing music when the mouse moves
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
                            onMouseEnter={()=>handleMouseMove(movie.music)}
                            // Stop music when mouse leaves
                            onMouseLeave={handleMouseMove}/>
                             
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