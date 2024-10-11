import PostPreview from "./PostPreview";
import PropTypes from "prop-types";

export default function RelatedPosts({ posts }) {

  const config = {
    container: "",
    Link: "",
    image: "rounded-md w-full object-cover",
    atl: "Article Thumbnail",
    height: 150,
    width: 150,
  };

  return (
    <div className="w-full flex justify-center py-10">
      <div className="flex gap-8 max-w-4xl">
        {posts.length !==0 ? (
          <>
            <div className="flex-1">
              <PostPreview postData={{ post: posts[0], config: config }} />
            </div>
            <div className="flex-1">
              <PostPreview postData={{ post: posts[1], config: config }} />
            </div>
          </>
        ) : (
          <div>Loading Related Posts....</div>
        )}
      </div>
    </div>
  );
  
}

RelatedPosts.propTypes = {
  posts: PropTypes.arrayOf(
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
};
