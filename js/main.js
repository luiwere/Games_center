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
    
         
          <a href="${game.link}" target="_blank">
           <img src="${game.img_path}" alt="${game.title} cover image">
          </a>
           <p>${game.description}</p>
        </div>
      `;
    });
    gamesDiv.innerHTML = gamesHtml;
  })
  .catch(error => console.error("Error raeding JSON database data: ", error));

