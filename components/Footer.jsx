import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <p>© 2023 Movie Database. All rights reserved.</p>
      <Link href="/">Home</Link>
      <style jsx>{`
        footer {
          background: #333;
          color: white;
          padding: 1rem;
          text-align: center;
          position: absolute;
          bottom: 0;
          width: 100%;
        }
        a {
          color: white;
          text-decoration: none;
          margin-left: 1rem;
        }
      `}</style>
    </footer>
  )
}
