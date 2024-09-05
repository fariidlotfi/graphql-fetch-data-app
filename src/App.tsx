import { useQuery, gql } from "@apollo/client";
import { ChangeEvent, useState, MouseEvent } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TablePagination } from "@mui/material";

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
  const [page, setPage] = useState<number>(0);
  const [count, setCount] = useState<number>(5);
  const countArr: number[] = [5, 10, 15, 20];

  const { data, error, loading } = useQuery(QUERY, {
    variables: {
      options: {
        paginate: {
          page: page + 1,
          limit: count,
        },
      },
    },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <p>Error: {error.message}</p>;

  const allPosts: IPost[] = data?.posts?.data || [];
  const totalCount: number = data?.posts?.meta?.totalCount || 0;
  const allPages: number = Math.ceil(totalCount / count);

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setCount(parseInt(event.target.value));
  };

  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  return (
    <main>
      <h1>Posts</h1>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width={10}>ID</TableCell>
              <TableCell align={"left"}>Title</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {allPosts.map(({ id, title }) => (
              <TableRow key={id}>
                <TableCell>{id}</TableCell>
                <TableCell>{title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        sx={{ color: "whitesmoke" }}
        component="div"
        count={count * allPages}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={count}
        rowsPerPageOptions={countArr}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </main>
  );
}

export default App;
