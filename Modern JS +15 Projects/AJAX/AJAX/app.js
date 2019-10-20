document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // Create new XMLHTTPRequest Object
    const xhr = new XMLHttpRequest();

    // Open the connection
    xhr.open('GET', 'data.txt', true);

    // // Execution of the AJAX call
    // xhr.onload = function () {
    //     console.log(this.status);
    //     if (this.status === 200) {
    //         document.getElementById('output').innerHTML = `<h3>${this.responseText}</h3>`
    //     }
    // }

    xhr.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
        }
    }
    // Send the request
    xhr.send();
}