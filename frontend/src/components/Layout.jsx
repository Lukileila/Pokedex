import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(){    
    return (
    <>
        <Navbar />
        {children}
        <Footer />
       
    </>
    )
}
