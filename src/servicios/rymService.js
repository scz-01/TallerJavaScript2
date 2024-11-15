export async function getAllCharactesr(url) {
    return new Promise( (resolve, reject) =>  {
        fetch (url)
        .then( (response) => response.json() )
        .then( data => {resolve(data)} )
    } )
}