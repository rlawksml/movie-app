import { useEffect, useState } from "react"
import styled from "styled-components"

const Search = ({GetInputGenre}) => {

  const [value , setValue ]= useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    GetInputGenre(value)
    setValue('')
  }


  return(
    <>
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled value={value} onChange={handleChange} placeholder="장르 검색"></InputStyled>
      <ButtonStyeld>
        검색
      </ButtonStyeld>
    </FormStyled>
    </>
  )
}

const FormStyled = styled.form`
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: rgb(84, 43, 114, 0.6);
  padding: 15px;
  box-sizing: border-box;
`

const InputStyled = styled.input`
  box-sizing: border-box;
  border: 3px solid rgb(127, 85, 157);
  color: rgb(127, 85, 157);
  padding: 10px 20px;
  flex: 0 1 auto;
  width: 50% !important;
  border-radius: 10px 0 0 0;
  outline: none;
  &::placeholder{
    color: rgb(127, 85, 157);
  }
`

const ButtonStyeld = styled.button`
  border: none;
  box-sizing: border-box;
  background-color: rgb(127, 85, 157);
  border-radius: 0 10px 10px 0;
  padding: 10px 20px;

  font-size: 16px;
  color: #fff;
  &:hover{
   cursor: pointer;
   opacity: 0.7;
   color: rgb(166, 131, 192);
  }
`


export default Search

