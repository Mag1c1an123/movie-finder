const omdbKey = "30054f3e";
const omdbUrl = "https://www.omdbapi.com/";

document.getElementById("search-btn").addEventListener("click", async () => {
  const title = document.getElementById("movie-title").value.trim();
  console.log(title);
  if (title === "") {
    alert("Please enter a movie title!");
    return;
  }

  try {
    const response = await fetch(
      `${omdbUrl}?apiKey=${omdbKey}&t=${encodeURIComponent(title)}`
    );
    const movieData = await response.json();
    console.log(movieData);

    //Display movie details
    document.getElementById("movie-info").innerHTML = `
    <div class="card mx-auto" style="width: 18rem;">
        <img src="${movieData.Poster}" class="card-img-top" alt="${movieData.Title}">
        <div class="card-body">
          <h5 class="card-title">${movieData.Title} (${movieData.Year})</h5>
          <p class="card-text"><strong>Genre:</strong> ${movieData.Genre}</p>
          <p class="card-text"><strong>Plot:</strong> ${movieData.Plot}</p>
          <p class="card-text"><strong>IMDB Rating:</strong> ${movieData.imdbRating}</p>
        </div>
      </div>
    `;
  } catch (error) {
    console.log(error);
  }
});
