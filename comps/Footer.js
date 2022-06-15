 
 import Link from 'next/link'
 import Image from 'next/image'
 const Footer = () => {
  return (
    <footer>
      Copyright&copy;  2022 Glen Smith
      <br></br>
      <br></br>
      <Link href="https://twitter.com/glenrockinsmith"><a>
        <Image src="/glenrockinsmith.png" alt="site logo" width={64} height={64} />
        </a></Link>
    </footer>
  );
}
 
export default Footer;