const Footer = ({ balance }) => {
    //balance = 10000; //props are immutabele which means they are not meant to be changed and they cannot be changed

    return (
        <div className="row">
            <div className="col-md-12 text-center">
                <footer>Footer</footer>
                <h3>Your balance is: {balance}</h3>
            </div>
        </div>
    )
}

export default Footer