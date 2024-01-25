import styled, {css} from "styled-components";

const Row = styled.div`
  display: flex;

  ${props => props.type === 'horizontal' && css`
    justify-content: space-between;
    align-items: center;
  `}

  ${props => props.type === 'vertical' && css`
    flex-direction: column;
    gap: 1.6rem;
  `}
`;

// if we want to set the default value, this way the component will change
// from: <Row type="vertical"></Row> to: <Row></Row>
Row.defaultProps = {
    type: "vertical",
}

export default Row;