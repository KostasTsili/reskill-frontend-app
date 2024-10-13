import { useParams } from "react-router-dom";
import useFetchPosts from "../hooks/api/useFetchPosts";



export default function SinglePostPage (){
    const {id:postId} = useParams();
    const {data:post,loading,error} = useFetchPosts({ endpoint: `http://localhost:3000/post/${postId}` });

    const fakeUsers = [
        "User1425X",
        "TheMan565",
        "C++God124",
        "TheOriginal2",
        "Nightstalker42",
        "PlanetOsZeus",
        "TruckFighter"
    ];

    if(loading) return <div>Loading Post...</div>;
    if(error) return <div>Error Loading post with id {postId} with error : {error.message}</div>

    const {
        id,
        post_userId,
        post_title,
        post_body,
        photo_url,
        photo_title
    } = post;

    return (
        <div 
        className="w-full flex flex-col sm:flex-row justify-center 
        py-10 space-y-6 
        sm:space-y-0 sm:space-x-8 px-6">
        <div className="w-full sm:w-1/2 lg:w-3/5 px-4">
        <article>
            <h1 className="text-3xl font-bold mb-4">{post_title}</h1>
            <h2 className="text-xl font-semibold text-gray-500 mb-4">Author : {post_userId?fakeUsers[post_userId]:"Unknown"}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{post_body}</p>
         </article>
        </div>
        <aside className="w-full sm:w-1/2 lg:w-2/5 flex justify-center px-4">
            <img className="rounded-md object-cover w-full h-auto max-w-full" src={photo_url} alt={photo_title} height={677} width={507}></img>
        </aside>
        </div>
    )
}