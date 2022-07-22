import "./style.css";
type Movie = {
  titleText: {
    text: string;
  };
  releaseDate: {
    year: number;
  };
  primaryImage: {
    url: string;
  };
  id: string;
};
type User = {
  email: string;
  password: string;
  id: string;
  name: string;
};
type State = {
  movies: Movie[];
  users: User[];
  favorites: Movie[];
};

let state: State = {
  movies: [],
  users: [],
  favorites: [],
};

// fetching data from the API
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c525579552mshc5c64f2d7ce0330p170318jsnd8497299cf00",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

fetch(
  "https://moviesdatabase.p.rapidapi.com/titles?info=mini_info&limit=20&page=1&titleType=movie&genre=Action&year=2022",
  options
)
  .then((response) => response.json())
  .then((response) => {
    state.movies = response.results;
    render();
    console.log(response);
    console.log(state.movies);
  });

//  function loginModal() {
//    let main = document.querySelector("main");
//    let modalWrapper = document.createElement("div");
//    modalWrapper.classList.add("modal-wrapper");
//    let modal = document.createElement("div");
//    modal.classList.add("modal");
//    let xButton = document.createElement("button");
//    xButton.classList.add("x-button");
//    xButton.innerText = "X";
//     xButton.addEventListener("click", function () {
//       modalWrapper.remove();
//     })

//    let form = document.createElement("form");
//    form.classList.add("form");
//    let email = document.createElement("input");
//    email.classList.add("email");
//    email.type = "email";
//    email.placeholder = "Email";
//    let password = document.createElement("input");
//    password.classList.add("password");
//    password.type = "password";
//    password.placeholder = "Password";
//    let submit = document.createElement("button");
//    submit.classList.add("modal-submit");
//    submit.innerText = "Login";

//    form.append(email, password, submit);
//    modal.append( form);
//    modalWrapper.append(xButton,modal);
//    main.append(modalWrapper);
//  }
// function clickOnLogin() {
//     let loginButton = document.querySelector(".login-link");
//     if(loginButton===null)return;
//     loginButton.addEventListener("click", function () {
//       loginModal();
//       // render();
//     });
//   }


// fetching data from the json file
fetch("http://localhost:3005/users")
  .then((response) => response.json())
  .then((response) => {
    state.users = response;
    render();
    console.log(state.users);
  })

  function renderAMovieCard(source) {
    let movieContainer = document.querySelector("main");
    // let main = document.querySelector("main");
    // main.innerHTML = "";

    let movieCard = document.createElement("div");
    movieCard.classList.add("single-movie-card");
    movieCard.addEventListener("click", function () {
      renderMovieDetails(source);
    });

    let cardImg = document.createElement("img");
    cardImg.className = "card-img";
    cardImg.src = source.primaryImage.url;

    movieCard.append(cardImg);

    movieContainer.appendChild(movieCard);
  }
  function renderMovieDetails(api) {
    let movieContainer = document.querySelector("main");
    movieContainer.innerHTML = "";

    let movieDetails = document.createElement("div");
    movieDetails.classList.add("movie-details");

    let movieImg = document.createElement("img");
    movieImg.className = "movie-img";
    movieImg.src = api.primaryImage.url;

    let movieDetailsContainer = document.createElement("div");
    movieDetailsContainer.classList.add("movie-details-container");

    let movieTitle = document.createElement("h1");
    movieTitle.innerHTML = api.titleText.text;

    let movieYear = document.createElement("div");
    movieYear.classList.add("year");
    movieYear.innerText = api.releaseDate.year;

    let watchNow = document.createElement("button");
    watchNow.classList.add("watch-now");
    watchNow.innerText = "Watch Now";

    let addToList = document.createElement("button");
    addToList.classList.add("add-to-list");
    addToList.innerText = "Add to List";
    addToList.addEventListener("click", function () {
      state.favorites.push(api);
      // render();
    })

    let goBack = document.createElement("button");
    goBack.classList.add("go-back");
    goBack.innerText = "↩️ Go Back";
    goBack.addEventListener("click", function () {
      let main = document.querySelector("main");
      main.innerHTML = "";
      for (let elem of state.movies) {
        renderAMovieCard(elem);
       }
    });

    movieDetailsContainer.append(movieTitle, movieYear, watchNow,addToList ,goBack);

    movieDetails.append(movieImg, movieDetailsContainer);

    movieContainer.appendChild(movieDetails);
  }
  let homeButton = document.querySelector(".home-link");
  homeButton.addEventListener("click", function () {
    let main = document.querySelector("main");
    main.innerHTML = "";
    for (let elem of state.movies) {
      renderAMovieCard(elem);
      // render();
    }
    
  })

  // change the login text to user name !Needs work
  function userNameChange(user){
    let loginButton = document.querySelector(".login-link");
  if(state.users.length!==0){
  loginButton.innerHTML = `${user.name}`;
  console.log(user.name);
  }
  }


  let favorite = document.querySelector(".favorite-link");
  favorite.addEventListener("click", function () {
    showFavorites();
    console.log(state.favorites);
  })
  function showFavorites() {
    let main = document.querySelector("main");
    main.innerHTML = "";
    let favoriteTitle = document.createElement("h1");
    favoriteTitle.innerText = "Favorites";
    favoriteTitle.classList.add("favorite-title");
    main.appendChild(favoriteTitle);
    for (let elem of state.favorites) {
      renderAMovieCard(elem);
    }
  }
  // sign up function
  function signupPage(users: User) {
    
    header.innerHTML = "";
    main.innerHTML = "";

    let headerdiv = document.createElement('div');
    headerdiv.className = "logo-text";
    let imgEL = document.createElement('img');
    imgEL.src = "./netflix-82871.png";
    imgEL.className = "logoimg"
    

    let divheaderlink = document.createElement('div');
    divheaderlink.className = "header-links";
    

    let ulel = document.createElement('ul');
    ulel.className = "header-ul";
    let liel = document.createElement('li');
    let buttonel = document.createElement('button');
    buttonel.className = "menu-link";
    buttonel.type = "button";
    buttonel.innerText = "Sign In";
 
    let divofmain = document.createElement('div');


    

    divofmain.className = "containeri";
    let h1el = document.createElement("h1");
    h1el.innerText = "Unlimited movies, TV shows, and more. ";
    let h3el = document.createElement("h3");
    h3el.innerText = "Watch anywhere. Cancel anytime.";
    let pel = document.createElement("p");
    pel.innerText = "Ready to watch? Enter your email to create or restart your membership.";
    let formel = document.createElement("form");
    formel.className = "container";
    formel.action = "#";
    let formh1 = document.createElement("h1");
    formh1.innerText = "Sign Up";
    let formelementdiv = document.createElement("div");
    formelementdiv.className = "form-element";
    let inputform = document.createElement("input");
    inputform.type = "text";
    inputform.name = "username";
    inputform.id="username";
    inputform.required;
    let formlabel = document.createElement("label");
    formlabel.className = "floating-label";
    formlabel.htmlFor= "username";
    formlabel.innerText = "Email or Phone Number";
    

    let pswdiv = document.createElement("div");
    pswdiv.className = "form-element";
    

    let inputpsw = document.createElement("input");
    inputpsw.name = "password";
    inputpsw.id = "password";
    inputpsw.required;
    inputpsw.setAttribute("type","password");

    let pswlabel = document.createElement("label");
   
    pswlabel.className = "floating-label";
    pswlabel.htmlFor = "password";
    pswlabel.innerText = "Password";
    let buttonsignup = document.createElement("button");
    buttonsignup.className = "btn";
    
    buttonsignup.innerText = "Sign Up";

    header?.append(headerdiv,divheaderlink);
    headerdiv.append(imgEL);
    liel.append(buttonel);
    ulel.append(liel);
    divheaderlink.append(ulel);

    main?.append(divofmain);
    divofmain.append(h1el,h3el,pel,formel,);
    formelementdiv.append(inputform,formlabel);
    pswdiv.append(inputpsw,pswlabel);
    formel.append(formh1,formelementdiv,pswdiv,buttonsignup);
    buttonel.addEventListener("click",signinPage)
    let user; // Variabel bosh ku do te ruhet username i userit
    let pass; // Variabel bosh ku do te ruhet pass i userit


    // Ky esht 1 funksion i cili ka 2 parametra (user, pass) qe jan info te cilat do te ruhen ne local storage
    // pasi user te regjistrohet me sukses

    function addToLocalStorage(user, pass) {

      // Ky esht 1 objekt i cili ruan te dhenat e user qe me posht do te kalohen ne local storage

      let info = [
        {
          name: user,
          pass: pass
        },
      ] 

      // Ruajtja e te dhenave ne local storage
      // "userInfo" esht thjesht emri ose ndryshe key i cili mban info e user
      // ndersa JSON.stringify(info) esht funksion i cili e kthen objektin e mesiperm info ne string pasi local storage nuk pranon objekte

      localStorage.setItem("userInfo", JSON.stringify(info));

    }
    

    // Kur forma sign up te behet submit ekzekutohet kodi i meposhtem

    formel.addEventListener('submit', (e) => {
      let username = document.getElementById('username').value;
      let password = document.getElementById('password').value;
      let user = state.users.find(user => user.email === username && user.password === password);
      
      if (inputform.value == user && inputpsw.value == pass) { // nese username ose email esht = bosh atehere bej alert mesazhin e meposhtem
       
      } else if (inputpsw.value == '') { // nese password esht = bosh atehere bej alert mesazhin e meposhtem
        e.preventDefault();
        alert('Please complete the password field to continue');
      } else {
        e.preventDefault();
        user = inputform.value; // nese kushtet e mesiperme kalohen me sukses me pas vleren te cilen user futi tek username beje assign tek variabla user pra ( user = me vleren qe futi useri )
        pass = inputpsw.value; // nese kushtet e mesiperme kalohen me sukses me pas vleren te cilen user futi tek password beje assign tek variabla pass pra ( pass = me vleren qe futi useri )
        addToLocalStorage(user, pass); // nese kushtet e mesiperme kalohen me sukses ekzekuto funksionin dhe user dhe pass si parametra te funksionit
        alert('You have successfully registered. Click Sign IN');

        // pas submit boshatis fushen e user dhe pass
        inputform.value = ''; 
        inputpsw.value = '';
      }
    })













  }

  function signinPage(){
    header.innerHTML = "";
    main.innerHTML = "";
    let headerdiv = document.createElement('div');
headerdiv.className = "logo-text";
let imgEL = document.createElement('img');
imgEL.src = "./netflix-82871.png";
imgEL.className = "logoimg"


let divheaderlink = document.createElement('div');
divheaderlink.className = "header-links";


let ulel = document.createElement('ul');
ulel.className = "header-ul";
let liel = document.createElement('li');
let buttonel1 = document.createElement('button');
buttonel1.className = "menu-link";
buttonel1.type = "button";
buttonel1.innerText = "Sign Up";




let divofmain = document.createElement('div');




divofmain.className = "containeri";

let formel = document.createElement("form");
formel.className = "container";
formel.action = "#";
let formh1 = document.createElement("h1");
formh1.innerText = "Sign In";
let formelementdiv = document.createElement("div");
formelementdiv.className = "form-element";
let inputform = document.createElement("input");
inputform.type = "text";
inputform.name = "username";
inputform.id="username";
inputform.required;
let formlabel = document.createElement("label");
formlabel.className = "floating-label";
formlabel.htmlFor= "username";
formlabel.innerText = "Email or Phone Number";


let pswdiv = document.createElement("div");
pswdiv.className = "form-element";


let inputpsw = document.createElement("input");
inputpsw.name = "password";
inputpsw.id = "password";
inputpsw.required;
inputpsw.setAttribute("type","password");

let pswlabel = document.createElement("label");

pswlabel.className = "floating-label";
pswlabel.htmlFor = "password";
pswlabel.innerText = "Password";
let buttonsignin = document.createElement("button");
buttonsignin.className = "btn";
buttonsignin.innerText = "Sign In";



header?.append(headerdiv,divheaderlink);
headerdiv.append(imgEL);
liel.append(buttonel1);
ulel.append(liel);
divheaderlink.append(ulel);

main?.append(divofmain);
divofmain.append(formel,);
formelementdiv.append(inputform,formlabel);
pswdiv.append(inputpsw,pswlabel);
formel.append(formh1,formelementdiv,pswdiv,buttonsignin);

buttonel1.addEventListener("click",signupPage)
buttonsignin.addEventListener('click',function(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let user = state.users.find(user => user.email === username && user.password === password);
    if(user!==undefined){
      main.innerHTML = "";
      for (let elem of state.movies) {
        renderAMovieCard(elem);
        console.log(elem);
      }
      console.log(user.name);
      // loginText?.innerHTML = user.name;
      render();
    }
    else{
      alert('Invalid username or password');
    }
  })
}
  
  
    
  
  
  

    // <ul class="navul">
    //         <li><a class="home-link" href="#">Home</a></li>
    //         <li><a class="favorite-link" href="#">Favorite</a></li>
    //         <li><a class="login-link" href="#">Login</a></li>
    //       </ul>
   
   
    

    
    // <li><a class="login-link" href="#">Login</a></li>

    // main.innerHTML = "";

    // let loginContainer = document.createElement('div');
    // loginContainer.className = "login-container";
    // let loginWrapper = document.createElement('div');
    // loginWrapper.className = "login-wrapper";

    // let loginForm = document.createElement('form');
    // loginForm.className = "login-form";
    // loginForm.action = "#";
    // let loginFormH1 = document.createElement('h1');
    // loginFormH1.innerText = "Sign In";
    // let loginFormDiv = document.createElement('div');
    // loginFormDiv.className = "form-element";
    // let loginFormInput = document.createElement('input');
    // loginFormInput.type = "text";
    // loginFormInput.name = "username";
    // loginFormInput.id="username";
    // loginFormInput.required;
    
    // let passwordDiv = document.createElement('div');
    // passwordDiv.className = "form-element";
    // let loginFormInputPassword = document.createElement('input');
    // loginFormInputPassword.name = "password";
    // loginFormInputPassword.id = "password";
    // loginFormInputPassword.required;
    // loginFormInputPassword.setAttribute("type","password");

    // let submitButton = document.createElement('button');
    // submitButton.className = "submit-btn";
    // submitButton.innerText = "Sign In";
    // submitButton.addEventListener('click',function(){
    //   let username = document.getElementById('username').value;
    //   let password = document.getElementById('password').value;
    //   let user = state.users.find(user => user.email === username && user.password === password);
    //   if(user!==undefined){
    //     main.innerHTML = "";
    //     for (let elem of state.movies) {
    //       renderAMovieCard(elem);
    //       console.log(elem);
    //     }
    //     console.log(user.name);
    //     // loginText?.innerHTML = user.name;
    //     render();
    //   }
    //   else{
    //     alert('Invalid username or password');
    //   }
    // })
    // loginForm.append(loginFormH1,loginFormDiv,passwordDiv,submitButton);
    // loginFormDiv.append(loginFormInput,loginFormInputPassword);
    // passwordDiv.append(loginFormInputPassword);
    // loginWrapper.append(loginForm);
    // loginContainer.append(loginWrapper);
    // main.append(loginContainer);

  

  function render() {
    // clickOnLogin(); 
    // for (let elem of state.movies) {
    //   renderAMovieCard(elem);
    // }
    signupPage();
    userNameChange();
  }
