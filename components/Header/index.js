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
	div1.classList.add('header');

	//Creating dateHere for date contained in span
	const dateHere = document.createElement('span');
	dateHere.classList.add('date');
	dateHere.textContent = 'SMARCH 28, 2019';
	div1.append(dateHere);

	// h1 to hold Lambda Times Text
	const titleH1 = document.createElement('h1');
	titleH1.textContent = 'Lambda Times';
	div1.append(titleH1);

	//Span to hold temperature
	const temp = document.createElement('span');
	temp.textContent = '98°';
	div1.append('temp');

	return div1;
}

//Appending Header function to the .header-container
document.querySelector('.header-container').append(Header());
