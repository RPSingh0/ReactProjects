import {Link} from 'react-router-dom';
import LinkButton from "../../ui/LinkButton.jsx";
import Button from "../../ui/Button.jsx";
import CartItem from "./CartItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import {clearCart, getCart} from "./cartSlice.js";
import EmptyCart from "./EmptyCart.jsx";

const fakeCart = [
    {
        pizzaId: 12,
        name: 'Mediterranean',
        quantity: 2,
        unitPrice: 16,
        totalPrice: 32,
    },
    {
        pizzaId: 6,
        name: 'Vegetale',
        quantity: 1,
        unitPrice: 13,
        totalPrice: 13,
    },
    {
        pizzaId: 11,
        name: 'Spinach and Mushroom',
        quantity: 1,
        unitPrice: 15,
        totalPrice: 15,
    },
];

function Cart() {
    // const cart = fakeCart;
    const username = useSelector(state => state.user.username);
    const cart = useSelector(getCart);
    const dispatch = useDispatch();

    if (!cart.length) return <EmptyCart/>

    return (
        <div className={"px-4 py-3"}>
            <LinkButton to="/menu">&larr; Back to menu</LinkButton>

            <h2 className={"mt-7 text-xl font-semibold"}>Your cart, {username}</h2>

            <ul className={"divide-y divide-stone-200 border-b mt-3"}>
                {cart.map(item => <CartItem item={item} key={item.pizzaId}/>)}
            </ul>

            <div className={"mt-6 space-x-2"}>
                <Button to="/order/new" type={"primary"}>Order pizzas</Button>
                <Button type={"secondary"} onClick={() => dispatch(clearCart())}>Clear cart</Button>
            </div>
        </div>
    );
}

export default Cart;
