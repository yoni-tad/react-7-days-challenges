import { useEffect } from "react";
import { useState } from "react";
import Pagination from "./components/Pagination";
import Post from "./components/Post";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10;

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    };
    fetchPost();
  }, []);

  function handlePagination(pageNumber) {
    setCurrentPage(pageNumber)
  }

  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const currentPost = posts.slice(firstIndex, lastIndex);

  return (
    <div className="p-4">
      <Post loading={loading} posts={currentPost} />
      {!loading && (
        <Pagination
          length={posts.length}
          postPerPage={postPerPage}
          currentPage={currentPage}
          handlePagination={handlePagination}
        />
      )}
    </div>
  );
}
