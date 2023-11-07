function Footer (props) {
    return (
    <footer className="flex justify-around">
    <p> &copy;WD043 Team Rocket</p><p>Copyright {props.year}</p>
    </footer>
)
}

export default Footer;