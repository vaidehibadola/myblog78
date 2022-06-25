var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    
    var updatedImage = images [i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("https://i.postimg.cc/MGn9GJXw/family.jpg").src = updatedImage;
    document.getElementById("https://i.postimg.cc/qqyYvVbq/grandpa.jpg").src = updatedImage;
    document.getElementById("https://i.postimg.cc/wjMnFtMX/father.jpg").src = updatedImage;
    document.getElementById("https://i.postimg.cc/5ymDKL83/bro.jpg").src= updatedImage;
    document.getElementById("https://i.postimg.cc/JnL6wtrd/sister.jpg").src= updatedImage;
    document.getElementById("https://i.postimg.cc/bw5W5zSK/mother.jpg").src= updatedImage;
    
    
    var updatedName = images [i] ;
    document.getElementById("family_member_name").innerHTML = updatedName;
    document.getElementById("Family book").innerHTML = updatedName;
    document.getElementById("Ranbir Singh").innerHTML = updatedName;
    document.getElementById("Diljeet Singh").innerHTML = updatedName;
    document.getElementById("Rocky Singh").innerHTML = updatedName;
    document.getElementById("Alia Singh").innerHTML= updatedName;
    document.getElementById("Soni Singh").innerHTML= updatedName;
    
    
        

}
