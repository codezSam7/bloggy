import { useState } from "react"

import Header from "./components/playground/Header"
import Products from "./components/playground/Products"
import Quotes from "./components/playground/Quotes"
import Dashboard from "./components/playground/Dashboard"
import Login from "./components/playground/Login"
import Footer from "./components/playground/Footer"

const Playground = () => {
    const products = ["Nike Air 24", "Blue Coody Hoodie", "Samsung S28", "Samsung Zfold 78", "Asus Laptop corei7"];
    const posts = [
        {
            id: 1,
            title: "Never Give Up",
            summary: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            poster: " Winston Churchill",
            date: "september 30 1967"
        },
        {
            id: 2,
            title: "Destiny is you",
            summary: "The only person you are destined to become is the person you decide to be.",
            poster: " Ralph Waldo Emerson",
            date: "August 30 1998"
        },
        {
            id: 3,
            title: "Hardwork is life",
            summary: "The only place you find success before work is in the dictionary",
            poster: "May V. Smith",
            date: "June 30 2000"
        },
        {
            id: 4,
            title: "Dont Dream it, Work it!",
            summary: "I never dreamed about success. I worked for it",
            poster: "Estée Lauder",
            date: "June 30 2000"
        },
    ];
    const isLoggedIn = true;
    // let bal = 1000;//because the balance would be changing, it shouldn't be kept in a variable rather a state;
    // const deposit = () => {
    //     bal = bal + 100;
    //     alert(`You deposited ${bal} amount`)//assignment to variable const cannot be changed
    // }//whenever yah calling an event handler in react, it is to be called without the parenthesis

    //to handle bal that will be changing, use the state hook
    const [amount, setAmount] = useState("");
    const [bal, setBal] = useState(0);
    function deposit() {
        if (amount < 1) {
            alert("Please, enter  valid amount to deposit");
        } else {
            setBal(Number(bal) + Number(amount));
        }
    }

    return (
        <div className="container py-5">
            <Header balance={bal} />
            <Products products={products} />
            <Quotes quotes={posts} />
            <button className="btn btn-danger" onClick={() => {
                if (amount > bal) {
                    alert("Insufficient balance");
                } else {
                    setBal(bal - amount);
                }
            }}> Withdraw </button>
            <input type="number" onChange={(e) => {
                setAmount(e.target.value)
            }} value={amount} />
            <button className="btn btn-primary" onClick={deposit}> Deposit </button>
            <Footer balance={bal} />
            {/* if a user is logged in, render dashboard component else, render log in component */}
            {isLoggedIn ? <Dashboard /> : <Login />} {/*This is conditional rendering*/}
        </div>
    )
}

export default Playground