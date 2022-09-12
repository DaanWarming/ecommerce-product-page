import {useState} from "react"

import Image1 from "../Images/image-product-1.jpg"
import Image1Thumb from "../Images/image-product-1.jpg"
import Image2 from "../Images/image-product-2.jpg"
import Image2Thumb from "../Images/image-product-2.jpg"
import Image3 from "../Images/image-product-3.jpg"
import Image3Thumb from "../Images/image-product-3.jpg"
import Image4 from "../Images/image-product-4.jpg"
import Image4Thumb from "../Images/image-product-4.jpg"
import ArrowLeft from "../Images/icon-previous.svg"
import ArrowRight from "../Images/icon-next.svg"


function DisplayIndexImage() {
    const [index, setIndex] = useState(1)
    let imageIndex = "Image" + index

    function prevIndex() {
        if (index > 1) {
            setIndex(index - 1)
        }
    }

    function nextIndex() {
        if (index < 4) {
            setIndex(index + 1)
        }
    }

    

    return (
        <div>
            <div className="images-container-mobile">
                <img className="preview-image-mobile" src={
                        imageIndex === "Image1" ? Image1 
                        : imageIndex === "Image2" ? Image2 
                        : imageIndex === "Image3" ? Image3
                        : Image4
                } alt=""></img>
                <div className="arrow-container">
                    <div onClick={prevIndex} className="arrow-background">
                        <img src={ArrowLeft} onClick={prevIndex} className="arrow"></img>
                    </div>
                    <div onClick={nextIndex} className="arrow-background">
                        <img src={ArrowRight}  className="arrow"></img>
                    </div>
                </div>
            </div>
            <div className="images-container">
                <img className="preview-image" src={
                        imageIndex === "Image1" ? Image1 
                        : imageIndex === "Image2" ? Image2 
                        : imageIndex === "Image3" ? Image3
                        : Image4
                } alt=""></img>
                
                <div className="thumbnail-container">
                    <img className="thumbnail" src={Image1Thumb} alt="" onClick={() => setIndex(1)}></img>
                    <img className="thumbnail" src={Image2Thumb} alt="" onClick={() => setIndex(2)}></img>
                    <img className="thumbnail" src={Image3Thumb} alt="" onClick={() => setIndex(3)}></img>
                    <img className="thumbnail" src={Image4Thumb} alt="" onClick={() => setIndex(4)}></img>
                </div>
                
            </div>   
        </div>

    )
}

export default DisplayIndexImage