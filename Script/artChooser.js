//HOW TO EDIT IMAGES
// 1. Add your images to a folder under Images. You can have more than one.
// 1. Currently the scripts chooses a folder at random.
// 1. Change the folders you use in "getFolders()"
// 2. Change the artists you have in "getArtists()"
// 3. Change the images for each artist in "pickImage(artist)".
// 3. These are all hardcoded, so make sure you get the file-name and -type correct 

function artPicker() {
    var folders = getFolders(); //generates array of folders
    var folder = pickFolder(folders); //randomly picks a folder
    var artists = getArtists(); //generates array of artists
    var artist = pickArtist(artists); //randomly picks an artist
 
    //band = "Aephanemer";
 
    var image = pickImage(artist); //randomly picks an image from the given arist
 
    updateImageDisplay(image, folder) //updates UI elements
 }

function getFolders() {
    var folders = ["Albums","Albums1", "Albums2"]
    return folders;
}

function pickFolder(folders) {
    var choosenFolder = Math.floor((Math.random() * folders.length)); 

    return folders[choosenFolder];
}

 function getArtists() {
     var bands = ["index", "index1", "index2",
     "index3", "index4", "index5", "index6",
     "index7", "index8", "index9", "index10",];

     return bands;
 }

function pickArtist(artists) {   
    var choosenArtist = Math.floor((Math.random() * artists.length)); 

    return artists[choosenArtist];
}


function pickImage(artist) {
    images = new Map();

    switch(artist) { 
        case("index"):
            images.set("1",
            "index.jpg");
        case("index1"):
            images.set("1",
            "index1.jpg")
            break;
        case("index2"):
            images.set("1",
            "index2.jpg");
            break;
        case("index3"):
            images.set("1",
            "index3.jpg");
            break;
        case("index4"):
            images.set("1",
            "index4.jpg");
            break;
        case("index5"):
            images.set("1",
            "index5.jpg");
            break;
        case("index6"):
            images.set("1",
            "index6.jpg");
            break;
        case("index7"):
            images.set("1",
            "index7.jpg");
            break;
        case("index8"):
            images.set("1",
            "index8.jpg");
            break;r
        case("index9"):
            images.set("1",
            "index9.jpg");
            break;
        case("index10"):
            images.set("1",
            "index10.jpg");
            break;
    }

    var choosenImage = Math.floor((Math.random() * images.size) + 1);    

    choosenImage += ""; //convert to string

    return images.get(choosenImage);
}

function updateImageDisplay(image, folder) {
    document.getElementById("imageDisplayer").style.backgroundImage = "url('./Images/" + folder + "/" + image + "')";
}

