import React,{useEffect,useState} from 'react'
import axios from 'axios';
import './RowPost.css'



const RowPost = ({cat,title}) => {

    const [game,setGame] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
                params: {
                  category: cat
                },
                headers: {
                  'X-RapidAPI-Key': '90c1929974mshf67958d90909388p15570ejsna3614006fd20',
                  'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
              };
    
          try {
            const response = await axios.request(options);
            const games = response.data.slice(0, 20);
            console.log(games);
            setGame(games)
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);



  return (
    <div className='games mt-4' >
        <h4> {title} </h4>
        <div className='game d-flex overflow-x-scroll shadow'>

            {game.map((game)=>{
                return(
                    <div className='card-group m-2 shadow'>

                        <div key={game.id} className="card" style={{width: '300px',height:'400px'}}>
                            <img className="card-img-top " src={game.thumbnail} alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-title"> {game.title} </p>
                                <p className="card-text"> {game.platform} </p>
                                
                            </div>
                            <div class="card-footer d-flex">
                                <a href='#' className="btn">Get</a> 
                                <small className='text-white ml-3'>From: {game.developer}</small>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default RowPost
