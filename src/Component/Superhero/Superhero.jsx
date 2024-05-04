import React from 'react'
import { getGames, useGames } from '../../useGames';
import Loading from './../../Loading';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Superhero() {
  let {data,isError,isLoading,error} = useGames('Superhero',()=> getGames('superhero'))
  console.log(data);
  if(isError){
    return <h2 className='text-center fw-bold text-danger'>{error.message}</h2>
  }
  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <>
    <Helmet>
        <title>Super Hero</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="row g-4 p-4">
        {" "}
        {data.map((game) => (
          <div className="  col-md-3  cursor-pointer game" key={game.id} >
            
            <Link to={`gameDetails/${game.id}`}>
              <img src={game.thumbnail} className="w-100 pb-3" alt="" />
              <div className="d-flex justify-content-between pb-3">
                <h2 className="h5 py-1">{game.title}</h2>
                <button className="btn m-2">Free</button>
              </div>
              <p
                className=""
                title={game.short_description || "No description available"}
              >
                {typeof game.short_description === "string"
                  ? game.short_description.split(" ").slice(0, 10).join(" ")
                  : "No description available"}
              </p>
              <div className="box d-flex justify-content-between ">
                <span className="badge badge-color">{game.genre}</span>
                <span className="badge badge-color">{game.platform}</span>
              </div>
            </Link>
          </div>
        ))}{" "}
      </div>
  </>
);
}
