import styled from 'styled-components'

export const Cont = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px;
  align-items: center;
`

export const RegImg = styled.img`
  height: 80vh;
  width: 40vw;
  margin: 20px;
  border: 3px solid blue;
`

export const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40vw;
  height: 80vh;
  padding-left: 15px;
  border: 2px solid red;
`
export const RegHeading = styled.h1`
  font-size: 40px;
  color: #334155;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 3px dashed brown;
  width: 60%;
`
export const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  color: #475569;
`
export const Input = styled.input`
  height: 40px;
  width: 85%;
  padding-left: 7px;
  color: #7b8794;
  margin-top: 10px;
  margin-bottom: 20px;
`
export const Select = styled.select`
  height: 40px;
  width: 85%;
  font-size: 14px;
  cursor: pointer;
  padding-left: 7px;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const Option = styled.option`
  font-size: 20px;
`
