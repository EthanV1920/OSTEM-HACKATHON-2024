export default function Header() {
    return (
        <nav className ="header">
            <a href="/" className="site-title">
                Site Name
            </a>
            <ul>
                <li className="active" >
                    <a href="/home">Home</a>
                    <li></li>
                    <a href="/about">About</a>
                    {/* <li></li>
                    <a href="/faq">Faq</a> */}
                </li>
            </ul>
        </nav>
    )
}