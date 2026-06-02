fetch("data.json")
  .then(response => response.json())
  .then(data => {
    const gamesDiv = document.querySelector(".grid");
    let gamesHtml = "";

    data.games.forEach(game => {

        const currentImage = game.img_path ? game.img_path : "images/PUBG.jpeg";

      gamesHtml += `
        <div class="box">
          <h2>${game.title}</h2>
    
          <img src="${game.img_path}" alt="${game.title} cover image">
          <p>${game.description}</p>
          <a href="${game.link}" target="_blank">Go to page</a>
        </div>
      `;
    });
    gamesDiv.innerHTML = gamesHtml;
  })
  .catch(error => console.error("Error raeding JSON database data: ", error));

