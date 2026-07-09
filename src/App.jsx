import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SearchResults from "./components/SearchResults";
import PlaceholderCard from "./components/PlaceholderCard";
import useBooks from "./services/useBooks";
import { useState } from "react";
import BookDetail from "./components/BookDetail";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const { books, isLoading, setLastSearchTerm, lastSearchTerm } = useBooks();

  const handleSearch = (query) => {
    console.log("Searching for:", query);
    setLastSearchTerm(query);
  };

  const handleSeeMore = (book) => {
    console.log("See more clicked for book:", book);
    setSelectedBook(book);
  };

  function handleCloseDetails() {
    setSelectedBook(null);
  }

  return (
    <>
      <div>
        <div>
          <NavBar onSearch={handleSearch} />
        </div>
        <div className="container mt-5 pt-5">
          {isLoading ? (
            <PlaceholderCard />
          ) : (
            <SearchResults
              books={books}
              searchTerm={lastSearchTerm}
              onSeeMore={handleSeeMore}
            />
          )}
        </div>
        <div>
          <Footer />
          {selectedBook && (
            <BookDetail book={selectedBook} onClose={handleCloseDetails} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
