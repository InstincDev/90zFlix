import React, {useState} from "react"


function Movies() {
    const [thumbnails, setThumbnails] = useState([
        {id: 1, title: "Title 1", img: "placeholder.jpg"},
        {id: 2, title: "Title 2", img: "placeholder.jpg"},
        {id: 3, title: "Title 3", img: "placeholder.jpg"},
        {id: 4, title: "Title 4", img: "placeholder.jpg"},
        {id: 5, title: "Title 5", img: "placeholder.jpg"},
        {id: 6, title: "Title 6", img: "placeholder.jpg"},
        {id: 7, title: "Title 7", img: "placeholder.jpg"},
        {id: 8, title: "Title 8", img: "placeholder.jpg"},
        {id: 9, title: "Title 9", img: "placeholder.jpg"},
        {id: 10, title: "Title 10", img: "placeholder.jpg"},
    ])

    return(
        <div className="content">
            <table>
                <tbody>
                    {thumbnails.map((thumb, index) => (
                    <tr key={thumb.id}>
                        <td>
                            <img src="{thumb.img}" alt="{thumb.title}" />
                            <p>{thumb.title}</p>
                        </td>
                        {index % 3 === 2}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Movies