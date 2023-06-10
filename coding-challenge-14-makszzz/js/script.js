fetch("option1.json")
  .then((response) => response.json())
  .then((data) => {
    const members = data.members;
    const memberInfoDiv = document.getElementById("member-info");

    members.forEach((member, index) => {
      const firstName = member.firstName;
      const lastName = member.lastName;
      const img = member.img;
      const hobbies = member.hobbies;
      const favoriteBand = member.mischellaneous.favoriteBand;
      const favoriteFood = member.mischellaneous.favoriteFood;

      const card = document.createElement("div");
      card.classList.add("card", "mb-3");

      const cardContent = document.createElement("div");
      cardContent.classList.add("row", "g-0");

      const cardBody = document.createElement("div");
      cardBody.classList.add("col-md-8", "card-body");

      const nameHeader = document.createElement("h2");
      nameHeader.classList.add("card-title");
      nameHeader.innerHTML = `Name: <span class="italic-names">${firstName}</span> <span class="italic-names">${lastName}</span>`;

      const hobbiesHeading = document.createElement("h5");
      hobbiesHeading.innerHTML = "Hobbies";

      const hobbiesList = document.createElement("ul");
      hobbies.split(", ").forEach((hobby) => {
        const hobbyItem = document.createElement("li");
        hobbyItem.innerHTML = hobby;
        hobbiesList.appendChild(hobbyItem);
      });

      const bandParagraph = document.createElement("p");
      bandParagraph.classList.add("card-text");
      bandParagraph.innerHTML = `<span class="bold-p">Favorite Band:</span> ${favoriteBand}`;

      const foodParagraph = document.createElement("p");
      foodParagraph.classList.add("card-text");
      foodParagraph.innerHTML = `<span class="bold-p">Favorite Food:</span> ${favoriteFood}`;

      cardBody.appendChild(nameHeader);
      cardBody.appendChild(hobbiesHeading);
      cardBody.appendChild(hobbiesList);
      cardBody.appendChild(bandParagraph);
      cardBody.appendChild(foodParagraph);

      const imageContainer = document.createElement("div");
      imageContainer.classList.add("col-md-4", "d-flex", "justify-content-end");

      const memberImage = document.createElement("img");
      memberImage.classList.add("member-image", "fade-in");
      memberImage.src = img;
      memberImage.alt = `${firstName} ${lastName}`;

      imageContainer.appendChild(memberImage);

      cardContent.appendChild(cardBody);
      cardContent.appendChild(imageContainer);

      card.appendChild(cardContent);

      memberInfoDiv.appendChild(card);
    });

    memberInfoDiv.classList.add("show");
  })
  .catch((error) => {
    console.log("Error:", error);
  });
