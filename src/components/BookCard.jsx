function BookCard({ book, onSeeMore }) {
  return (
    <div className="col-md-4 mb-3">
      <div class="card h-100">
        {book.thumbnail ? (
          <img
            src={book.thumbnail}
            className="card-img-top"
            alt={book.title}
            style={{ maxWidth: "100%", maxHeight: "250px" }}
          />
        ) : (
          <div
            className="card-img-top d-flex align-items-center justify-content-center bg-light"
            style={{ height: "250px" }}
          >
            No Image
          </div>
        )}

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">{book.author || "Unknown Author"}</p>
          <p className="card-text">
            <small className="text-muted">{book.year || "—"}</small>
          </p>
          <button
            onClick={() => onSeeMore(book)}
            className="btn btn-primary mt-auto"
          >
            See more
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
