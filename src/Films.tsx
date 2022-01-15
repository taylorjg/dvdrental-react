import { useEffect } from "react"
import { gql, useQuery } from "@apollo/client"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useToast } from "./useToast"

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

  const queryResult = useQuery(GQL_FILMS_QUERY)
  const films = queryResult.data?.film ?? []

  const toast = useToast()

  useEffect(() => {
    if (queryResult.loading) {
      toast.showInfo("Loading films...")
      return
    }
    if (queryResult.error) {
      toast.showError(queryResult.error.message)
      return
    }
    toast.clear()
  }, [queryResult]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Release Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {films.map((film: any) => (
              <TableRow key={film.film_id}>
                <TableCell>{film.title}</TableCell>
                <TableCell>{film.release_year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {toast.renderToast()}
    </>
  )
}

export default Films
