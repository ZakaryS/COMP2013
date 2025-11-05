import { useEffect, useState } from "react";
import PostForm from "./PostForm";
import PostsContainer from "./PostsContainer";

export default function FakeApiApp() {
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  useEffect(() => { fetchPost(); }, []);

  const fetchPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const fetchPosts = await response.json();
    console.log(fetchPosts);
    setData(fetchPosts);
    setIsLoading(false);
  }

  const handleOnChange = (e) => {
    setNewPost((prevPost) => {
        return {
            ...prevPost,
            [e.target.name]: e.target.value,
        };
    });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (newPost.title === "" && newPost.body === "") {
        alert("Please add a title and body first before posting!");
        return;
    } else if (newPost.title === "") {
        alert("Please add a title first before posting!");
        return;
    } else if (newPost.body === "") {
        alert("Please add a body first before posting!");
        return;
    } else {
        setData((prevPosts) => [newPost, ...prevPosts] );
        setNewPost({ title: "", body: "" });
    }
  }

  return (
    <div>
        <h1>Fake API App</h1>
        <PostForm 
        newPost={newPost}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        />
        {loading ? <p>Loading Page</p> : <PostsContainer posts={data}/>}
    </div>
  )
}