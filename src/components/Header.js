import styled from "styled-components"

const Header = () => {

  return(
  <>

    <HeaderContainer>
      <HeaderTitle>
        Best Movie List
      </HeaderTitle>
    
    </HeaderContainer>
  </>
  )
}

const HeaderContainer = styled.div`
  border: 1px solid rgb(84, 43, 114);
  height: 100%;
  box-sizing: border-box;
  background-color: rgb(84, 43, 114);
`

const HeaderTitle = styled.h2`
  text-align: center;
  color: palevioletred;
  font-size: 30px;
`


export default Header