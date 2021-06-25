function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div className='row'>
      <div className='col s12 m6'>
        <div id={id} className='card'>
          <div className='card-image'>
            {poster === 'N/A' ? (
              <img src='https://via.placeholder.com/192x284?text=Visit+Blogging.com+Now' />
            ) : (
              <img src={poster} />
            )}
          </div>
          <div className='card-content'>
            <span className='card-title'>{title}</span>
            <p>
              {year} <span className='right'>{type}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Movie };
