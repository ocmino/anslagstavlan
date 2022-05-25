import styled from "styled-components";
import {useNavigate} from 'react-router-dom';

const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593"
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457"
  }
};

const ButtonBack = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

ButtonBack.defaultProps = {
  theme: "blue"
};




export default function App() {

    const Navigate = useNavigate();
    const NavigateHome = () => {
    //this is so the user returns back to the same page after clicking the send button
    Navigate('/pages/anslagstavlan');
  }; 

  return (
    <>
      <div>
        <ButtonBack onClick={NavigateHome}>Gå tillbaka</ButtonBack> 
      </div>
    </>
  );
}
