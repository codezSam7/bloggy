import Banner from "./pages/Banner"
import Content from "./pages/Content"
import Footer from "./pages/Footer"
import Header from "./pages/Header"

const Blogger = () => {
    const post = "Number one post"
    return (
        <>
            <Header />
            <Banner />
            <Content post={post} age='30' />
            <Footer />
        </>
    )
}

export default Blogger