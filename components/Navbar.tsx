import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Link href="/"><Image src="/tom.jpg" width={90} height={77} alt="tom.jpg" /></Link>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
        </nav>
    )
}

export default Navbar;