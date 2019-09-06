// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
	//Creating Header div and adding class of .header
	const div1 = document.createElement('div');
	const dateHere = document.createElement('span');
	const titleH1 = document.createElement('h1');
	const tempHere = document.createElement('span');

	//adding css classes already defined to the elements in the DOM
	div1.classList.add('header');
	dateHere.classList.add('date');
	tempHere.classList.add('temp');

	//creating text content for elements
	dateHere.textContent = 'SMARCH 28, 2019';
	titleH1.textContent = 'Lambda Times';
	tempHere.textContent = '98°';

	//append created elements to div1 the parent container for the header
	div1.append(dateHere);
	div1.append(titleH1);
	div1.append(tempHere);

	//return div1 so it can be utilized
	return div1;
}

//Appending Header function to the .header-container
document.querySelector('.header-container').append(Header());
