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
        //I take a random post, then I find two more related posts using the post_userId.
        const randomPost = posts[Math.floor(Math.random()* posts.length)];
        rand.push(randomPost);
        const selectedUser = rand[0].post_userId;

        while (rand.length < 3 && rand.length < posts.length) {
            const tempPost = posts[Math.floor(Math.random() * posts.length)];
            if (!uniqueIds.has(tempPost.id) && tempPost.post_userId === selectedUser ) {
                uniqueIds.add(tempPost.id);
                rand.push(tempPost);
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
        <div className="max-w-max mx-auto  dark:bg-black dark:text-white">
           <MainContent threePosts={threePosts} relatedListPosts={postList} />
        </div>):(<div>Loading...</div>
    );
}
