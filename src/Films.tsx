import { gql, useQuery } from "@apollo/client"

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
    return <div>{films.error}</div>
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Release Year</th>
        </tr>
      </thead>
      <tbody>
        {films.data.film.map((film: any) => (
          <tr key={film.film_id}>
            <td>{film.title}</td>
            <td>{film.release_year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Films
