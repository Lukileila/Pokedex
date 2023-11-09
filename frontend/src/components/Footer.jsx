function Footer (props) {
    return (
    <footer className="flex justify-around bg-red-800 p-2 text-white">
    <p> &copy;WD043 Team Rocket</p><p>Copyright {props.year}</p>
    </footer>
)
}

export default Footer;