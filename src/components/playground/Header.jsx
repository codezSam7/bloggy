const Header = ({ balance }) => {
    return (
        <div className="row text-center">
            <h1>Header</h1>
            <h3>Your balance is: {balance}</h3>
        </div>
    )
}

export default Header