import React from 'react';
import { useParams } from 'react-router-dom';
import { getGameDetails, useGames } from './../useGames';
import Loading from './../Loading';

export default function GameDetails() {
  const { id } = useParams();
  const { data, isError, isLoading, error } = useGames('gameDetails', () => getGameDetails(id));

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <h2 className="text-center fw-bold text-danger">{error.message}</h2>;
  }

  return (<>
  <br />
  <br />
  <br />
  
  <br />
  <div className="game-details-container">
      <h2 className="fw-bold text-center">Game Details</h2>
      <br />
      <div className="row">
        <div className="col-md-4 text-center">
          <img src={data.thumbnail} alt={data.title} className="img-fluid rounded" />
        </div>
        <div className="col-md-8">
          <h3>Title: {data.title}</h3>
          <p>
            Category: <span className="badge badge-primary">{data.genre}</span>
          </p>
          <p>
            Platform: <span className="badge badge-primary">{data.platform}</span>
          </p>
          <p>
            Status: <span className="badge badge-primary">{data.status}</span>
          </p>
          <p>{data.description}</p>
          <a className="btn btn-primary" href={data.game_url} target="_blank" rel="noopener noreferrer">
            Show Game
          </a>
        </div>
      </div>
    </div>
  </>
    
    
  );
}
