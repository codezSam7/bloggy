const Quotes = ({ quotes }) => {
    console.log(quotes);

    return (
        <div className="row">
            <div className="col-md-12 text-center">
                <h1>Quotes</h1>
            </div>

            <div className="col-12">
                <div className="row">
                    {quotes && quotes.map((quote) => {
                        return (
                            <div className="col-md-6" key={quote.id}>
                                <h2>{quote.title}</h2>
                                <p>{quote.summary}</p>
                                <p>Posted By: {quote.poster}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Quotes