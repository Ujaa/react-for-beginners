import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, coverImage, genres, summary }) {
  return (
    <Link to={`/detail/${id}`}>
      <div>
        <h2>{title}</h2>
        <img src={coverImage} alt={title} />

        <ul>
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
        <p>{summary}</p>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
};

export default Movie;
