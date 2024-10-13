import PostPreview from "./PostPreview";
import PropTypes from "prop-types";

export default function RelatedPosts({ posts }) {
  const config = {
    container: "aspect-[5/4]",
    Link: "",
    image: "rounded-md w-full object-cover",
    atl: "Article Thumbnail",
    height: 150,
    width: 150,
  };

  const fakeUsers = [
    "User1425X",
    "TheMan565",
    "C++God124",
    "TheOriginal2",
    "Nightstalker42",
    "PlanetOsZeus",
    "TruckFighter",
  ];

  return (
    <div className="w-full mx-auto">
      <h2 className="text-xl font-semibold text-black-500 pl-10 my-4">
        Other posts by {posts[0].post_userId ? fakeUsers[posts[0].post_userId] : "Unknown"}
      </h2>
      <div className="flex justify-center py-2">
        <div className="flex flex-col md:flex-row w-full gap-2">
          {posts.length !== 0 ? (
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
