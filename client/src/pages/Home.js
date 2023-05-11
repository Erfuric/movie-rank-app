import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache"
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>My Movie List</h1>
      <ul>
        {data.movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img src={movie.poster} alt={movie.title} />
              <p>{movie.title}</p>
              <p>{movie.year}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;