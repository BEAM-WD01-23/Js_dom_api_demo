//i show it on the browser-console
    //
    //console.log('https://reqres.in/api/users');
    //
//ii fetch it 
    //
    // fetch('https://reqres.in/api/users')
    // // .then(response=>console.log(response.json()))
    // .then(response => response.json())
    // .then(result => console.log(result))
    // .catch(err => console.log('error happens fetching api ',err))

//
//iii fetching and printing data on the dom
    //
    //
    // const myBtn = document.getElementById('btn');
    // myBtn.addEventListener('click', showPerson);

    // function showPerson(){
    //     const firstName = document.getElementById('firstName');
    //     const lastName = document.getElementById('lastName');
    //     const email = document.getElementById('email');
    //     const image = document.getElementById('image');
    //     //console.log(firstName, lastName, email, image)

    //     fetch('https://reqres.in/api/users')
    //     .then(res => res.json())
    //     //.then(result => console.log(result))//;//we ve to pass through data ...
    //     .then(result => {
    //         firstName.innerHTML = result.data[0].first_name;
    //         lastName.innerHTML = result.data[0].last_name;
    //         email.innerHTML = result.data[0].email;
    //         image.innerHTML = `<img src="${result.data[0].avatar}" />`;//it shows only one person ...
    //         })
    //     .catch(err => console.log(err))
    // }
    //
    //
//iv shows new person upon every click 
const myBtn = document.getElementById('btn');
myBtn.addEventListener('click', showPerson);

let indexOfPeople = 0;
function showPerson(){
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const image = document.getElementById('image');
    //console.log(firstName, lastName, email, image)

    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(result => {
        let myAllData = result.data;
        let randomPerson = Math.floor(Math.random()*myAllData.length);
        //console.log(randomPerson);//index of my array shown
        if(randomPerson === indexOfPeople){
            indexOfPeople = (randomPerson + 1)
        }else{
            indexOfPeople = randomPerson
        }
        const eachData = myAllData[indexOfPeople];
            firstName.innerHTML = eachData.first_name;
            lastName.innerHTML = eachData.last_name;
            email.innerHTML = eachData.email;
            image.innerHTML = `<img src="${eachData.avatar}" />`;
        })
    .catch(err => console.log(err))
}
