import PropTypes from "prop-types";
import PostImageLink from "./Utils/PostImageLink";


export default function MainPostPreview ({post:{post_title,photo_url,post_body,id}}){

    const config = {
            container:"aspect-[2/1]",
            link:"",
            image:"rounded-md w-full object-cover",
            alt:`A picture for ${post_title}`,
            height:600,
            width:600,
            displayTitle:true,
            displayBody:true,
            displayAuthor:true,
    }

    return (
      <div className="flex flex-col items-center">
          <span className="flex flex-col  max-w-full w-full p-6 rounded-md">
          <span className="text-center mb-4 me-auto">
                <h2 className="text-lg text-gray-500 font-normal">{"S"+post_title}</h2>
            </span>
            <PostImageLink 
            data={{id,url:photo_url}} config={config}
            />
            <section className="mx-auto">
                <p className="font-medium text-xl">{post_body}</p>
            </section>
        </span>
      </div>
    );
}

MainPostPreview.propTypes = {
    post:PropTypes.shape({
        post_title: PropTypes.string,
        photo_url:PropTypes.string,
        post_body:PropTypes.string,
        id:PropTypes.number,
    }).isRequired
}