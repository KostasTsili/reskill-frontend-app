import MainPostPreview from "./MainPostPreview";
import RelatedPosts from "./RelatedPosts";
import PropTypes from "prop-types";
import RelatedList from "./RelatedList";

export default function MainContent({ threePosts, relatedListPosts}) {
  
  const relatedPosts = [threePosts[1], threePosts[2]];
  const relatedList = relatedListPosts;

  return (
    <div className="w-full mx-auto px-4">
      <h1 className="font-bold text-6xl pt-8 text-left">Posts List</h1>
      {threePosts.length > 0 ? (
        <MainPostPreview id="main-post" post={threePosts[0]} />
      ) : (
        <div>Loading....</div>
      )}
      <RelatedPosts posts={relatedPosts} />
      <RelatedList id="posts-list" posts={relatedList}/>
    </div>
    
  );
}


MainContent.propTypes = {
  threePosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      photo_albumId: PropTypes.number,
      photo_title: PropTypes.string,
      photo_url: PropTypes.string,
      post_body: PropTypes.string,
      post_title: PropTypes.string,
      post_userId: PropTypes.number,
    })
  ).isRequired,
  relatedListPosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      photo_albumId: PropTypes.number,
      photo_title: PropTypes.string,
      photo_url: PropTypes.string,
      post_body: PropTypes.string,
      post_title: PropTypes.string,
      post_userId: PropTypes.number,
    })
  ).isRequired
};
