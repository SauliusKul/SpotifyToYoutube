// export async function authorizeSpotify() {
//     const url = `https://accounts.spotify.com/authorize?`

//     const paramsString = new URLSearchParams();

//     paramsString.set('response_type', 'code');
//     paramsString.set('client_id', '9e9a380b38b04821819246d96bddffe1');
//     paramsString.set('redirect_uri', 'http://localhost:5173/');
//     paramsString.set('response_type', 'code');
//     paramsString.set('state', 'AFASDGASG');
    
//     const response = await fetch(url + paramsString, {
//         headers: {
//             'Access-Control-Allow-Origin': '*'
//         }
//     });

//     const data = await response.json();

//     return data
// }