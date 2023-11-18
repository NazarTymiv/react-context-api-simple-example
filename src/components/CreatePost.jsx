import { useContext, useEffect, useState } from "react";
import { NewContext } from "../App";

const INITIAL_POST = {
    title: "",
    content: "",
};

export default function CreatePost() {
    const [post, setPost] = useState(INITIAL_POST);

    const { posts, setPosts } = useContext(NewContext);

    useEffect(() => {
        const localPosts = localStorage.getItem("posts");

        localPosts && setPost(JSON.parse(localPosts));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost({
            ...post,
            [name]: value,
        });

        localStorage.setItem(
            "posts",
            JSON.stringify({ ...post, [name]: value })
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPosts([...posts, post]);
        setPost(INITIAL_POST);
        localStorage.clear();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    value={post.title}
                ></input>
            </label>
            <br />
            <label>
                Content:
                <textarea
                    name="content"
                    onChange={handleChange}
                    value={post.content}
                    cols={50}
                    rows={5}
                ></textarea>
            </label>
            <br />
            <input type="submit" value="Post!"></input>
        </form>
    );
}
