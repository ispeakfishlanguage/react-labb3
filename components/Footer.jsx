// components/Footer.js
export default function Footer() {
    return (
      <footer>
        <p>© 2023 Movie Database. All rights reserved.</p>
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
        `}</style>
      </footer>
    )
  }
  