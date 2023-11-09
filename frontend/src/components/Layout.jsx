/* import {Children} from 'react'; */
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({children}){    

    console.log("hi from layout");
    return (
    <>
        <Navbar />
        {children}
        <Footer />
       
    </>
    )
}
