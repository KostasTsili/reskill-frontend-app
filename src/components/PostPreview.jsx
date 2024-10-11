import PostImageLink from "./Utils/PostImageLink";
import PropTypes from "prop-types";
import PostText from "./Utils/PostText";


export default function PostPreview({postData}) {

   
const {id,post_title,photo_thumbnailUrl,post_userId} = postData.post;



const {config} = postData;


    
    return (
        <>
            <div className="flex flex-col p-2">
                 <PostImageLink data={{id,url:photo_thumbnailUrl}} config={config}/>
                 <PostText post_title={post_title} post_userId={post_userId} config={config} />
            </div>
        </>
    );
}


PostPreview.propTypes={
    postData:PropTypes.shape({
        post:PropTypes.shape({
            post_userId:PropTypes.number,
            id:PropTypes.number,
            post_title:PropTypes.string,
            post_body:PropTypes.string,
            photo_albumId:PropTypes.number,
            photo_title:PropTypes.string,
            photo_thumbnailUrl:PropTypes.string,
            }).isRequired,
            config:PropTypes.shape({
                container:PropTypes.string,
                Link:PropTypes.string,
                image:PropTypes.string,
                atl:PropTypes.string,
                height:PropTypes.number,
                width:PropTypes.number,
            }).isRequired
    }).isRequired
}
