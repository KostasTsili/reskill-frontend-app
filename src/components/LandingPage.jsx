import { useState, useEffect } from "react";
import MainContent from "./MainContent";
import useFetchPosts from "../hooks/api/useFetchPosts";

export default function LandingPage() {
    const [postList, setPostList] = useState([]);
    const [threePosts, setThreePosts] = useState([]);
    const [readyToRender, setReadyToRender] = useState(false);

    const { data: posts, loading, error } = useFetchPosts({ endpoint: "http://localhost:3000/posts" });

    useEffect(() => {
        if (!loading && posts.length > 0) {
            randomizePosts(posts);
        }
    }, [posts, loading]);

    const randomizePosts = (posts) => {
        const rand = [];
        const uniqueIds = new Set();

        while (rand.length < 3 && rand.length < posts.length) {
            const randomPost = posts[Math.floor(Math.random() * posts.length)];
            if (!uniqueIds.has(randomPost.id)) {
                uniqueIds.add(randomPost.id);
                rand.push(randomPost);
            }
        }
        setThreePosts(rand);
        const filteredPosts = posts.filter(
            (post) => !uniqueIds.has(post.id)
        );
        setPostList(filteredPosts);
        setReadyToRender(true);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return !loading&& readyToRender ?(
        <div className="mx-10  dark:bg-black dark:text-white">
           <MainContent threePosts={threePosts} relatedListPosts={postList} />
        </div>):(<div>Loading...</div>
    );
}
