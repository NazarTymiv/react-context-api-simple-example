import { createContext, useState } from "react";
import CreatePost from "./components/CreatePost.jsx";
import Header from "./components/Header.jsx";
import Posts from "./components/Posts.jsx";
import "./App.css";

const NewContext = createContext();

function App() {
    const [posts, setPosts] = useState([
        { title: "Hello, world!", content: "React context is great :)" },
        { title: "But...", content: "It's a little confusing at first!" },
    ]);

    return (
        <NewContext.Provider
            value={{
                appName: "Next-gen Social Media",
                posts: posts,
                setPosts: setPosts,
            }}
        >
            <Header />
            <CreatePost />
            <Posts />
        </NewContext.Provider>
    );
}

export { App, NewContext };
