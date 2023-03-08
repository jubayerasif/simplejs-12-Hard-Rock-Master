const searchSongs = () => {
    const searchText = document.getElementById("search-field").value;
    const url = `https://api.lyrics.ovh/suggest/${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then((data) => displaySongs(data))
        .catch((error) =>
            displayError("Something Went Wrong!! Please try again later")
        ) ;
};

const displaySongs = (songs) => {

}

