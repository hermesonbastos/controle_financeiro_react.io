import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 100px;
  align-items: center;
  text-align: center;
  background: black;

  @media (max-width: 750px) {
    padding: 50px 100px;
  }
`;

export const Header = styled.h1`
  margin: 0 auto;
`;

export const Title = styled.div`
  margin: auto auto;
  color: #fff;

  @media (max-width: 750px) {
    position: relative;
    top: -15px;
  }
`