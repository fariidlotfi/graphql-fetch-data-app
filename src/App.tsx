import { useQuery, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";

interface IPost {
  id: number;
  title: string;
}

const QUERY = gql`
  query ($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
`;

function App() {
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(5);
  const countArr: number[] = [5, 10, 15, 20];

  const { data, error, loading } = useQuery(QUERY, {
    variables: {
      options: {
        paginate: {
          page: page,
          limit: count,
        },
      },
    },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <p>Error: {error.message}</p>;

  const allPosts: IPost[] = data?.posts?.data || [];
  const totalCount = data?.posts?.meta?.totalCount || 0;
  const allPages: number = Math.ceil(totalCount / count);

  console.log(data);

  const handleNextPage = () =>
    setPage((prevState) => (prevState < allPages ? prevState + 1 : allPages));

  const handlePrevPage = () =>
    setPage((prevState) => (prevState > 1 ? prevState - 1 : 1));

  const handleCount = (e: ChangeEvent<HTMLSelectElement>) =>
    setCount(Number(e.target.value));

  return (
    <main>
      <h1>Posts</h1>

      <span>
        Page: {page} / {allPages}
      </span>

      <div className={"page-count"}>
        <p>Posts per Page:</p>
        <select onChange={handleCount} value={count}>
          {countArr.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </div>

      <ul>
        {allPosts.map(({ id, title }) => (
          <li key={id}>{`${id} - ${title}`}</li>
        ))}
      </ul>

      <button onClick={handleNextPage} disabled={page >= allPages}>
        Next Page
      </button>

      <button onClick={handlePrevPage} disabled={page <= 1}>
        Prev Page
      </button>
    </main>
  );
}

export default App;
