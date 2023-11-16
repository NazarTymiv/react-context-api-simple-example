import { useContext } from "react";
import { NewContext } from "../App";

export default function Posts() {
    const { posts } = useContext(NewContext);

    return (
        <>
            {posts.map((post, index) => {
                return (
                    <div className="card" key={index}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                );
            })}
        </>
    );
}
