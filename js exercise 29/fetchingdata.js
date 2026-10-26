async function fetchData(){
    console.log("fetching user Data");
    const response = await fetch ('https://jsonplaceholder.typicode.com/comments');
    const data = await response.json();
    console.log("response: ", data[0].email);
}
fetchData();