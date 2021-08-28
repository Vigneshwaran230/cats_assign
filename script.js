const section = document.createElement("section");
section.setAttribute("class", "user-list");
const div1 = document.createElement("div");
div1.setAttribute("class", "div-list");
var searchBar = document.createElement("INPUT");
searchBar.setAttribute("type", "text");
searchBar.setAttribute("class", "text-list");
searchBar.setAttribute("placeholder","search for a cats");
div1.append(searchBar);
let users=[];
 searchBar.addEventListener('keyup',(e)=>{
  const searchString=e.target.value;
   console.log(searchString);
const filtered = users.filter( (character) =>{
    return(
      character.id.includes(searchString) || character.created_at.includes(searchString)||
      character.tags.includes(searchString)
    );
 });
   console.log(filtered);
    // users(filtered);
 });
const getUsers = async() =>{
  try{
  const data = await fetch("https://cataas.com/api/cats?tags=cute", {
    method: "GET"
  });
  users = await data.json();
  users.forEach((user) => createUser(user));
  }catch(err)
    {
      console.error(err);
    }
}
getUsers();

function createUser({ id, created_at, tags }) {
  console.log(id);
  const info = document.createElement("div");
  info.setAttribute("class", "container");
  info.innerHTML = `
    <div class="user-container">
          <img class="user-pic" src=https://cataas.com/cat/${id} width="250px" height="250px"/>
   </div>
   <div class="inside">
   <h4>CAT_Id:${id}</h4>
    <p class="user-join-date"> ${new Date(created_at).toDateString()}</p>
    <input class="cats-button" type"button" value="View_cats" onclick="window.open('https://cataas.com/cat/${id}')"/>
    </div>
    
   `;

  document.body.append(div1,section);
  
  document.querySelector(".user-list").append(info);
  
}
