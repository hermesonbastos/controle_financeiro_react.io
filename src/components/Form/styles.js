import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  box-shadow: 0px 0px 5px #d4d4d4;
  width: 98%;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
  gap: 10px;

  @media (max-width: 750px) {
    display: grid;
    width: 22rem;
    padding-block: 30px;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin: 6px 5px;
`;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-left: 20px;
    accent-color: black;
    margin-top: 0;
  }
  
  @media (max-width: 750px) {
    margin: 10px;
  }
`;

export const Button = styled.button`
  padding-inline: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: ${(props) => (props.color ? props.color : "#01da47")};
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 750px) {
    justify-self: center;
    padding: 10px 10px;
    margin-top: 5px;
    width: 10em;
  }
`;
