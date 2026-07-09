import SearchBar from "./SearchBar";

function NavBar({ onSearch }) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Bookshelf
          </a>

          <SearchBar onSearch={onSearch} />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
