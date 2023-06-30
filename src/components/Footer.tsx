function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex flex-row justify-center items-center h-14">
            <small>&copy; Copyright {currentYear}, Troy Marchesseault</small>
        </footer>
    );
}
export default Footer;
