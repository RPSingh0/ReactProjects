import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.js";
import Button from "./ui/Button.jsx";
import Input from "./ui/Input.jsx";
import Heading from "./ui/Header.jsx";
import Row from "./ui/Row.jsx";

// To style the app component itself, the convention is to create a Styled{name} styled component and then wrap the jsx
const StyledApp = styled.div`
  //background-color: orangered;
  padding: 20px;
`;

function App() {
    return (
        <>
            <GlobalStyles/>
            <StyledApp>
                <Row>
                    <Row type={"horizontal"}>
                        <Heading as={"h1"}>The Wild Oasis</Heading>
                        <div>
                            <Heading as={"h2"}>Check in and out</Heading>
                            <Button
                                variation={"primary"}
                                size={"medium"}
                                onClick={() => alert("Check In")}>
                                Check in
                            </Button>
                            <Button
                                variation={"secondary"}
                                size={"small"}
                                onClick={() => alert("Check Out")}>
                                Check out
                            </Button>
                        </div>
                    </Row>
                    <Row>
                        <Heading as={"h3"}>Form</Heading>
                        <form>
                            <Input type={"number"} placeholder={"Number of guests"}></Input>
                            <Input type={"number"} placeholder={"Number of guests"}></Input>
                        </form>
                    </Row>
                </Row>
            </StyledApp>
        </>
    );
}

export default App;