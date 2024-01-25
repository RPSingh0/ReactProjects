import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.js";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: greenyellow;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: mediumpurple;
  color: white;
  cursor: pointer;
  margin: 20px;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

// To style the app component itself, the convention is to create a Styled{name} styled component and then wrap the jsx
const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
    return (
        <>
            <GlobalStyles/>
            <StyledApp>
                <H1>The Wild Oasis</H1>
                <Button onClick={() => alert("Check In")}>Check in</Button>
                <Button onClick={() => alert("Check Out")}>Check out</Button>
                <Input type={"number"} placeholder={"Number of guests"}></Input>
            </StyledApp>
        </>
    );
}

export default App;