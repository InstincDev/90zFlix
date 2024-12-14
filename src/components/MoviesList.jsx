import React from "react"
import {movies} from "../movies"

function Movies() {

    return(
        <div className="content">
            <h3 name="year">🎥 From Blockbusters to Classics: Top Flix From 1990 to 1999!🎞️</h3>
            <table>
                <tbody>
                    {movies.map((movie, i) => (
                    <tr key={movie.year}>
                        <td className="movie-card">
                            <img src={movie.image} alt={movie.title} className="movie-img" />
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