const url = 'https://swapi.dev/api/people';
fetch(url)
.then(response => {
    if(response.ok) {
        return response.json();
    } else {
    throw new Error(response.statusText);
    console.log("Error. Response not successful")
}
})
.then( data => {
    const buttonsN = document.querySelector('#buttonsN');
    const buttonsP = document.querySelector('#buttonsP');
    const swList = document.querySelector('#apidata');
    console.log(data);
    swList.innerHTML = data.results
    .map(item => `<li>${item.name}</li>`)
    .join('');
    buttonsN.addEventListener('click', () => {
        fetch(data.next)
            .then(response => {
            if(response.ok) {
                return response.json();
            } else {
            throw new Error(response.statusText);
            console.log("Error. Response not successful")
            }
        })
        .then( data => {
            // const swList = document.querySelector('#apidata');
            // console.log(data);
            swList.innerHTML = data.results
            .map(item => `<li>${item.name}</li>`)
            .join('');
      });
      buttonsP.addEventListener('click', () => {
        fetch(data.previous)
            .then(response => {
            if(response.ok) {
                return response.json();
            } else {
            throw new Error(response.statusText);
            console.log("Error. Response not successful")
            }
        })
        .then( data => {
            // const swList = document.querySelector('#apidata');
            // console.log(data);
            swList.innerHTML = data.results
            .map(item => `<li>${item.name}</li>`)
            .join('');
      });


    
})
.catch(error => {
    console.log('There was an error!')
});
});
});