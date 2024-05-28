import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        header {
          background: #333;
          color: white;
          padding: 1rem;
        }
        nav ul {
          display: flex;
          list-style: none;
          padding: 0;
        }
        nav ul li {
          margin-right: 1rem;
        }
        nav ul li a {
          color: white;
          text-decoration: none;
        }
      `}</style>
    </header>
  )
}
