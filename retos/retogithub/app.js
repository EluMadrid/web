
const btnSearch = document.querySelector(".btn-search");
const informationContainer = document.querySelector(".information-container");
const input = document.querySelector(".input-username");

btnSearch = addEventListener("click", function(){
    let username = input.value
    const urlProfile = "https://api.github.com/users/"+username

fetch(urlProfile)
.then(response => {
   return response.json();
})

.then(profile => {
    informationContainer.innerHTML = `
    <div class="principal-information">
      <img src="https://avatars.githubusercontent.com/u/${profile.id}?v=4" alt="">
<div class="description-container"><div class="user-bio">
    <h2>${profile.name}</h2>
    <p>${profile.name}</p>
    </div>
    <div class="user-joined"><p class="joined">${profile.created_at}</p></div></div>
    </div>
    <div class="text-information"> 
      <p>${profile.bio}</p>
    </div>
    <div class="card-information">
      <div>
        <h3>Repos</h3>
        <h4>${profile.public_repos}</h4>
      </div>
      <div>
        <h3>Folowers</h3>
        <h4>${profile.followers}</h4>
      </div>
      <div>
        <h3>Folowing</h3>
        <h4>${profile.following}</h4>
      </div>
    </div>
    <div class="info-container">
      <div>
        <img src="./images/pin.png" alt="" width="20px" >
        <p>${profile.location}</p>
      </div>
      <div>
        <img src="./images/link.png" alt="" width="20px">
        <p>${profile.html_url}</p>
      </div>
      <div>
        <img src="./images/twitter.png" alt="" width="20px">
        <p>${profile.twitter_username}</p>
      </div>
      <div>
        <img src="./images/hotel.png" alt="" width="20px">
        <p>${profile.company}</p>
      </div>
    </div> `
});
})