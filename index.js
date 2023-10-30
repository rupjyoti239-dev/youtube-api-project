const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#searchBtn');

searchBtn.addEventListener('click', () => {
  validation();
  // getData();
})





const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1b64abe1b0msh3eef03e4ef8f7d5p17db30jsnacb81641c35c',
    'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
  }
};

let para = ""


const validation = () => {
  if (searchInput.value === "") {
    document.querySelector('.error').innerHTML = "*Enter input"
  } else {
    document.querySelector('.error').innerHTML = ""


    para = searchInput.value;

    fetch(`https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${para}`, options)
      .then(response => response.json())
      .then(data => {
        // console.log(data.videos);
        // let output = '';
        data.videos.map(item => {
          let card = document.createElement('div');
          card.classList.add('card');

          let thumb = document.createElement('img');
          thumb.setAttribute('src', `${item.thumbnail}`);
          card.appendChild(thumb);

          let textDiv = document.createElement('div');
          textDiv.classList.add('text');
          card.appendChild(textDiv);



          let title = document.createElement('span');
          title.classList.add('title');
          title.innerHTML = `${item.title}`;
          textDiv.appendChild(title)

          let view = document.createElement('span');
           view.innerHTML = `${item.views}`
           textDiv.appendChild(view);

          let link = document.createElement('a');
          link.href = `${item.link}`;
          link.text ='click here';
          textDiv.appendChild(link)


          document.querySelector('.movieContainer').appendChild(card)

          // console.log(item.title);
          // console.log(item.link);
          // console.log(item.thumbnail);
        })
      })
      .catch(err => console.error(err));

    searchInput.value = "";


  }
}

