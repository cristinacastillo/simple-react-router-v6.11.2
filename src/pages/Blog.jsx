
import { useFetch } from "../hooks/useFetch";
import { Link, useSearchParams } from "react-router-dom";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  /* useEffect(() => {
    setSearchParams({filter: 'hola'})
  }, [searchParams]); */

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error...</p>;
  if (!data) return <p>No hay datos...</p>;

  const handleChange = (e) => {
    let filter = e.target.value;

    if (filter) {
      setSearchParams({ filter: filter });
    } else {
      setSearchParams({});
    }
    /*  console.log(e.target.value);
    console.log("change"); */
  };

  return (
    <>
      <h1>Blog</h1>

      <input
        type="text"
        name="filter"
        onChange={handleChange}
        value={searchParams.get("filter") || ""}
        className="form-control input-group my-3"
      />

      <ul className="list-group">
        {data
          .filter((item) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;

            let name = item.title.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })

          .map((item) => (
            <li key={item.id}>
              <Link to={`/blog/${item.id}`} className="list-group-item">
                {item.id} - {item.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Blog;
