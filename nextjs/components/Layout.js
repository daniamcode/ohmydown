import Footer from './Footer'

const Layout = (props) => {
    return(
    <div>
        <Footer />
        {props.children}
    </div>)
}

export default Layout