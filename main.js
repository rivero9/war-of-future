"use strict";

// preload-image
let images = [];
const preload = preImg =>{
    for (let i = 0; i < preImg.length; i++) {
        images[i] = new Image();
        images[i].src = `img/${preImg[i]}.png`;
    }
}
preload([
    "m-1",
    "m-2",
    "m-3",
    "w-1",
    "w-2",
    "w-3",
    "c-1",
    "c-2",
    "c-3"
])
// game
let map = [
    "c","c","c",
    "c","c","c",
    "c","c","c"
];
let player = "x";
let win = false;

const init = document.getElementById('init');
init.addEventListener('click',()=>{
    const panel = document.querySelector('.panel');
    document.body.removeChild(panel);
    panelMenu()
    
});
const winner = scr =>{
    const score = document.getElementById(`score-${scr}`);
    score.textContent = parseInt(score.textContent)+1;
    win = true;
    const game = document.querySelector('.game_map');
    const gameB = document.createElement('DIV');
    gameB.classList.add('game_map_before');
    game.appendChild(gameB);
    return gameB;
}
const play = (plyr,c) =>{
    map[c] = plyr;
    // verify
    if ((map[0] == plyr) && (map[1] == plyr) && (map[2] == plyr)){
        const game = winner(player);
        return game.style.transform = "translateY(28px)";
    } else if ((map[3] == plyr) && (map[4] == plyr) && (map[5] == plyr)){
        const game = winner(player);
        return game.style.transform = "translateY(93px)";
    } else if ((map[6] == plyr) && (map[7] == plyr) && (map[8] == plyr)){
        const game = winner(player);
        return game.style.transform = "translateY(158px)";
    }  else if ((map[0] == plyr) && (map[3] == plyr) && (map[6] == plyr)){
        const game = winner(player);
        return game.style.transform = "rotate(90deg) translate(95px,65px)";
    }  else if ((map[1] == plyr) && (map[4] == plyr) && (map[7] == plyr)){
        const game = winner(player);
        return game.style.transform = "rotate(90deg) translate(95px,0px)";
    }  else if ((map[2] == plyr) && (map[5] == plyr) && (map[8] == plyr)){
        const game = winner(player);
        return game.style.transform = "rotate(90deg) translate(95px,-66px)";
    }  else if ((map[0] == plyr) && (map[4] == plyr) && (map[8] == plyr)){
        const game = winner(player);
        game.style.width = "255px";
        game.style.transform = "rotate(45deg)";
        game.style.top = "48%";
        return game.style.left = "-30px";
    }  else if ((map[2] == plyr) && (map[4] == plyr) && (map[6] == plyr)){
        const game = winner(player);
        game.style.width = "255px";
        game.style.transform = "rotate(-45deg)";
        game.style.top = "48%";
        return game.style.left = "-30px";
    } else {
        let c = 0;
        map.forEach(cs =>{
            cs != "c" ? c++ : c=c
        });
        if (c == 9){
            const cs = document.querySelectorAll('.cs');
            map = [
                "c","c","c",
                "c","c","c",
                "c","c","c"
            ];
            setTimeout(()=>{
                return cs.forEach(c =>{
                    c.innerHTML = '';
                })
            }, 500);
        } else if (sessionStorage.getItem('mode') == 'vc'){
            setTimeout(()=>{
                return playIA();                
            }, 400);
        }
    }
}
const playIA = ()=>{
    const cibort = sessionStorage.getItem('p2');
    const at = document.createElement('H3');
    at.classList.add("o");
    at.textContent = "o";
    // ofensive
    // row
    if ((map[0] == "o") && (map[1] == "o") && (map[2] == "c")){
        const cs = document.getElementById('c-3');
        cs.appendChild(at);
        map[2] = "o";
        const game = winner("o");
        return game.style.transform = "translateY(28px)";
    }
    else if ((map[1] == "o") && (map[2] == "o") && (map[0] == "c")){
        const cs = document.getElementById('c-1');
        cs.appendChild(at);
        map[0] = "o";
        const game = winner("o");
        return game.style.transform = "translateY(28px)";
    }
    else if ((map[0] == "o") && (map[2] == "o") && (map[1] == "c")){
        const cs = document.getElementById('c-2');
        cs.appendChild(at);
        map[1] = "o";
        const game = winner("o");
        return game.style.transform = "translateY(28px)";
    }
    else if ((map[3] == "o") && (map[4] == "o") && (map[5] == "c")){
        const cs = document.getElementById('c-6');
        cs.appendChild(at);
        map[5] = "o";
        const game = winner("o");
        return game.style.transform = "translateY(93px)";
    }
    else if ((map[4] == "o") && (map[5] == "o") && (map[3] == "c")){
        const cs = document.getElementById('c-4');
        cs.appendChild(at);
        map[3] = "o";
        const game = winner("o");
        return game.style.transform = "translateY(93px)";
    }
    else if ((map[3] == "o") && (map[5] == "o") && (map[4] == "c")){
        const cs = document.getElementById('c-5');
        cs.appendChild(at);
        map[4] = "o";
        const game = winner("o");
        return game.style.transform = "translateY(93px)";
    }
    else if ((map[6] == "o") && (map[7] == "o") && (map[8] == "c")){
        const cs = document.getElementById('c-9');
        cs.appendChild(at);
        map[8] = "o";
        const game = winner("o");
        return game.style.transform = "translateY(158px)";
    }
    else if ((map[7] == "o") && (map[8] == "o") && (map[6] == "c")){
        const cs = document.getElementById('c-7');
        cs.appendChild(at);
        map[6] = "o";
        const game = winner("o");
        return game.style.transform = "translateY(158px)";
    }
    else if ((map[6] == "o") && (map[8] == "o") && (map[7] == "c")){
        const cs = document.getElementById('c-8');
        cs.appendChild(at);
        map[7] = "o";
        const game = winner("o");
        return game.style.transform = "translateY(158px)";
    }
    // column
    else if ((map[0] == "o") && (map[3] == "o") && (map[6] == "c")){
        const cs = document.getElementById('c-7');
        cs.appendChild(at);
        map[6] = "o";
        const game = winner("o");
        return game.style.transform = "rotate(90deg) translate(95px,65px)";
    }
    else if ((map[3] == "o") && (map[6] == "o") && (map[0] == "c")){
        const cs = document.getElementById('c-1');
        cs.appendChild(at);
        map[0] = "o";
        const game = winner("o");
        return game.style.transform = "rotate(90deg) translate(95px,65px)";
    }
    else if ((map[0] == "o") && (map[6] == "o") && (map[3] == "c")){
        const cs = document.getElementById('c-4');
        cs.appendChild(at);
        map[3] = "o";
        const game = winner("o");
        return game.style.transform = "rotate(90deg) translate(95px,65px)";
    }
    else if ((map[1] == "o") && (map[4] == "o") && (map[7] == "c")){
        const cs = document.getElementById('c-8');
        cs.appendChild(at);
        map[7] = "o";
        const game = winner("o");
        return game.style.transform = "rotate(90deg) translate(95px,0px)";
    }
    else if ((map[4] == "o") && (map[7] == "o") && (map[1] == "c")){
        const cs = document.getElementById('c-2');
        cs.appendChild(at);
        map[1] = "o";
        const game = winner("o");
        return game.style.transform = "rotate(90deg) translate(95px,0px)";
    }
    else if ((map[1] == "o") && (map[7] == "o") && (map[4] == "c")){
        const cs = document.getElementById('c-5');
        cs.appendChild(at);
        map[4] = "o";
        const game = winner("o");
        return game.style.transform = "rotate(90deg) translate(95px,0px)";
    }
    else if ((map[2] == "o") && (map[5] == "o") && (map[8] == "c")){
        const cs = document.getElementById('c-9');
        cs.appendChild(at);
        map[8] = "o";
        const game = winner("o");
        return game.style.transform = "rotate(90deg) translate(95px,-66px)";
    }
    else if ((map[5] == "o") && (map[8] == "o") && (map[2] == "c")){
        const cs = document.getElementById('c-3');
        cs.appendChild(at);
        map[2] = "o";
        const game = winner("o");
        return game.style.transform = "rotate(90deg) translate(95px,-66px)";
    }
    else if ((map[2] == "o") && (map[8] == "o") && (map[5] == "c")){
        const cs = document.getElementById('c-6');
        cs.appendChild(at);
        map[5] = "o";
        const game = winner("o");
        return game.style.transform = "rotate(90deg) translate(95px,-66px)";
    }
    // /
    else if ((map[0] == "o") && (map[4] == "o") && (map[8] == "c")){
        const cs = document.getElementById('c-9');
        cs.appendChild(at);
        map[8] = "o";
        const game = winner("o");
        game.style.width = "255px";
        game.style.transform = "rotate(45deg)";
        game.style.top = "48%";
        return game.style.left = "-30px";
    }
    else if ((map[4] == "o") && (map[8] == "o") && (map[0] == "c")){
        const cs = document.getElementById('c-1');
        cs.appendChild(at);
        map[0] = "o";
        const game = winner("o");
        game.style.width = "255px";
        game.style.transform = "rotate(45deg)";
        game.style.top = "48%";
        return game.style.left = "-30px";
    }
    else if ((map[0] == "o") && (map[8] == "o") && (map[4] == "c")){
        const cs = document.getElementById('c-5');
        cs.appendChild(at);
        map[4] = "o";
        const game = winner("o");
        game.style.width = "255px";
        game.style.transform = "rotate(45deg)";
        game.style.top = "48%";
        return game.style.left = "-30px";
    }
    else if ((map[2] == "o") && (map[4] == "o") && (map[6] == "c")){
        const cs = document.getElementById('c-7');
        cs.appendChild(at);
        map[6] = "o";
        const game = winner("o");
        game.style.width = "255px";
        game.style.transform = "rotate(-45deg)";
        game.style.top = "48%";
        return game.style.left = "-30px";
    }
    else if ((map[4] == "o") && (map[6] == "o") && (map[2] == "c")){
        const cs = document.getElementById('c-3');
        cs.appendChild(at);
        map[2] = "o";
        const game = winner("o");
        game.style.width = "255px";
        game.style.transform = "rotate(-45deg)";
        game.style.top = "48%";
        return game.style.left = "-30px";
    }
    else if ((map[2] == "o") && (map[6] == "o") && (map[4] == "c")){
        const cs = document.getElementById('c-5');
        cs.appendChild(at);
        map[4] = "o";
        const game = winner("o");
        game.style.width = "255px";
        game.style.transform = "rotate(-45deg)";
        game.style.top = "48%";
        return game.style.left = "-30px";
    }
    // defensive
    // row
    else if ((map[0] == "x") && (map[1] == "x") && (map[2] == "c")){
        const cs = document.getElementById('c-3');
        cs.appendChild(at);
        return map[2] = "o";
    }
    else if ((map[1] == "x") && (map[2] == "x") && (map[0] == "c")){
        const cs = document.getElementById('c-1');
        cs.appendChild(at);
        return map[0] = "o";
    }
    else if ((map[0] == "x") && (map[2] == "x") && (map[1] == "c")){
        const cs = document.getElementById('c-2');
        cs.appendChild(at);
        return map[1] = "o";
    }
    else if ((map[3] == "x") && (map[4] == "x") && (map[5] == "c")){
        const cs = document.getElementById('c-6');
        cs.appendChild(at);
        return map[5] = "o";
    }
    else if ((map[4] == "x") && (map[5] == "x") && (map[3] == "c")){
        const cs = document.getElementById('c-4');
        cs.appendChild(at);
        return map[3] = "o";
    }
    else if ((map[3] == "x") && (map[5] == "x") && (map[4] == "c")){
        const cs = document.getElementById('c-5');
        cs.appendChild(at);
        return map[4] = "o";
    }
    else if ((map[6] == "x") && (map[7] == "x") && (map[8] == "c")){
        const cs = document.getElementById('c-9');
        cs.appendChild(at);
        return map[8] = "o";
    }
    else if ((map[7] == "x") && (map[8] == "x") && (map[6] == "c")){
        const cs = document.getElementById('c-7');
        cs.appendChild(at);
        return map[6] = "o";
    }
    else if ((map[6] == "x") && (map[8] == "x") && (map[7] == "c")){
        const cs = document.getElementById('c-8');
        cs.appendChild(at);
        return map[7] = "o";
    }
    // column
    else if ((map[0] == "x") && (map[3] == "x") && (map[6] == "c")){
        const cs = document.getElementById('c-7');
        cs.appendChild(at);
        return map[6] = "o";
    }
    else if ((map[3] == "x") && (map[6] == "x") && (map[0] == "c")){
        const cs = document.getElementById('c-1');
        cs.appendChild(at);
        return map[0] = "o";
    }
    else if ((map[0] == "x") && (map[6] == "x") && (map[3] == "c")){
        const cs = document.getElementById('c-4');
        cs.appendChild(at);
        return map[3] = "o";
    }
    else if ((map[1] == "x") && (map[4] == "x") && (map[7] == "c")){
        const cs = document.getElementById('c-8');
        cs.appendChild(at);
        return map[7] = "o";
    }
    else if ((map[4] == "x") && (map[7] == "x") && (map[1] == "c")){
        const cs = document.getElementById('c-2');
        cs.appendChild(at);
        return map[1] = "o";
    }
    else if ((map[1] == "x") && (map[7] == "x") && (map[4] == "c")){
        const cs = document.getElementById('c-5');
        cs.appendChild(at);
        return map[4] = "o";
    }
    else if ((map[2] == "x") && (map[5] == "x") && (map[8] == "c")){
        const cs = document.getElementById('c-9');
        cs.appendChild(at);
        return map[8] = "o";
    }
    else if ((map[5] == "x") && (map[8] == "x") && (map[2] == "c")){
        const cs = document.getElementById('c-3');
        cs.appendChild(at);
        return map[2] = "o";
    }
    else if ((map[2] == "x") && (map[8] == "x") && (map[5] == "c")){
        const cs = document.getElementById('c-6');
        cs.appendChild(at);
        return map[5] = "o";
    }
    // /
    else if ((map[0] == "x") && (map[4] == "x") && (map[8] == "c")){
        const cs = document.getElementById('c-9');
        cs.appendChild(at);
        return map[8] = "o";
    }
    else if ((map[4] == "x") && (map[8] == "x") && (map[0] == "c")){
        const cs = document.getElementById('c-1');
        cs.appendChild(at);
        return map[0] = "o";
    }
    else if ((map[0] == "x") && (map[8] == "x") && (map[4] == "c")){
        const cs = document.getElementById('c-5');
        cs.appendChild(at);
        return map[4] = "o";
    }
    else if ((map[2] == "x") && (map[4] == "x") && (map[6] == "c")){
        const cs = document.getElementById('c-7');
        cs.appendChild(at);
        return map[6] = "o";
    }
    else if ((map[4] == "x") && (map[6] == "x") && (map[2] == "c")){
        const cs = document.getElementById('c-3');
        cs.appendChild(at);
        return map[2] = "o";
    }
    else if ((map[2] == "x") && (map[6] == "x") && (map[4] == "c")){
        const cs = document.getElementById('c-5');
        cs.appendChild(at);
        return map[4] = "o";
    }
    // free
    else {
        let c = 0;
        let free = [];
        const mapU = document.querySelectorAll('.cs');
        mapU.forEach(cs =>{
            cs.childElementCount > 0 ? c++ : free[free.length] = cs.id.split('-')[1]; 
        });
        if (c == 9){
            mapU.forEach(c =>{
                c.innerHTML = '';
            })
            return map = [
                "c","c","c",
                "c","c","c",
                "c","c","c"
            ];
        } else {
            if (cibort == 6){
                let freeA = [];
                mapU.forEach(cs =>{
                    if (cs.childElementCount == 0){
                        if (cs.id.split('-')[1] == 1) freeA[freeA.length] = 1;
                        if (cs.id.split('-')[1] == 3) freeA[freeA.length] = 3;
                        if (cs.id.split('-')[1] == 7) freeA[freeA.length] = 7;
                        if (cs.id.split('-')[1] == 9) freeA[freeA.length] = 9;
                    }
                });
                if (freeA.length != 0){
                    let pA = Math.round(Math.random()*(freeA.length-1));
                    const cs = document.getElementById(`c-${freeA[pA]}`);
                    cs.appendChild(at);
                    return map[freeA[pA]-1] = "o";
                } else {
                    let p = Math.round(Math.random()*(free.length-1));
                    const cs = document.getElementById(`c-${free[p]}`);
                    cs.appendChild(at);
                    return map[free[p]-1] = "o";
                }
            } else {
                let p = Math.round(Math.random()*(free.length-1));
                const cs = document.getElementById(`c-${free[p]}`);
                cs.appendChild(at);
                return map[free[p]-1] = "o";
            }
        }
    }
}
const changePlayer = (body,storage) =>{
    const container = document.createElement('DIV');
    container.classList.add('change-avatar');
    const m1 = document.createElement('SPAN');
    m1.classList.add('change-avatar_option');
    const img1 = document.createElement('IMG');
    img1.setAttribute('src',images[0].src);
    const m2 = document.createElement('SPAN');
    m2.classList.add('change-avatar_option');
    const img2 = document.createElement('IMG');
    img2.setAttribute('src',images[1].src);
    const m3 = document.createElement('SPAN');
    m3.classList.add('change-avatar_option');
    const img3 = document.createElement('IMG');
    img3.setAttribute('src',images[2].src);
    const w1 = document.createElement('SPAN');
    w1.classList.add('change-avatar_option');
    const img4 = document.createElement('IMG');
    img4.setAttribute('src',images[3].src);
    const w2 = document.createElement('SPAN');
    w2.classList.add('change-avatar_option');
    const img5 = document.createElement('IMG');
    img5.setAttribute('src',images[4].src);
    const w3 = document.createElement('SPAN');
    w3.classList.add('change-avatar_option');
    const img6 = document.createElement('IMG');
    img6.setAttribute('src',images[5].src);
    // append-child
    m1.appendChild(img1);
    m2.appendChild(img2);
    m3.appendChild(img3);
    w1.appendChild(img4);
    w2.appendChild(img5);
    w3.appendChild(img6);
    container.appendChild(m1);
    container.appendChild(w1);
    container.appendChild(m2);
    container.appendChild(w2);
    container.appendChild(m3);
    container.appendChild(w3);
    body.appendChild(container);
    const img = body.firstElementChild;
    // events
    m1.addEventListener('click',e=>{
        e.stopPropagation();
        img.setAttribute('src','img/m-1.png');
        sessionStorage.setItem(storage,0);
    })
    m2.addEventListener('click',(e)=>{
        e.stopPropagation();
        img.setAttribute('src','img/m-2.png');
        sessionStorage.setItem(storage,1);
    })
    m3.addEventListener('click',(e)=>{
        e.stopPropagation();
        img.setAttribute('src','img/m-3.png');
        sessionStorage.setItem(storage,2)
    })
    w1.addEventListener('click',(e)=>{
        e.stopPropagation();
        img.setAttribute('src','img/w-1.png');
        sessionStorage.setItem(storage,3);
    })
    w2.addEventListener('click',(e)=>{
        e.stopPropagation();
        img.setAttribute('src','img/w-2.png');
        sessionStorage.setItem(storage,4);
    })
    w3.addEventListener('click',(e)=>{
        e.stopPropagation();
        img.setAttribute('src','img/w-3.png');
        sessionStorage.setItem(storage,5);
    })
}
const changeCibort = body =>{
    const container = document.createElement('DIV');
    container.classList.add('change-avatar');
    const c1 = document.createElement('SPAN');
    c1.classList.add('change-avatar_option');
    const img1 = document.createElement('IMG');
    img1.setAttribute('src',images[6].src);
    const c2 = document.createElement('SPAN');
    c2.classList.add('change-avatar_option');
    const img2 = document.createElement('IMG');
    img2.setAttribute('src',images[7].src);
    const c3 = document.createElement('SPAN');
    c3.classList.add('change-avatar_option');
    const img3 = document.createElement('IMG');
    img3.setAttribute('src',images[8].src);
    // append-child
    c1.appendChild(img1);
    c2.appendChild(img2);
    c3.appendChild(img3);
    container.appendChild(c1);
    container.appendChild(c2);
    container.appendChild(c3);
    body.appendChild(container);
    const img = body.firstElementChild;
    // events
    c1.addEventListener('click',()=>{
        img.src = images[6].src;
        sessionStorage.setItem("p2",6);
    })
    c2.addEventListener('click',()=>{
        img.src = images[7].src;
        sessionStorage.setItem("p2",7);
    })
    c3.addEventListener('click',()=>{
        img.src = images[8].src;
        sessionStorage.setItem("p2",8)
    })
}
const gameInit = ()=>{
    const container = document.createElement('DIV');
    container.classList.add('game');
    const b = document.createElement('DIV');
    b.classList.add('game_bars');
    b.innerHTML = `<svg id="bars" ria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>`;
    const containerMenu = document.createElement('DIV');
    containerMenu.classList.add('game_menu-container');
    const menu = document.createElement('UL');
    menu.classList.add('game_menu');
    const replay = document.createElement('LI');
    replay.setAttribute('style','z-index:4')
    replay.classList.add('game_menu_option');
    const icoRep = document.createElement('I');
    icoRep.classList.add('ico-play');
    const replayT = document.createElement('SPAN');
    replayT.textContent = "RESUME";
    const reset = document.createElement('LI');
    reset.setAttribute('style','z-index:2')
    reset.classList.add('game_menu_option');
    const icoRes = document.createElement('I');
    icoRes.classList.add('ico-reset');
    const resetT = document.createElement('SPAN');
    resetT.textContent = "RESET";
    const home = document.createElement('LI');
    home.setAttribute('style','z-index:1')
    home.classList.add('game_menu_option');
    const icoHm = document.createElement('I');
    icoHm.classList.add('ico-home');
    const hmT = document.createElement('SPAN');
    hmT.textContent = "MENU";    
    const p1 = document.createElement('DIV');
    p1.classList.add('player','player-1');
    const p1Avt = document.createElement('SPAN');
    p1Avt.classList.add('player-1_avatar','player_avatar');
    p1Avt.appendChild(images[sessionStorage.getItem("p1")]);
    const p1sco = document.createElement('SPAN');
    p1sco.classList.add('player-1_score','player_score');
    p1sco.setAttribute('id','score-x');
    p1sco.textContent = "0";
    const game = document.createElement('DIV');
    game.classList.add('game_map');
    const c1 = document.createElement('DIV');
    c1.classList.add('cs');
    c1.setAttribute('id','c-1');
    const c2 = document.createElement('DIV');
    c2.classList.add('cs');
    c2.setAttribute('id','c-2');
    const c3 = document.createElement('DIV');
    c3.classList.add('cs');
    c3.setAttribute('id','c-3');
    const c4 = document.createElement('DIV');
    c4.classList.add('cs');
    c4.setAttribute('id','c-4');
    const c5 = document.createElement('DIV');
    c5.classList.add('cs');
    c5.setAttribute('id','c-5');
    const c6 = document.createElement('DIV');
    c6.classList.add('cs');
    c6.setAttribute('id','c-6');
    const c7 = document.createElement('DIV');
    c7.classList.add('cs');
    c7.setAttribute('id','c-7');
    const c8 = document.createElement('DIV');
    c8.classList.add('cs');
    c8.setAttribute('id','c-8');
    const c9 = document.createElement('DIV');
    c9.classList.add('cs');
    c9.setAttribute('id','c-9');
    const p2 = document.createElement('DIV');
    sessionStorage.getItem('mode') == 'pvp'
        ? p2.classList.add('player','player-2')
        : p2.classList.add('player');
    const p2Avt = document.createElement('SPAN');
    p2Avt.classList.add('player-2_avatar','player_avatar');
    p2Avt.appendChild(images[sessionStorage.getItem("p2")]);
    const p2sco = document.createElement('SPAN');
    p2sco.classList.add('player-2_score','player_score');
    p2sco.setAttribute('id','score-o');
    p2sco.textContent = "0";
    // append-child
    container.appendChild(b);
    container.appendChild(containerMenu);
    containerMenu.appendChild(menu);
    menu.appendChild(replay);
    replay.appendChild(icoRep);
    replay.appendChild(replayT);
    menu.appendChild(reset);
    reset.appendChild(icoRes);
    reset.appendChild(resetT);
    menu.appendChild(home);
    home.appendChild(icoHm);
    home.appendChild(hmT);
    container.appendChild(p2);
    p2.appendChild(p2Avt);
    p2.appendChild(p2sco);
    container.appendChild(game);
    game.appendChild(c1);
    game.appendChild(c2);
    game.appendChild(c3);
    game.appendChild(c4);
    game.appendChild(c5);
    game.appendChild(c6);
    game.appendChild(c7);
    game.appendChild(c8);
    game.appendChild(c9);
    container.appendChild(p1);
    p1.appendChild(p1Avt);
    p1.appendChild(p1sco);
    document.body.appendChild(container);
    // events
    const c = document.querySelectorAll('.cs');
    c.forEach(cs =>{
        cs.addEventListener('click',e=>{
            e.stopPropagation();
            if (win) newG();
            else if (cs.childElementCount == 0){
                const md = sessionStorage.getItem('mode');
                if (md == 'pvp') player = player == "x" ? "o" : "x";
                const at = document.createElement('H3');
                at.classList.add(player);
                at.textContent = player;
                cs.appendChild(at);
                const i = cs.id.split('-')[1];
                play(player,i-1);
            } 
        })
    })
    document.body.addEventListener('click',()=>{
        if (win) newG();
    })
    b.addEventListener('click',()=>{
        containerMenu.style.display = "flex";
    })
    replay.addEventListener('click',()=>{
        containerMenu.style.display = "none";
    })
    reset.addEventListener('click',()=>{
        p1sco.textContent = "0";
        p2sco.textContent = "0";
        containerMenu.style.display = "none";
        newG();
    })
    home.addEventListener('click',()=>{
        // reset
        const cs = document.querySelectorAll('.cs');
        cs.forEach(c =>{
            c.innerHTML = '';
        })
        map = [
            "c","c","c",
            "c","c","c",
            "c","c","c"
        ];
        document.body.removeChild(container);
        panelMenu();  
    })
}
const newG = ()=>{
    const cs = document.querySelectorAll('.cs');
    cs.forEach(c =>{
        c.innerHTML = '';
    })
    map = [
        "c","c","c",
        "c","c","c",
        "c","c","c"
    ];
    const game = document.querySelector('.game_map');
    const gameB = document.querySelector('.game_map_before');
    game.removeChild(gameB);
    return win = false;
}
const panelMenu = ()=>{
    const menu = document.createElement('DIV');
    menu.classList.add('menu');
    // mode
    const mode = document.createElement('DIV');
    mode.classList.add('mode');
    const PvP = document.createElement('DIV');
    PvP.classList.add('mode_option','mode_option-on');
    PvP.setAttribute('id','PvP');
    const titlePvP = document.createElement('H1');
    titlePvP.classList.add('mode-option_title');
    titlePvP.textContent = "PvP";
    const prePvP = document.createElement('DIV');
    prePvP.classList.add('mode-option_presentation');
    const p1 = document.createElement('SPAN');
    p1.classList.add('player','p-1');
    const p1ImgPre = document.createElement('IMG');
    p1ImgPre.setAttribute('src',images[0].src);
    const vsP = document.createElement('I');
    vsP.classList.add('mode-option_vs');
    vsP.textContent = "vs";
    const p2 = document.createElement('SPAN');
    p2.classList.add('player','p-2');
    const p2ImgPre = document.createElement('IMG');
    p2ImgPre.setAttribute('src',images[3].src);
    const vC = document.createElement('DIV');
    vC.classList.add('mode_option','mode_option-off');
    vC.setAttribute('id','vIA');
    const titleVC = document.createElement('H1');
    titleVC.classList.add('mode-option_title');
    titleVC.textContent = "vCibort";
    const preVC = document.createElement('DIV');
    preVC.classList.add('mode-option_presentation');
    const p = document.createElement('SPAN');
    p.classList.add('player','p-1');
    const pImgPre = document.createElement('IMG');
    pImgPre.setAttribute('src',images[0].src);
    const vsC = document.createElement('I');
    vsC.classList.add('mode-option_vs');
    vsC.textContent = "vs";
    const cibort = document.createElement('SPAN');
    cibort.classList.add('player','p-2');
    const cImgPre = document.createElement('IMG');
    cImgPre.setAttribute('src',images[6].src);
    // options
    const details = document.createElement('DIV');
    details.classList.add('details');
    const p1Config = document.createElement('DIV');
    p1Config.classList.add('player-config','p-1');
    const p1Avatar = document.createElement('DIV');
    p1Avatar.classList.add('avatar');
    sessionStorage.setItem("p1",'0');
    const p1Img = document.createElement('IMG');
    p1Img.setAttribute('src',images[0].src);
    const p1Gun = document.createElement('DIV');
    p1Gun.classList.add('gun');
    p1Gun.textContent = "X";
    const vs = document.createElement('H4');
    vs.classList.add('vs');   
    vs.textContent = "VS";    
    const p2Config = document.createElement('DIV');
    p2Config.classList.add('player-config','p-2');
    const p2Avatar = document.createElement('DIV');
    p2Avatar.classList.add('avatar');
    sessionStorage.setItem("p2",'3');
    const p2Img = document.createElement('IMG');
    p2Img.setAttribute('src',images[3].src);
    const p2Gun = document.createElement('DIV');
    p2Gun.classList.add('gun');
    p2Gun.textContent = "O";
    const play = document.createElement('BUTTON');
    play.classList.add('details_button');
    play.textContent = "LISTO";
    // append-child
    menu.appendChild(mode);
    mode.appendChild(PvP);
    mode.appendChild(vC);
    PvP.appendChild(titlePvP);
    vC.appendChild(titleVC);
    PvP.appendChild(prePvP);
    vC.appendChild(preVC);
    prePvP.appendChild(p1);
    p1.appendChild(p1ImgPre);
    prePvP.appendChild(vsP);
    prePvP.appendChild(p2);
    p2.appendChild(p2ImgPre);
    preVC.appendChild(p);
    p.appendChild(pImgPre);
    preVC.appendChild(vsC);
    preVC.appendChild(cibort)
    cibort.appendChild(cImgPre);;
    document.body.appendChild(menu);
    menu.appendChild(details);
    details.appendChild(p1Config);
    details.appendChild(vs);
    details.appendChild(p2Config);
    p1Config.appendChild(p1Avatar);
    p1Avatar.appendChild(p1Img);
    p1Config.appendChild(p1Gun);
    p2Config.appendChild(p2Gun);
    p2Config.appendChild(p2Avatar);
    p2Avatar.appendChild(p2Img);
    details.appendChild(play);
    document.body.appendChild(menu);
    // events
    p1Avatar.addEventListener('click',e=>{
        e.stopPropagation();
        if (p1Avatar.childElementCount == 1){
            changePlayer(p1Avatar,"p1");
        } else {
            const changeA = document.querySelector('.change-avatar');
            p1Avatar.removeChild(changeA);
        }
        document.body.addEventListener('click',()=>{
            if (p1Avatar.childElementCount > 1){
                const changeA = document.querySelector('.change-avatar');
                p1Avatar.removeChild(changeA);
            }
        })
    })
    p2Avatar.addEventListener('click',e=>{
        e.stopPropagation();
        const mod = document.querySelector('.mode_option-on');
        if (p2Avatar.childElementCount == 1){
            mod.id == 'PvP'
                ? changePlayer(p2Avatar,"p2")
                : changeCibort(p2Avatar);
        } else {
            const changeA = document.querySelector('.change-avatar');
            p2Avatar.removeChild(changeA);
        }
        document.body.addEventListener('click',()=>{
            if (p2Avatar.childElementCount > 1){
                const changeA = document.querySelector('.change-avatar');
                p2Avatar.removeChild(changeA);
            }
        })
    })
    sessionStorage.setItem('mode','pvp');
    vC.addEventListener('click',()=>{
        if (vC.classList[1] == 'mode_option-off'){
            vC.classList.replace('mode_option-off','mode_option-on');
            PvP.classList.replace('mode_option-on','mode_option-off');
            sessionStorage.setItem('mode','vc');
            player = "x";
            p2Avatar.firstElementChild.src = images[6].src;
            sessionStorage.setItem('p2',6);
        }
    })
    PvP.addEventListener('click',()=>{
        if (PvP.classList[1] == 'mode_option-off'){
            PvP.classList.replace('mode_option-off','mode_option-on');
            vC.classList.replace('mode_option-on','mode_option-off');
            sessionStorage.setItem('mode','pvp');
        }
    })
    play.addEventListener('click',()=>{
        document.body.removeChild(menu);
        gameInit();
    })
}