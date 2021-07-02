export function fetchJSON(url) {
    return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json(); 
            }
        })
        .then(jsonObject => {
            console.log(jsonObject);
        })
        .catch(function(error) {
            console.log(error);
        }); 
    }