import PropTypes from "prop-types";
import PostImageLink from "./Utils/PostImageLink";


export default function MainPostPreview ({post:{post_title,photo_url,post_body,id}}){

    const config = {
<<<<<<< HEAD
            container:"aspect-[2/1]",
            link:"",
            image:"rounded-md w-full object-cover",
=======
            container:"flex justify-center mb-4",
            link:"w-full",
            image:"w-full h-[650px] object-cover rounded-md",
>>>>>>> 1b0721efa6b4c3910715adee8b800f3fe91f5165
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
<<<<<<< HEAD
                <h2 className="text-lg text-gray-500 font-normal">{"S"+post_title}</h2>
=======
                <h2 className="text-md text-gray-400 font-normal">{"S"+post_title}</h2>
>>>>>>> 1b0721efa6b4c3910715adee8b800f3fe91f5165
            </span>
            <PostImageLink 
            data={{id,url:photo_url}} config={config}
            />
<<<<<<< HEAD
            <section className="mx-auto">
=======
            <section className="mx-40">
>>>>>>> 1b0721efa6b4c3910715adee8b800f3fe91f5165
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