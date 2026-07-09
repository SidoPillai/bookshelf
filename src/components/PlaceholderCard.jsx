function PlaceholderCard() {
  return (
    <div class="card h-100" aria-hidden="true">
      <img
        src="..."
        class="card-img-top"
        alt="..."
        style={{ height: "250px" }}
      ></img>
      <div class="card-body">
        <h5 class="card-title placeholder-glow">
          <span class="placeholder col-6"></span>
        </h5>
        <p class="card-text placeholder-glow">
          <span class="placeholder col-7"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-6"></span>
          <span class="placeholder col-8"></span>
        </p>
        <a
          class="btn btn-primary disabled placeholder col-6"
          aria-disabled="true"
        ></a>
      </div>
    </div>
  );
}
export default PlaceholderCard;
