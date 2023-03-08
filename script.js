
const gifArea = document.querySelector('#gif-area');
const searchInput = document.querySelector('#search');

// add gif using ajax result

function addGif(res) {
  const gifUrl = res.data[Math.floor(Math.random() * res.data.length)].images.original.url;
  const newGif = document.createElement('img');
  newGif.src = gifUrl;
  const newCol = document.createElement('div');
  newCol.appendChild(newGif);
  gifArea.appendChild(newCol);
}

// handle form submissions

const form = document.querySelector('form');
form.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const searchTerm = searchInput.value;
  searchInput.value = '';
  const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
  const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`);
  addGif(response.data);
});

// removes gif
const removeBtn = document.querySelector('#remove');
removeBtn.addEventListener('click', () => {
  gifArea.innerHTML = '';
});
