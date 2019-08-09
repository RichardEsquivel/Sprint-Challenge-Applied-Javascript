// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

//creating axios.get in order to create a component for each article in the list

axios.get('https://lambda-times-backend.herokuapp.com/articles').then((response) => {
	Object.values(response.data.articles).forEach((responses) => {
		responses.forEach((responses) => {
			const buildsCards = document.querySelector('.cards-container');
			buildsCards.append(cardCreate(responses));
		});
	});
});

//Creating function for building DOM element of the cards, using axios Data source responses to build
//out content and src of element content

function cardCreate(responses) {
	const cards = document.createElement('div');
	const headlines = document.createElement('div');
	const authors = document.createElement('div');
	const imgContainer = document.createElement('div');
	const newImgs = document.createElement('img');
	const authorNames = document.createElement('span');

	//adding class lists for styling of elements
	cards.classList.add('card');
	headlines.classList.add('headline');
	authors.classList.add('author');
	imgContainer.classList.add('img-container');

	headlines.textContent = responses.headline;
	newImgs.src = responses.authorPhoto;
	authorNames.textContent = responses.authorName;

	//Appending elements to each other to build out the div class of card
	imgContainer.append(newImgs);
	authors.append(imgContainer);
	authors.append(authorNames);
	headlines.append(authors);
	cards.append(headlines);

	return cards;
}
