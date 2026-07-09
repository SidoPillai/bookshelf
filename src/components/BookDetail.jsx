function BookDetail({ book, onClose }) {
  if (!book) return null;

  const title = book.title || book.volumeInfo?.title || "Untitled";
  const authors =
    book.author || book.volumeInfo?.authors?.join(", ") || "Unknown Author";
  const description =
    book.description ||
    book.volumeInfo?.description ||
    "No description available.";
  const thumbnail =
    book.thumbnail || book.volumeInfo?.imageLinks?.thumbnail || "";

  return (
    <div
      className="modal fade show d-block"
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            />
          </div>

          <div className="modal-body">
            <div className="row">
              <div className="col-md-4">
                {thumbnail ? (
                  <img
                    src={thumbnail}
                    alt={title}
                    className="img-fluid rounded"
                  />
                ) : (
                  <div className="bg-light p-4 text-center rounded">
                    No Image
                  </div>
                )}
              </div>
              <div className="col-md-8">
                <h5>{title}</h5>
                <p className="text-muted">{authors}</p>
                <p>{description}</p>
                <p>Published: {book.year || "Unknown"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
