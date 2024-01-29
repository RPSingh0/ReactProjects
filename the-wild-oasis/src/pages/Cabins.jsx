import Row from "../ui/Row";
import Heading from "../ui/Heading.jsx";
import CabinTable from "../features/cabins/CabinTable.jsx";
import AddCabin from "../features/cabins/AddCabin.jsx";

function Cabins() {

    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">All cabins</Heading>
                <p>Filter / Sort</p>
            </Row>
            <Row>
                <CabinTable/>
                <AddCabin/>
            </Row>
        </>
    );
}

export default Cabins;
