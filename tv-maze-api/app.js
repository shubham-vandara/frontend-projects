// TV Maze API integration

// Function to handle form submission
const form = document.querySelector("#searchForm");
const title = document.querySelector("#title");
const imageContainer = document.querySelector(".container");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  // Check if the title input is not empty
  if (!(title.value === "")) {
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } };
    // Fetch data from TV Maze API
    const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
    // Call function to display images
    makeImage(res.data);
    title.value = "";
  } else {
    alert("Kindly Add TV Show Title :)");
  }
});

// Function to create and display images
const makeImage = (shows) => {
  // Clear existing images
  const imgDiv = document.querySelectorAll(".container div");
  for (let img of imgDiv) {
    img.remove();
  }

  // Iterate through fetched show data and create image elements
  for (let showData of shows) {
    const imgDivTag = document.createElement("div");
    const img = document.createElement("img");
    if (showData.show.image) {
      // Set image source if available
      img.src = showData.show.image.original;
      // Append image to container
      imageContainer.append(imgDivTag);
      imgDivTag.append(img);
    }
  }
};
