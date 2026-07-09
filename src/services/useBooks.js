import { useState, useEffect } from "react";
import api from "./api-client";

function useBooks(initialSearchTerm = "") {
  const [books, setBooks] = useState([]);
  const [lastSearchTerm, setLastSearchTerm] = useState(initialSearchTerm);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchBooks(query) {
      try {
        console.log("Fetching books for:", query);
        setIsLoading(true);
        const items = await api.fetchBooks(query, controller);
        setBooks(items);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Error fetching books:", error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (lastSearchTerm) {
      fetchBooks(lastSearchTerm);
    }

    return () => {
      controller.abort();
    };
  }, [lastSearchTerm]);

  return { books, isLoading, setLastSearchTerm, lastSearchTerm };
}

export default useBooks;
