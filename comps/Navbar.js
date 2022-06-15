import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
      <Link href="/"><a>
        <Image src="/glen_smith.png" alt="site logo" width={128} height={77} />
        </a></Link>
      </div>
      <Link href="/video"><a>Video</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/glen/"><a>Glen</a></Link>
    </nav>
  );
}
 
export default Navbar;