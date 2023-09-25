import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import axios, { CanceledError } from "axios";
interface Posts {
  // userId: number;
  id: number;
  title: string;
  body: string;
}
const App = () => {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [error, setError] = useState<string | null>("");
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get<Posts[]>("https://jsonplaceholder.typicode.com/posts", {
        signal: controller.signal,
      })
      .then((res) => {
        setPosts(res.data);
        setError(null);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);
  return (
    <div>
      <div className="flex flex-wrap sm:flex-row flex-col justify-center gap-10 items-center">
        {error && <h1 className="text-red-500">{error}</h1>}
        {posts.map((posts) => {
          return (
            <div key={posts.id}>
              <div className="sm:max-w-[15vw] max-w-[90%] sm:min-h-[15vw] border p-3 flex flex-col justify-between">
                <h1 className="font-extrabold">Id: {posts.id}</h1>
                <h1 className="font-semibold">Title: {posts.title}</h1>
                <p>Body: {posts.body}</p>
                <button className="py-2 px-3 border-red-600 border text-red-600 hover:bg-red-600 hover:text-white  rounded-lg ">
                  Delete{" "}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
