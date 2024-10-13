import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

export default function PostImageLink({data,config}){

    const fallbackImage = "../../assets/error.jpg"

    const {id, url} = data;
    const {container, link, image,alt,height,width} =config;
    const [isLoaded,setIsLoaded] = useState(false);
    const [hasError,setHasError] = useState(false);

    const hadnleImageLoad = () =>{
        setIsLoaded(true);
    }
    const hadnleImageΕrror = () =>{
        setHasError(true);
    }
 

    return(
        <div className={container}>
            {!isLoaded && !hasError && <div>Loading Image...</div>}
            {hasError && <img src="../../assets/error.jpg" alt="image failed to load" className="object-cover"/>}
        <Link className={link} to={`/post/${id}`}>
            <img 
            className={`${image} h-3/4 w-full`} 
            height={height}
            width={width}
            src={url} 
            alt={alt} 
            style={{display: isLoaded? "block":"none"}}
            onLoad={hadnleImageLoad}
            onError={hadnleImageΕrror}
            
            />
        </Link>
    </div>
    )
}

PostImageLink.propTypes={
    data : PropTypes.object,
    config: PropTypes.object
}