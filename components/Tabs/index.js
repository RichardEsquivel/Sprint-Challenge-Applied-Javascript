// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// Using axios to send get request to lambda-times-backend to build new tabs component in the DOM

axios.get('https://lambda-times-backend.herokuapp.com/topics').then((response) => {
	response.data.topics.forEach((tabsNew) => {
		const hotTopics = document.querySelector('.topics');
		hotTopics.append(topicsCreate(tabsNew));
	});
});

//this function will be called within the Promise of axios.get in order to iterate through and create
//the new tab tab topics by building the elements and applying the needed class styles
function topicsCreate(responses) {
	const divTab = document.createElement('div');
	divTab.classList.add('tab');
	divTab.textContent = responses;
	return divTab;
}
