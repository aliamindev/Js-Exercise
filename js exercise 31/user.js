async function fetchUserData(){
    try{
        console.log("fetching user data");
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const user = await response.json();
        console.log(user);

    }catch(error){
        console.log(error);
    }
}
fetchUserData();