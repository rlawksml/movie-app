import Search from "./Search"
import Detail from "./Detail"
import Contents from "./Contents"
import Header from './Header'

import { useEffect, useState } from "react"

const Home = () => {

  const API_URL = 'https://yts.mx/api/v2/list_movies.json'

  const [movies, setMovise ] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [curGenre, setCurGenre] = useState('')

  const getMoive = async(data) => {
    
    const params = data ? `?genre=${data}` : "";
    const json = await (await fetch(`${API_URL}${params}`)).json()

    setMovise(json.data.movies)
    setCurGenre(data)
    setIsLoading(true)
  }

  useEffect(() => {
    getMoive()
  } ,[])



  return(
    <>
    <Header></Header>
      <Search GetInputGenre={getMoive}></Search>
      <Detail ></Detail>
      <Contents movieData={movies} isLoading={isLoading}  curGenre={curGenre}/>
    </>
  )
}

export default Home