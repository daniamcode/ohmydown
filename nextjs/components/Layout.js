import Header from './Header'
import Footer from './Footer'

const Layout = (props) => {
    return(
    <div>
        <Header />
        <Footer />
        {props.children}
    </div>)
}

export default Layout