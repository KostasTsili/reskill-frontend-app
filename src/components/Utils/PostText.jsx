import PropTypes from "prop-types";

export default function PostText({ post_title, post_userId, config }) {
    const { displayTitle, displayAuthor } = config;
    const fakeUsers = [
        "User1425X",
        "TheMan565",
        "C++God124",
        "TheOriginal2",
        "Nightstalker42",
        "PlanetOsZeus",
        "TruckFighter"
    ];

    return (

        (displayTitle || displayAuthor) ? (
            <section>
                {displayTitle && (
                    <h3 className="text-lg font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
                        {post_title}
                    </h3>
                )}
                {displayAuthor && (
                    <h3 className="text-sm text-gray-600 font-semibold">
                        Author: {fakeUsers[post_userId] ? fakeUsers[post_userId] : "Unknown"}
                    </h3>
                )}
            </section>
        ) : null
    );
}

PostText.propTypes={
    post_title:PropTypes.string,
    post_userId:PropTypes.number,
    config:PropTypes.shape({
      container:PropTypes.string,
      Link:PropTypes.string,
      image:PropTypes.string,
      atl:PropTypes.string,
      height:PropTypes.number,
      width:PropTypes.number,
      displayTitle:PropTypes.bool,
      displayAuthor:PropTypes.bool,
    })
}