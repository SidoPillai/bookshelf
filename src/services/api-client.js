const BASE_URL = "https://openlibrary.org/search.json";

async function fetchBooks(query, controller) {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${encodeURIComponent(query)}&limit=20`,
      { signal: controller.signal },
    );
    if (!response.ok)
      throw new Error(`API call failed with HTTP ${response.status}`);
    const data = await response.json();
    return (data.docs || []).map((b) => {
      const isbn = b.isbn?.[0];
      const thumbnail = b.cover_i
        ? `https://covers.openlibrary.org/b/id/${b.cover_i}-M.jpg`
        : isbn
          ? `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`
          : null;

      return {
        key: b.key,
        title: b.title,
        author: b.author_name?.join(", ") || "Unknown",
        year: b.first_publish_year || "—",
        description: b.first_sentence?.[0] || "No description available.",
        thumbnail,
      };
    });
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
}

export default {
  fetchBooks,
};
