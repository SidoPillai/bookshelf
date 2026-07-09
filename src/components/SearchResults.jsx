import BookCard from "./BookCard";

function SearchResults({ searchTerm, books, onSeeMore }) {
  if (!books || books.length === 0) {
    return (
      <div className="row">
        <div className="col-12">
          <p>No results found for "{searchTerm}".</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="row mb-3">
        <div className="col-12">
          <h2>Search Results for "{searchTerm}"</h2>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {books.map((book) => (
          <BookCard key={book.key} book={book} onSeeMore={onSeeMore} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
