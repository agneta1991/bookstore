import PropTypes from 'prop-types';

const IndividualBook = ({ selectedGenre, title }) => (
  <div className="book">
    <h3>{title}</h3>
    <p>
      Genre:
      {selectedGenre}
    </p>
    <button type="submit">Delete</button>
  </div>
);

IndividualBook.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default IndividualBook;
