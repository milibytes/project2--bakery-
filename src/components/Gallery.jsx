import React, { useState } from "react"
import { useLoaderData } from "react-router-dom"
import GalleryCard from "./GalleryCard"

function Gallery() {

    const {pictures} = useLoaderData()
    const [pictureState, setPictureState]= useState(pictures)
    const [newPicture, setNewPicture] = useState('')

    const handlePictures = (e) =>
    setNewPicture(e.target.value)


    const mappedPictures = pictureState.map(pictureObj => (
    <GalleryCard key={pictureObj.id} pictureObj={pictureObj} />
  ))

    function handleForm(e) {
        e.preventDefault()

        const OPTIONS = {
            method : "POST",
            headers : { 
            "Accept" : "application/json",
            "Content-type" : "application/json"
        },
        body: JSON.stringify({
            img: newPicture
        })
        }

        fetch('http://localhost:3000/pictures', OPTIONS)
        .then(res => res.json())
        .then(newPicture => setPictureState([newPicture, ...pictureState]))

        setNewPicture('');
        
    }    
    
 

    
    return (

        <div>
            <form className="newPictureForm" onSubmit={handleForm}>
                {/* <label htmlFor="Submit New Photo">Submit New Picture</label> */}
                <input type="text" name="newPicture" onChange={handlePictures} placeholder="Submit New Photo" value={newPicture}></input>
                <button>Submit</button>
            </form>
            
            
        <div className="gallery-container">
            {mappedPictures}
        </div>
        </div>
    )
}

export default Gallery