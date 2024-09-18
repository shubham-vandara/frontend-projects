document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.querySelector("#search-btn");
  const usernameInput = document.querySelector("#user-input");
  const statsContainer = document.querySelector(".stats-container");
  const easyProgress = document.querySelector(".easy-progress");
  const mediumProgress = document.querySelector(".medium-progress");
  const hardProgress = document.querySelector(".hard-progress");
  const easyLabel = document.querySelector("#easy-label");
  const mediumLabel = document.querySelector("#medium-label");
  const hardLabel = document.querySelector("#hard-label");
  const statsCard = document.querySelector(".stats-card");
  const easyPercentage = document.querySelector(".easy-percentage");
  const mediumPercentage = document.querySelector(".medium-percentage");
  const hardPercentage = document.querySelector(".hard-percentage");

  function validateUsername(username) {
    if (username.trim() === "") {
      alert("Please enter a valid Leetcode username");
      return false;
    }

    const regex = /^[a-zA-Z0-9_-]{1,15}$/;

    const isMatching = regex.test(username);
    if (!isMatching) {
      alert(
        "Username should only contain alphanumeric characters, underscores, or hyphens"
      );
    }
    return isMatching;
  }

  searchButton.addEventListener("click", function (e) {
    e.preventDefault();
    const username = usernameInput.value;
    console.log(username);

    if (validateUsername(username)) {
      fetchUserDetails(username);
    }
  });

  async function fetchUserDetails(username) {
    const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
    try {
      searchButton.textContent = "searching...";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);

      displayUserData(data);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while fetching user details");
    } finally {
      searchButton.textContent = "Search";
    }
  }

  function displayUserData(userData) {
    const {
      totalSolved,
      totalQuestions,
      easySolved,
      totalEasy,
      mediumSolved,
      totalMedium,
      hardSolved,
      totalHard,
      acceptanceRate,
      ranking,
      status,
    } = userData;

    if (status === "error") {
      return alert("Please enter a correct username");
    }

    statsCard.innerHTML = ` <p> Ranking : ${ranking} </p>
                            <p> Acceptance Rate : ${acceptanceRate}</p>
                            <p> Total Solved : ${totalSolved}</p>
                            <p> Total Questions : ${totalQuestions}</p>`;

    updateProgress(
      easySolved,
      totalEasy,
      easyLabel,
      easyProgress,
      easyPercentage
    );
    updateProgress(
      mediumSolved,
      totalMedium,
      mediumLabel,
      mediumProgress,
      mediumPercentage
    );
    updateProgress(
      hardSolved,
      totalHard,
      hardLabel,
      hardProgress,
      hardPercentage
    );
  }

  function updateProgress(solved, total, label, levelprogress, showPercentage) {
    const progress = (solved / total) * 100;
    levelprogress.style.setProperty("--progress-bar", progress + "%");
    label.textContent = `${solved}/${total}`;
    showPercentage.innerHTML = `${progress.toFixed(2)}%`;
  }
});
