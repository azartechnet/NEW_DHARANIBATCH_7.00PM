function getData()
{
    return new Promise((resolve, reject) => {
        let success = true; // Change this to false to test rejection   
        setTimeout(() => {
            if (success) {
                resolve("Data fetched successfully!");
            }
            else {
                reject("Failed to fetch data!");
            }
        }, 2000);

    });
}
getData()
    .then((message) => {
        console.log(message);
    }
    )
    .catch((error) => {
        console.error(error);
    }
    );