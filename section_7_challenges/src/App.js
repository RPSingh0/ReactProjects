import {useState} from "react";

export default function App() {

    const [price, setPrice] = useState(0);
    const [myTip, setMyTip] = useState(0);
    const [friendTip, setFriendTip] = useState(0);

    const averageTip = price * ((myTip + friendTip) / (2 * 100));

    function reset() {
        setPrice(0);
        setMyTip(0);
        setFriendTip(0);
    }

    return (
        <div>
            <BillPrice price={price} setPrice={setPrice}/>
            <TipInputs tip={myTip} setTip={setMyTip}>
                <p>How did you like the service ?</p>
            </TipInputs>
            <TipInputs tip={friendTip} setTip={setFriendTip}>
                <p>How did your friend like the service ?</p>
            </TipInputs>
            <p>You pay: ${price + averageTip} (${price} + ${averageTip} tip)</p>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

function BillPrice({price, setPrice}) {

    // one state for the bill price // lifted-up because needed by the parent component to calculate the final payment
    // const [price, setPrice] = useState(0)

    return (
        <div>
            <p>How much was the bill ?</p>
            <input type="text" value={price} onChange={(event) => setPrice(Number(event.target.value))}/>
        </div>
    );
}

function TipInputs({tip, setTip, children}) {

    return (
        <div>
            {children}
            <select value={tip} onChange={(event) => setTip(Number(event.target.value))}>
                <option value={0}>Not good :( (0%)</option>
                <option value={5}>Umm okay... (5%)</option>
                <option value={10}>It was good! (10%)</option>
                <option value={15}>I liked it! (15%)</option>
                <option value={20}>It was amazing (20%)</option>
            </select>
        </div>
    );
}