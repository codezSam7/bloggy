import Content from "./components/Content"
import Footer from "./components/Footer"
import Header from "./components/Header"


function Layout() {
    return (
        <>
            <Header />
            <Content />
            <Footer />
        </>
    )
}
//Empty tags in react are called react fragments
export default Layout