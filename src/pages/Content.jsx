import { useEffect, useState } from "react"
import Loader from "./Loader";



const Content = ({ post, age }) => {
    //https://jsonplaceholder.typicode.com/posts

    //send a request to an external api to get posts data
    const [posts, setPosts] = useState([]);
    //showing loader
    const [loading, setLoading] = useState(true);
    //show error message
    const [error, setError] = useState(false);

    useEffect(function () {
        sendRequest();
    }, [])

    function sendRequest() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                setPosts(data)
                setLoading(false);
                setError(false);
                //console.log(data);
            })
            .catch(function (error) {
                setPosts([])
                setLoading(false);
                setError(true);
                console.log(error);
            })
    }


    return (
        <>
            {/* props are used whenever the parent componenent want to pass data to the child component */}
            {/* Main Content*/}
            <div className="container px-4 px-lg-2">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10">
                        {/* Post preview*/}

                        {
                            loading && <Loader />
                        }

                        {
                            !loading && posts.length > 0 && posts.map((po) => {
                                return (
                                    <div key={po.id}>
                                        <div className="post-preview">
                                            <a href="post.html">
                                                <h2 className="post-title">
                                                    {post} <br />
                                                    {age} <br />
                                                    {po.title}
                                                </h2>
                                                <h3 className="post-subtitle">
                                                    {po.body}
                                                </h3>
                                            </a>
                                            <p className="post-meta">
                                                Posted by
                                                <a href="#!"> User {po.userId} </a>
                                                on September 24, 2023
                                            </p>
                                        </div>
                                        {/* Divider*/}
                                        <hr className="my-4" />
                                    </div>
                                )
                            })
                        }




                        {/* Pager*/}
                        <div className="d-flex justify-content-end mb-4">
                            <a className="btn btn-danger text-uppercase" href="#!">
                                Older Posts →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Content