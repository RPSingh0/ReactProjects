import {useEffect, useState} from "react";

export default function App() {

    const [money, setMoney] = useState('');
    const [from, setFrom] = useState('USD');
    const [to, setTo] = useState('EUR');
    const [outputMoney, setOutputMoney] = useState(null);

    function handleSetFrom(event) {
        setFrom(event.target.value);
    }

    function handleSetTo(event) {
        setTo(event.target.value);
    }

    function handleSetMoney(event) {

        if (event.target.value === '') {
            setMoney('');
            return;
        }

        const moneyValue = Number(event.target.value);
        setMoney(value => moneyValue ? moneyValue : value);
    }

    useEffect(function () {

        // abort the request in case of multiple inputs to avoid race condition
        const abortController = new AbortController()

        async function getConvertedMoney() {

            try {
                const res = await fetch(`https://api.frankfurter.app/latest?amount=${money}&from=${from}&to=${to}`,
                    {signal: abortController.signal});
                const result = await res.json();
                // console.log(result['rates'][to]);
                setOutputMoney(result['rates'][to]);
            } catch (error) {
                console.log(error.message);
            }
        }

        if (!money) {
            setOutputMoney(null);
            return;
        }

        if (from === to) {
            setOutputMoney(money);
            return;
        }

        getConvertedMoney();

        return function () {
            abortController.abort();
        }

    }, [money, from, to]);

    return (
        <div>
            <input type="text" value={money} onChange={handleSetMoney}/>
            <select value={from} onChange={handleSetFrom}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <select value={to} onChange={handleSetTo}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <p>{outputMoney?.toFixed(3)}</p>
        </div>
    );
}