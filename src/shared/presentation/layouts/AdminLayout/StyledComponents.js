import styled from "styled-components";

export const MainContainer = styled.div`
background-repeat: no-repeat;
    background-size: cover;
  background-image: ${(props) => `url(${props.backgroundImage})`};
  width:100%;
  height: 100vh ;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  >.container{
    text-align: center;
    background-color: rgba(51, 0, 51, .1);
    padding: 20px;
    border-radius: 5px;
  }

`;



export default {}