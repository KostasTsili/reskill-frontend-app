import { Link } from "react-router-dom";
import PropTypes from "prop-types";


export default function PostImageLink({data,config}){

    const {id, url} = data;
    const {container, link, image,alt,height,width} =config;

 

    return(
        <span className={container}>
        <Link className={link} to={`/post/${id}`}>
            <img 
            className={image} 
            src={url} 
            alt={alt} 
            height={height}
            width={width}
            />
        </Link>
    </span>
    )
}

PostImageLink.propTypes={
    data : PropTypes.object,
    config: PropTypes.object
}