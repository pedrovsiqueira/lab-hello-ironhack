import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 700px;
  background-color: #202535;
  margin-bottom: 50px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px 50px;
  width: 700px;

  h1 {
    font-size: 80px;
  }

  p {
    font-size: 20px;
    width: 300px;
    margin-bottom: 40px;
  }

  button {
    font-size: 20px;
    font-weight: bold;
    padding: 30px 30px;
    width: 170px;
    border-radius: 5px;
  }
`;
