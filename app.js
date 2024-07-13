const formatDate = (isoDate) => {
  return new Date(isoDate).toLocaleDateString("en-GB");
};

const getJoke = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const json = await response.json();
    const data = json.results;
    const firstUser = data[0];

    console.log(firstUser);

    let htmlContent = "";

    htmlContent += `<div class="id-card front">
                        <div class="header">
                            <h2>Front</h2>
                        </div>
                        <div class="content">
                            <img
                            src="${firstUser.picture.large.toString()}"
                            alt="Profile Picture"
                            class="profile-picture"
                            />
                            <p class="name">${
                              firstUser.name.first + " " + firstUser.name.last
                            }</p>
                            <p class="id"><b>ID: </b> ${firstUser.id.value}</p>
                            <p class="doj"><b>DOJ:</b> ${formatDate(
                              firstUser.registered.date
                            )}</p>
                        </div>
                        </div>
                        <div class="id-card back">
                        <div class="header">
                            <h2>Back</h2>
                        </div>
                        <div class="content">
                            <p><strong>Address:</strong> ${
                              firstUser.location.street.number +
                              ", " +
                              firstUser.location.street.name +
                              ", " +
                              firstUser.location.city +
                              ", " +
                              firstUser.location.state +
                              ", " +
                              firstUser.location.country +
                              " - " +
                              firstUser.location.postcode
                            }</p>
                            <p><strong>Gender:</strong> ${
                              firstUser.gender.charAt(0).toUpperCase() +
                              firstUser.gender.slice(1)
                            }</p>
                            <p><strong>Email:</strong> ${firstUser.email}</p>
                            <p><strong>Phone No. :</strong> ${
                              firstUser.phone
                            }</p>
                        </div>
                    </div>`;

    document.querySelector(".id-card-container").innerHTML = htmlContent;
  } catch (err) {
    console.log(err);
  }
};
document.querySelector(".btn").addEventListener("click", getJoke);
