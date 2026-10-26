function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve({ id: 1, name: "Ali" });
            } else {
                reject("Failed to fetch user data");
            }
        },2000);
    })
}

async function displayUserData(){
    const user = await fetchUserData();
    console.log(user)
}
displayUserData();