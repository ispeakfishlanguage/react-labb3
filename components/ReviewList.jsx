export default function ReviewList({ reviews }) {
    return (
      <div>
        <h3>Reviews</h3>
        {reviews.length === 0 ? (
          <p>No reviews available.</p>
        ) : (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <p>{review.content}</p>
                <p>— {review.author}</p>
              </li>
            ))}
          </ul>
        )}
        <style jsx>{`
          ul {
            list-style: none;
            padding: 0;
          }
          li {
            margin-bottom: 1rem;
          }
        `}</style>
      </div>
    )
  }
  