import React from "react";

function GalleryCard({pictureObj}) {

    

    return (
        <div className="gallery-item">
            <img src={pictureObj.img} alt={pictureObj.name}></img>
        </div>
    )
}

export default GalleryCard