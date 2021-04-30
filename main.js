
//users
document.getElementById("users").addEventListener("click", user)



function user(){    fetch("https://jsonplaceholder.typicode.com/users")
    
    .then((response) => response.json())
    .then((response) =>{
console.log(response);
let usersInfo="";
response.forEach(element => {
    usersInfo +=`<div class="user-body">
    <div class="card"> 
    <p id= "upperPart"></p>
                    <p>${element.name}</p>
                    <p>${element.phone}</p>
                    <p>${element.website}</p>
                    <p>${element.username}</p>
                    <p>${element.email}</p>
                    <p>${element.address.street}</p>
                    
    </div>
    </div>`
    document.getElementById("display-details").innerHTML=usersInfo;
    
});
        
    });

}
//todos
document.getElementById("to-do").addEventListener("click", toDo)



function toDo(){    fetch("https://jsonplaceholder.typicode.com/todos")
    
    .then((response) => response.json())
    .then((response) =>{
console.log(response);
    
    
let todoInfo="";
response.forEach(element => {
    todoInfo +=`<div class="user-body">
    <div class="card"> 
    <p id= "upperPart"></p>
                    <p>${element.userId}</p>
                    <p>${element.id}</p>
                    <p>${element.title}</p>
                    <p>${element.username}</p>
                    <p>${element.completed}</p>

                    
    </div>
    </div>`
    document.getElementById("display-details").innerHTML=todoInfo;
    
});
        
    });

}

//comments
document.getElementById("comments").addEventListener("click", comments)
function comments(){    fetch("https://jsonplaceholder.typicode.com/comments")
    
    .then((response) => response.json())
    .then((response) =>{
console.log(response);
    
let commentInfo="";
response.forEach(element => {
    commentInfo +=`<div class="user-body">
    <div class="card"> 
    <p id= "upperPart"></p>
                    <p>${element.postId}</p>
                    <p>${element.id}</p>
                    <p>${element.email}</p>
                    <p>${element.name}</p>
                    <p>${element.body}</p>

                    
    </div>
    </div>`
    document.getElementById("display-details").innerHTML=commentInfo;
    
});
        
    });

}
//posts
document.getElementById("posts").addEventListener("click", posts)
function posts(){    fetch("https://jsonplaceholder.typicode.com/posts")
    
    .then((response) => response.json())
    .then((response) =>{
console.log(response);
    
let postInfo="";
response.forEach(element => {
    postInfo +=`<div class="user-body">
    <div class="card"> 
    <p id= "upperPart"></p>
                    <p>${element.userId}</p>
                    <p>${element.id}</p>
                    <p>${element.title}</p>
                    <p>${element.body}</p>
                   

                    
    </div>
    </div>`
    document.getElementById("display-details").innerHTML=postInfo;
    
});
        
    });

}
//albums
document.getElementById("albums").addEventListener("click", albums)
function albums(){    fetch("https://jsonplaceholder.typicode.com/albums")
    
    .then((response) => response.json())
    .then((response) =>{
console.log(response);
    
let albumInfo="";
response.forEach(element => {
    albumInfo +=`<div class="user-body">
    <div class="card"> 
    <p id= "upperPart"></p>
                    <p>${element.userId}</p>
                    <p>${element.id}</p>
                    <p>${element.title}</p>
                    
                   

                    
    </div>
    </div>`
    document.getElementById("display-details").innerHTML=albumInfo;
    
});
        
    });

}
//photos

document.getElementById("photos").addEventListener("click", photos)
function photos(){    fetch("https://jsonplaceholder.typicode.com/photos")
    
    .then((response) => response.json())
    .then((response) =>{
console.log(response);
    
let photosInfo="";
response.forEach(element => {
    photosInfo +=`<div class="user-body">
    <div class="card"> 
    <p id= "upperPart"></p>
                    <p>${element.albumId}</p>
                    <p>${element.id}</p>
                    <p>${element.title}</p>
                   <img src="${element.url}">
                   <img src="${element.thumbnailUrl}">

                    
    </div>
    </div>`
    document.getElementById("display-details").innerHTML=photosInfo;
    
});
        
    });

}