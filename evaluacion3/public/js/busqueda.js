function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobile-menu").style.width = "0";
}

document.addEventListener("keyup", e=>{

   if(e.target.matches("#buscador")){

    if(e.key ==="Escape")e.target.value = ""

   document.querySelectorAll(".carro").forEach(carros =>{

carros.textContent.toLowerCase().includes(e.target.value.toLowerCase()) 
    ?carros.classList.remove("filtro")
    :carros.classList.add("filtro")

   })

   }

})


const searchContainer = document.querySelector('.search-input-box');
const inputSearch = searchContainer.querySelector('.buscador');
const boxSuggestions = document.querySelector(
	'.car'
);

const searchLink = document.querySelector('.a');

inputSearch.onkeyup = e => {
	let userData = e.target.value;
	let emptyArray = [];

	if (userData) {
		emptyArray = suggestions.filter(data => {
			return data
				.toLocaleLowerCase()
				.startsWith(userData.toLocaleLowerCase());
		});

		emptyArray = emptyArray.map(data => {
			return (data = `<li>${data}</li>`);
		});
		searchContainer.classList.add('active');
		showSuggestions(emptyArray);

		let allList = boxSuggestions.querySelectorAll('li');

		allList.forEach(li => {
			li.setAttribute('onclick', 'select(this)');
		});
	} else {
		searchContainer.classList.remove('active');
	}
};

function select(element) {
	let selectUserData = element.textContent;
	inputSearch.value = selectUserData;

	searchLink.href = `https://www.google.com/search?q=${inputSearch.value}`;
	searchContainer.classList.remove('active');
}

const showSuggestions = list => {
	let listData;

	if (!list.length) {
		userValue = inputSearch.value;
		listData = `<li>${userValue}</li>`;
	} else {
		listData = list.join(' ');
	}
	boxSuggestions.innerHTML = listData;
};