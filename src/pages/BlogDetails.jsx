import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  const params = useParams();
  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error...</p>;
  if (!data) return <p>No hay datos...</p>;

  return (
    <>
      <h1>
        {data.id} - {data.title}
      </h1>
      <p>{data.body}</p>
      <Link to={"/blog"}>Voler al blog</Link>
    </>
  );
};

export default BlogDetails;
