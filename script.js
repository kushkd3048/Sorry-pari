const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const message = document.getElementById("message");
const music = document.getElementById("music");
const forgiveBtn = document.getElementById("forgiveBtn");
const stars = document.getElementById("stars");

// ⭐ Create stars
for(let i=0;i<180;i++){

    let star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";

    star.style.animationDelay=Math.random()*3+"s";

    stars.appendChild(star);

}

// ❤️ Floating Hearts
function createHeart(){

    let heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML=["❤️","💖","💕","💗","💞"][Math.floor(Math.random()*5)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

}

setInterval(createHeart,350);

// 🌹 Open Letter
openBtn.onclick=()=>{

    envelope.style.display="none";

    message.classList.remove("hidden");

    music.play().catch(()=>{});

}

// 💖 Final Button
forgiveBtn.onclick=()=>{

    forgiveBtn.innerHTML="🥹 Thank You ❤️";

    alert("No matter what your answer is, I'll always respect your decision. ❤️");

    for(let i=0;i<30;i++){
        setTimeout(createHeart,i*80);
    }

}
