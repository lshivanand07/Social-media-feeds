// /* 1 {a:'one', b:'2', f:'5', c:'33', p:'do', q:'one' }: Using this object makes an array consisting of all the keys of the given object in reverse order. 
// (output should be ['q', 'p', 'c', 'f', 'b', 'a']) */

// let obj ={a:'one', b:'2', f:'5', c:'33', p:'do', q:'one' }

// let Keys = Object.keys(obj);
// let reverse = [];
// for(let i=Keys.length-1; i>=0; i--){
//   reverse.push(Keys[i]);
// }
// console.log("reverse object Keys are: ",reverse)

// { data: [{a:'one', id:'22'}, {a:'four', id:'7'}, {a:'six', b:'2'},  {a:'sixty', id:'24'},  {a:'five', id:'212'}] }

// /* 2 { data: [{a:'one', id:'22'}, {a:'four', id:'7'}, {a:'six', b:'2'},  {a:'sixty', id:'24'},  {a:'five', id:'212'}] }
//  From the given object, remove the data arrays item with id as '24'. (consider that the data arrays order will be different every time you get, 
//    so write code in such a way that given any object it will remove the item with id as 24 if it exists ). */

// let obj2 = { data: [{a:'one', id:'22'}, {a:'four', id:'7'}, {a:'six', b:'2'},  {a:'sixty', id:'24'},  {a:'five', id:'212'}] };
// console.log("before delete 24: ",obj2);
// for(let i=0; i<obj2.data.length; i++){
//    if(obj2.data[i].id==="24"){
//       obj2.data.splice(i,1);
//    }
// }

// console.log("after delete 24: ",obj2);

// // 3. Write a function to 
// // A. Calculate the height of the end user's browser screen

// console.log("height of the end user's browser screen: ",screen.height);

// //  B. To console the name of the web host
// console.log("name of the web host: ",location.hostname);

// // C. To show a warning message if there is no https protocol used in the visited website.
// let protocol = location.protocol;
// if(protocol!=="https:"){
//    alert("This website has the http protocol, not https.")
// }
// else{
//    console.log("this  website has the https protocol")
// }

// //  D. To show an alert message after 10sec while the page is refreshed.

// setTimeout(()=>{
//    alert("page is refreshed.")
// },10000)

//4. The Social Media Feed:
document.getElementById("addNewPost").addEventListener("click", function(){
    document.getElementsByClassName("socialMediaForm")[0].setAttribute("style","display:block");
       document.getElementById("submitBtn").setAttribute("style","display:block");
     document.getElementById("from").reset();
    document.getElementById("saveUpdateButton").setAttribute("style","display:none");
    document.getElementById("cancelUpdateButton").setAttribute("style","display:none");
})
// A. Create a form to save posts with the following fields: id (auto-generate), author, content, likes, and tags

document.getElementById("submitBtn").addEventListener("click", function(element){

    element.preventDefault();

    var posts = JSON.parse(localStorage.getItem("posts")) || [];

    var authorName = document.getElementById("author").value;
    var like = document.getElementById("likes").value;
    var tags =  document.getElementById("tags").value;
    var content =  document.getElementById("content").value;
    //id (auto-generate) based on user name + @123
    var id = authorName+'@123';

    if(authorName!==""){

// I. Implement a confirm dialog before saving.
      var confirmPopup =  confirm("Are you sure you want to save this post?");
       if(confirmPopup===true){

//B. Store post objects in an array. Each object must include: id, author, content, likes (number), and tags (array of strings). Save this array to the browser's localStorage.

    var likes = Number(like)
    var str = tags.split(" ");
    console.log("hhhbhb")
      posts.push({
        Id:id,
        authorName:authorName,
        likes:likes,
        tags:str,
        content:content
    })
     localStorage.setItem("posts", JSON.stringify(posts));
     document.getElementById("from").reset();
     console.log(posts)
    }
    }
}
);

// C. Write a function getTrendingPosts(minLikes) that returns only posts with likes above a certain number.

document.getElementById("getTrendingPostsButton").addEventListener("click", getTrendingPosts)

function getTrendingPosts(){

    document.getElementsByClassName("socialMediaPosts")[0].innerHTML=""
   
    var posts = JSON.parse(localStorage.getItem("posts")) || [];
     
     var temp=0
     for(let i=0; i<posts.length; i++){
        for(let j=i+1; j<posts.length; j++){
        if(posts[i].likes > posts[j].likes){
         temp = posts[i];
         posts[i] = posts[j];
         posts[j] = temp;
        }
     }
     }

        var postsdiv = document.createElement("div");
        postsdiv.className="postsdiv"
        postsdiv.style.border="2px solid black"
        postsdiv.style.padding="10px";
        postsdiv.style.width="300px"

        document.getElementsByClassName("socialMediaPosts")[0].append(postsdiv);

        document.getElementsByClassName("postsdiv")[0].innerHTML=`<h4>Trending Posts:</h4> <br> ID: ${JSON.stringify(posts[posts.length-1].Id)} <br> author Name: ${JSON.stringify(posts[posts.length-1].authorName)} 
        <br> <h2> likes: ${JSON.stringify(posts[posts.length-1].likes)} </h2> <br> tags: ${JSON.stringify(posts[posts.length-1].tags)} <br> content: ${JSON.stringify(posts[posts.length-1].content)}`;  
}

//D. Write a function getPostsByTag(tagName) that filters the feed based on a specific tag.

document.getElementById("getPostsByTagButton").addEventListener("click",getPostsByTag);

function getPostsByTag(){
      var posts= JSON.parse(localStorage.getItem("posts")) || [];

    var tagsName = document.getElementById("getPostsByTagSearchBar").value;

     document.getElementsByClassName("socialMediaPosts")[0].innerHTML="";
     
     if(tagsName!==""){
       
      var postsdiv = document.createElement("div");
        postsdiv.id="postsdiv"
        postsdiv.style.border="2px solid black"
        postsdiv.style.padding="10px";
        postsdiv.style.width="300px"

        document.getElementsByClassName("socialMediaPosts")[0].append(postsdiv);

   var tagsNames=false;
    for(let  i=0; i<posts.length; i++){
       for(let  j=0; j<posts[i].tags.length; j++){
        if(tagsName.toLowerCase()===posts[i].tags[j].toLowerCase()){
             var index = i;
         tagsNames=true;
        break;
        }
    }
    }

    if(!tagsNames){
        document.getElementsByClassName("socialMediaPosts")[0].innerHTML="The tag you entered was not found!";
         document.getElementsByClassName("socialMediaPosts")[0].setAttribute("style","color:red")

         document.getElementById("getPostsByTagErrorMsg").innerHTML=""
    }
    else{
         document.getElementsByClassName("socialMediaPosts")[0].setAttribute("style","color:black")
         document.getElementById("postsdiv").innerHTML=`<h4>${tagsName}:</h4> <br> ID: ${JSON.stringify(posts[index].Id)} <br> author Name: ${JSON.stringify(posts[index].authorName)} 
        <br> likes: ${JSON.stringify(posts[index].likes)}  <br> <h2> tags: ${JSON.stringify(posts[index].tags)} </h2> <br> content: ${JSON.stringify(posts[index].content)}`;

        document.getElementById("getPostsByTagErrorMsg").innerHTML=""
    }
     }
     else{
      document.getElementById("getPostsByTagErrorMsg").innerHTML="Please enter tag"
     } 
}

// E. Create a function that returns an alphabetically sorted array of all author usernames.

document.getElementById("usernamesSort").addEventListener("click",usernamesAlphabeticallySort);

function usernamesAlphabeticallySort(){

    document.getElementsByClassName("socialMediaPosts")[0].innerHTML="";

     var posts= JSON.parse(localStorage.getItem("posts")) || [];

     posts.sort((a,b)=>{
        return a.authorName.localeCompare(b.authorName)
     })

     for(let i=0; i<posts.length; i++){
        var postsdiv = document.createElement("div");
        postsdiv.className="postsdiv"
        postsdiv.style.border="2px solid black"
        postsdiv.style.padding="10px";
        postsdiv.style.width="300px"

        document.getElementsByClassName("socialMediaPosts")[0].append(postsdiv);

      console.log(posts[i])
        document.getElementsByClassName("postsdiv")[i].innerHTML=`Post No:  ${i+1} <br> ID: ${JSON.stringify(posts[i].Id)} <br> author Name: ${JSON.stringify(posts[i].authorName)} 
        <br> likes: ${JSON.stringify(posts[i].likes)} <br> tags: ${JSON.stringify(posts[i].tags)} <br> content: ${JSON.stringify(posts[i].content)}`;
       document.getElementsByClassName("socialMediaPosts")[0].setAttribute("style","color:black")
     }
}

//F. Create a list view for the feeds. Each post should have delete and edit button

document.getElementById("FeedList").addEventListener("click", feedList);
   
   function feedList(){

     document.getElementsByClassName("socialMediaPosts")[0].innerHTML="";

      var posts = JSON.parse(localStorage.getItem("posts")) || [];
     for(let i=0; i<posts.length; i++){
        var postsdiv = document.createElement("div");
        postsdiv.className="postsdiv"
        postsdiv.style.border="2px solid black"
        postsdiv.style.padding="10px";
        postsdiv.style.width="300px";
        postsdiv.setAttribute("indexValue", i)
        document.getElementsByClassName("socialMediaPosts")[0].append(postsdiv);

        document.getElementsByClassName("postsdiv")[i].innerHTML=`<h1>Post No:  ${i+1} </h1> <hr> <br> ID: ${JSON.stringify(posts[i].Id)} <br> author Name: ${JSON.stringify(posts[i].authorName)} 
        <br> likes: ${JSON.stringify(posts[i].likes)} <br> tags: ${JSON.stringify(posts[i].tags)} <br> content: ${JSON.stringify(posts[i].content)}`;
       
         var Post_Delete_Edit = document.createElement("div");
         Post_Delete_Edit.className = "Post_Delete_Edit_Div";
         Post_Delete_Edit.style.border="2px solid black"
         Post_Delete_Edit.style.padding="20px";
         Post_Delete_Edit.style.width="200px";
         document.getElementsByClassName("postsdiv")[i].append(Post_Delete_Edit);
         
         var postsDelete = document.createElement("button");
        postsDelete.className="PostDeleteButton";
        postsDelete.style.border="2px solid black";
        postsDelete.style.padding="10px";
        postsDelete.innerHTML="Delete";
        document.getElementsByClassName("Post_Delete_Edit_Div")[i].append(postsDelete);

        var postsEdit = document.createElement("button");
        postsEdit.className="PostEditButton"
        postsEdit.style.border="2px solid black"
        postsEdit.style.padding="10px";
        postsEdit.style.marginLeft="10px"
        postsEdit.innerHTML="Edit"
        document.getElementsByClassName("Post_Delete_Edit_Div")[i].append(postsEdit);

        document.getElementsByClassName("socialMediaPosts")[0].setAttribute("style","color:black")

     }
}

// G. Write a function to remove a post from the feed and update localStorage.
document.getElementsByClassName("socialMediaPosts")[0].addEventListener("click", function (element) {
   element.preventDefault();

    if (element.target.innerHTML === "Delete") {
      

        let postDiv = element.target.closest(".postsdiv");
        var posts = JSON.parse(localStorage.getItem("posts")) || [];

         var index =  postDiv.getAttribute("indexValue");
       console.log("index: ",index);

//I. Implement an alert notification after a post is successfully deleted.

        alert(`${posts[index].authorName}'s post has been successfully deleted.`);

        posts.splice(index,1)
       localStorage.setItem("posts" , JSON.stringify(posts));

         postDiv.remove();
          feedList();
    }
});

// H. Write a function to edit existing post details.
//var posts = JSON.parse(localStorage.getItem("posts"));
  var CurrentIndex = null;

document.getElementsByClassName("socialMediaPosts")[0].addEventListener("click", function (element) {
      
     element.preventDefault();

     if (element.target.innerHTML === "Edit") {

// I. Implement a confirm dialog before updating a post.
      
      var UpdateConfirm = confirm("Are you want to Update this post?");
      if(UpdateConfirm===true){
       var posts = JSON.parse(localStorage.getItem("posts")) || [];
        document.getElementsByClassName("socialMediaPosts")[0].innerHTML="";

        var socialMediaForm = document.getElementsByClassName("socialMediaForm")[0];
        socialMediaForm.style.display="block";
        socialMediaForm.style.width="600px";
        socialMediaForm.style.backgroundColor="white";
        document.getElementById("formHeading").innerHTML="Update your Post"
        document.getElementById("submitBtn").setAttribute("style","display:none");
        document.getElementById("saveUpdateButton").setAttribute("style","display:block");
        document.getElementById("cancelUpdateButton").setAttribute("style","display:block");
        

        let postDiv = element.target.closest(".postsdiv");
         var index = postDiv.getAttribute("indexValue");
         
         document.getElementById("author").value = posts[index].authorName;
         document.getElementById("likes").value = posts[index].likes;
             var tag1 =  posts[index].tags[0];
              var tag2 =  posts[index].tags[1];
           document.getElementById("tags").value =`${tag1} ${tag2}`;
      document.getElementById("content").value = posts[index].content;
      CurrentIndex=index;

      }

 }
})

document.getElementById("saveUpdateButton").addEventListener("click", updatedPost);

function updatedPost(event){
     var posts = JSON.parse(localStorage.getItem("posts")) || [];
   console.log("hi hello!")
    event.preventDefault();
    console.log("CurrentIndex1: ",CurrentIndex);

    posts[CurrentIndex].authorName =  document.getElementById("author").value;
    posts[CurrentIndex].likes = document.getElementById("likes").value;
    posts[CurrentIndex].tags =  document.getElementById("tags").value.split(" ");
    posts[CurrentIndex].content = document.getElementById("content").value;

     localStorage.setItem("posts", JSON.stringify(posts));

     alert("your post has been successfully Updated")
      document.getElementsByClassName("socialMediaForm")[0].setAttribute("style","display:none");

   
  }

 document.getElementById("cancelUpdateButton").addEventListener("click",cancelUpdate);

  function cancelUpdate(event){
   event.preventDefault(); 
   document.getElementsByClassName("socialMediaForm")[0].setAttribute("style","display:none");
  }


