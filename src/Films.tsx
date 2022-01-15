import { gql, useQuery } from "@apollo/client"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

const GQL_FILMS_QUERY = gql`
  query Films {
    film {
      film_id
      title
      release_year
    }
  }
`

const Films = () => {

  const films = useQuery(GQL_FILMS_QUERY)

  if (films.loading) {
    return <div>Loading films...</div>
  }

  if (films.error) {
    return <div>ERROR: {films.error.message}</div>
  }

  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Release Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {films.data.film.map((film: any) => (
            <TableRow key={film.film_id}>
              <TableCell>{film.title}</TableCell>
              <TableCell>{film.release_year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Films
