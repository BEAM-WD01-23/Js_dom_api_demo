//i
    //open the api on my console
       //console.log('https://random-word-api.herokuapp.com/all');

//ii
    //
    fetch('https://random-word-api.herokuapp.com/all')
    //.then(res => console.log(res.json()))
    .then(res=>res.json())
    .then(result =>{
        //console.log(result);
        const displayRersult = document.getElementById('displayRersult');
        //displayRersult.innerHTML = result;
        result.forEach(item=>{
            const createDiv = document.createElement('div');
            createDiv.classList = ('newClass');
            createDiv.innerHTML = item;

            displayRersult.appendChild(createDiv);
        })

    })

    //the old way of fetching api ...
    //
    //  var xhr = new XMLHttpRequest();
    //             xhr.open('GET', 'https://api.example.com/data', true);
    //             xhr.onreadystatechange = function() {
    //               if (xhr.readyState === 4 && xhr.status === 200) {
    //                 var response = JSON.parse(xhr.responseText);
    //                 // Process the response data
    //               }
    //             };
    //             xhr.send();