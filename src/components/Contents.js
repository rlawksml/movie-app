import styled from "styled-components"


const Contents = ({movieData, curGenre, isLoading}) => {
  return(
  <>
    {
      isLoading ?
      <ContainerStyled>
      <MovieList>
      {
        movieData.map(movie => 
          <li key={movie.id}>
            <img src={movie.medium_cover_image}/>
            <MovieGenres>
                {movie.genres.map((genre,index) => <li key={index}>{genre}</li>)}
            </MovieGenres>

            <DescContainer>
              <h2>{movie.title}</h2>
              <MovieDate>{movie.date_uploaded.substr(0,10)}</MovieDate>

              <MovieDesc>
              {movie.description_full.length > 200 ? `${movie.description_full.substr(0, 200)}...` : movie.description_full}
              </MovieDesc>
            </DescContainer>
          </li>
        )
      }
      </MovieList>
      </ ContainerStyled> : `${isLoading + curGenre} 대기중`
      }

  </>
  )
}

const MovieDesc = styled.p`
  color: #ddd;
`

const MovieGenres = styled.ul`
  width: 100%;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  li {
    text-align: center;
    margin: 5px !important;
    width: auto !important;
    padding: 10px 5px !important;
    flex: 1 1 35% !important;
    font-size: 14px;
    border: none !important;
    background-color: rgb(166, 131, 192) !important;
    color: #fff;
  }
`

const DescContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  h2{
    color: palevioletred;
    flex: 1 0 100%;
    margin: 0;
  }
`
const MovieDate = styled.p`
  font-size: 12px;
  margin: 0;
  padding-left: 5px;
  color: rgb(166,131,192);
  /* color: rgb(166,131,192); */
  // 166 131 192
`

const MovieList = styled.ul`
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  & li{
    display: flex;
    flex-direction: column;
    list-style: none;
    border: 1px solid #ddd;
    background-color: rgb(127, 85, 157);
    border-radius: 6px;
    flex: 0 1 20%;
    margin: 30px 10px;
    word-break: break-all;
    padding: 20px;
    &:hover{
      opacity: 0.7;
      cursor: pointer;
    }
    & img{
      border-radius: 10px 0 10px 0;
      /* width: 150px;
      height: 150px; */
      float: left;
      clear: both;
      transform: translate(-30px, -30px);
    }
  }
`

const ContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 3px solid rgb(84, 43, 114, 0.6);;
`
// 48 15 71
// 84 43 114
// 166 131 192
// 127 85 157


export default Contents