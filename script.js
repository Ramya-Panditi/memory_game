document.addEventListener("DOMContentLoaded", ()=>{
    const cards =[
        {
            name:"fries",
            img: "images/fries.png"
        },
        {
            name:"cheeseburger",
            img: "images/cheeseburger.png"
        },
        {
            name:"fries",
            img: "images/fries.png"
        },
        {
            name:"cheeseburger",
            img: "images/cheeseburger.png"
        },
        
        {
            name:"hotdog",
            img: "images/hotdog.png"
        },
        
        {
            name:"ice-cream",
            img: "images/ice-cream.png"
        },
        {
            name:"ice-cream",
            img: "images/ice-cream.png"
        },
        {
            name:"milkshake",
            img: "images/milkshake.png"
        },
        {
            name:"hotdog",
            img: "images/hotdog.png"
        },
        {
            name:"milkshake",
            img: "images/milkshake.png"
        },
        {
            name:"pizza",
            img: "images/pizza.png"
        },
        {
            name:"pizza",
            img: "images/pizza.png"
        }
    ]
    
    var gifs = ["https://clipart-library.com/images/BigrBqbi8.gif","https://media.tenor.com/GCqEawGCfeYAAAAj/sorry-please-try-again-crabby-crab.gif"];
    cards.sort(()=>0.5-Math.random());;//sorts the array randomly shuffling the array
    const grids = document.querySelector(".grid");
    var gif = document.getElementById("gif");

    function create(){
        for(let i=0;i<cards.length;i++){
            const card = document.createElement("img");
            card.src = "images/blank.png";
            card.setAttribute("data-id",i);
            // card.style.position = "absolute";
            card.addEventListener("mouseover", function() {
                card.style.transform = "scale(1.2)";
            });
            card.addEventListener("mouseout", function() {
                card.style.transform = "scale(1)";
            });
            card.addEventListener("click",flipCard);
            grids.appendChild(card);
        }
    }
    create();
    var res = document.getElementById("result");
    var cardsChosen = [];
    var idChosen = [];
    function flipCard(){
        const id = this.getAttribute("data-id");
        this.src = cards[id].img;
        cardsChosen.push(cards[id].name);
        idChosen.push(id);
        if(cardsChosen.length === 2){
            setTimeout(checkMatch,500);
        }
        
    }
    var score = 0;
    function checkMatch(){
        var flippedcards = document.querySelectorAll('.grid img');
        if(cardsChosen[0]=== cardsChosen[1]){
            alert('YOU FOUND A MATCH');
            score++;
            res.innerHTML = `${score}`;
            flippedcards[idChosen[0]].src = "images/white.png";
            flippedcards[idChosen[1]].src = "images/white.png";
            flippedcards[idChosen[1]].removeEventListener("click",flipCard);
            flippedcards[idChosen[0]].removeEventListener("click",flipCard);
            gif.src = gifs[0];
            console.log("ITS A MATCH");
        }
        else{
            flippedcards[idChosen[0]].src = "images/blank.png";
            flippedcards[idChosen[1]].src = "images/blank.png";
            gif.src = gifs[1];
            console.log("ITS NOT A OAJdidw A MATCH");
        
        }
        cardsChosen = [];
        idChosen = [];
    
    }


})



