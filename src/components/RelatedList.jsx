import PostPreview from "./PostPreview";
import {useState,useEffect} from "react";
import PropTypes from "prop-types";


export default  function  RelatedList ({posts}){
 
    const [postsList, setPostList] = useState([]);
    const [visiblePosts, setVisiblePosts] = useState([]);

    useEffect(()=>{
     
      //initial data
      setPostList(posts);
      setVisiblePosts(posts.slice(0,9));
      
    },[])


    const handleMorePosts = () =>{
      const visiblePostsCount = visiblePosts.length+9;
      const moreArticles = postsList.slice(0,visiblePostsCount);
      setVisiblePosts(moreArticles);
    }

    const config = {
      container:"flex-shrink-0",
      Link:"",
      image:"rounded-md w-full object-cover",
      atl:"Article Thumbnail",
      height:150,
      width:150,
      displayTitle:true,
      displayAuthor:true,
   }


    return (
       <div className={
        `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
         gap-y-12 gap-x-10 w-auto mx-10 my-12 `
       }>
          {visiblePosts.map((item)=>(
            <div className="w-full" key={item?.id} >
              <PostPreview
                  postData={{post:item,config:config}}
                        />
              </div>
          )) }
        <div>
          <button className="hover:text-red-600" onClick={handleMorePosts}>
            {visiblePosts.length===postsList.length?"You are all caught up":"Show More..."}
          </button>
        </div>
       </div>
    )
}


RelatedList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      photo_albumId: PropTypes.number,
      photo_title: PropTypes.string,
      photo_url: PropTypes.string,
      post_body: PropTypes.string,
      post_title: PropTypes.string,
      post_userId: PropTypes.number,
    })
  ).isRequired,
};