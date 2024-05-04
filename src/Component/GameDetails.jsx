import React from 'react'
import { useParams } from 'react-router-dom'
import { getGameDetails, useGames } from './../useGames';
import Loading from './../Loading';

export default function GameDetails() {
    let {id} = useParams()
    let{data,isError,isLoading,error} = useGames('gameDetails',()=>getGameDetails(id))
    console.log(data);
    
    if(isLoading){
        return <Loading></Loading>
    }
    if(isError){
        return   <h2 className="text-center fw-bold text-danger">{error.message}</h2>;
    }
    
  return (<>
  <br />
  <br />
  <br />
  <br />
  <br />
   <div className='row detailes'>
    <h2 className='fw-bold'> Game Details </h2>
        <div className="col-md-4">
            <img src={data.thumbnail} alt="" />
        </div>
        <div className="col-md-8">
            <h3>Title: {data.title}</h3>
            <p>Category: <span className='bg-primary p-1 rounded-3'>{data.genre}</span> </p>
            <p>Platform: <span className='bg-primary p-1 rounded-3'>{data.platform}</span> </p>
            <p>Status: <span className='bg-primary p-1 rounded-3'>{data.status}</span> </p>
            <p>{data.description}</p>
            <a className='btn' href={data.game_url} target='blank'>Show Game</a>
            
        </div>
    </div>
  </>
   
  )
}
