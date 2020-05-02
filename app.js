const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

const citiesTypeahead = inputValue => {

    const data = [
        {
          "city": "Sofia"
        },
        {
            "city": "Pernik"
        },
        {
            "city": "Burgas"
        },
        {
            "city": "Varna"
        },
        {
            "city": "Plovdiv"
        },
        {
            "city": "Montana"
        },
        {
            "city": "Blagoevgrad"
        },
        {
            "city": "Kurdzhali"
        },
        {
            "city": "Stara Zagora"
        },
        {
            "city": "Pleven"
        }
    ]

    let filteredData = data.filter(item => {
        if(search.value.length > 0) {
            return item.city.toLowerCase().includes(inputValue.toLowerCase())
        }
    });
    renderCities(filteredData);
}

const renderCities = cities => {
    if(cities.length > 0 ) {
        const html = cities.map(single => `
            <div class="card">
                <h4>${single.city}</h4>
            </div>
        `).join('');

        matchList.innerHTML = html;
    } else {
        matchList.innerHTML = null;
    }
}

search.addEventListener('input', () => citiesTypeahead(search.value));

