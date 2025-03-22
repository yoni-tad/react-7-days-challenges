export default function Post(props) {
  return (
    <>
      {props.loading && "Loading"}{" "}
      {props.posts.map((post, index) => {
        return (
          <div key={index} className="p-4 bg-gray-100 mb-4 rounded-lg">
            <h1>{post.id}. {post.title}</h1>
          </div>
        );
      })}
    </>
  );
}
