import { useQuery } from 'react-query';
import  axios  from 'axios';

////////// Home //////////


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '71dd92dd10mshd176934c14aeb3fp1140d6jsne3175729878d',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

export function getGames(category){
    return axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options)
}

export function getGameDetails(id){
    return axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options)
	
}



export function useGames(key,fn){
    return useQuery(key,fn,{
        select:(data)=>data.data
    })
}
// 