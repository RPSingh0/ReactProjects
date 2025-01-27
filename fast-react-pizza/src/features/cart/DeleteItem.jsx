import Button from "../../ui/Button.jsx";
import {deleteItem} from "./cartSlice.js";
import {useDispatch} from "react-redux";

function DeleteItem({pizzaId}) {

    const dispatch = useDispatch();

    return (
        <Button type={"small"} onClick={() => dispatch(deleteItem(pizzaId))}>Delete</Button>
    );
}

export default DeleteItem;