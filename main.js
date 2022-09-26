"use strict";

let map = [
    "c","c","c",
    "c","c","c",
    "c","c","c"
];
let player = "x";
let win = false;

const init = document.getElementById('init');
init.addEventListener('click',()=>{
    const panel =  document.querySelector('.panel')
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
    const vsP = document.createElement('I');
    vsP.classList.add('mode-option_vs');
    vsP.textContent = "vs";
    const p2 = document.createElement('SPAN');
    p2.classList.add('player','p-2');
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
    const vsC = document.createElement('I');
    vsC.classList.add('mode-option_vs');
    vsC.textContent = "vs";
    const cibort = document.createElement('SPAN');
    cibort.classList.add('player','p-2');
    // options
    const details = document.createElement('DIV');
    details.classList.add('details');
    const p1Config = document.createElement('DIV');
    p1Config.classList.add('player-config','p-1');
    const p1Avatar = document.createElement('DIV');
    p1Avatar.classList.add('avatar');
    sessionStorage.setItem("p1",'#2962ff');
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
    sessionStorage.setItem("p2",'#2962ff');
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
    prePvP.appendChild(vsP);
    prePvP.appendChild(p2);
    preVC.appendChild(p);
    preVC.appendChild(vsC);
    preVC.appendChild(cibort);
    document.body.removeChild(panel);
    document.body.appendChild(menu);
    menu.appendChild(details);
    details.appendChild(p1Config);
    details.appendChild(vs);
    details.appendChild(p2Config);
    p1Config.appendChild(p1Avatar)
    p1Config.appendChild(p1Gun);
    p2Config.appendChild(p2Gun);
    p2Config.appendChild(p2Avatar)
    details.appendChild(play);
    document.body.appendChild(menu);
    // events
    p1Avatar.addEventListener('click',e=>{
        e.stopPropagation();
        if (p1Avatar.childElementCount == 0){
            changePlayer(p1Avatar,"p1");
        } else {
            const changeA = document.querySelector('.change-avatar');
            p1Avatar.removeChild(changeA);
        }
        document.body.addEventListener('click',()=>{
            if (p1Avatar.childElementCount > 0){
                const changeA = document.querySelector('.change-avatar');
                p1Avatar.removeChild(changeA);
            }
        })
    })
    p2Avatar.addEventListener('click',e=>{
        e.stopPropagation();
        if (p2Avatar.childElementCount == 0){
             changePlayer(p2Avatar,"p2");
        } else {
            const changeA = document.querySelector('.change-avatar');
            p2Avatar.removeChild(changeA);
        }
        document.body.addEventListener('click',()=>{
            if (p2Avatar.childElementCount > 0){
                const changeA = document.querySelector('.change-avatar');
                p2Avatar.removeChild(changeA);
            }
        })
    })
    play.addEventListener('click',()=>{
        document.body.removeChild(menu);
        gameInit();
    })
});
const winner = ()=>{
    const score = document.getElementById(`score-${player}`);
    score.textContent = parseInt(score.textContent)+1;
    const cs = document.querySelectorAll('.cs');
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
        console.log("if=1");
        const game = winner();
        return game.style.transform = "translateY(28px)";
    } 
    else if ((map[3] == plyr) && (map[4] == plyr) && (map[5] == plyr)){
        console.log("if=2");
        const game = winner();
        return game.style.transform = "translateY(93px)";
    } else if ((map[6] == plyr) && (map[7] == plyr) && (map[8] == plyr)){
        console.log("if=3");
        const game = winner();
        return game.style.transform = "translateY(158px)";
    }  else if ((map[0] == plyr) && (map[3] == plyr) && (map[6] == plyr)){
        console.log("if=4");
        const game = winner();
        return game.style.transform = "rotate(90deg) translate(95px,65px)";
    }  else if ((map[1] == plyr) && (map[4] == plyr) && (map[7] == plyr)){
        console.log("if=5");
        const game = winner();
        return game.style.transform = "rotate(90deg) translate(95px,0px)";
    }  else if ((map[2] == plyr) && (map[5] == plyr) && (map[8] == plyr)){
        console.log("if=6");
        const game = winner();
        return game.style.transform = "rotate(90deg) translate(95px,-66px)";
    }  else if ((map[0] == plyr) && (map[4] == plyr) && (map[8] == plyr)){
        console.log("if=7");
        const game = winner();
        game.style.width = "255px";
        game.style.transform = "rotate(45deg)";
        game.style.top = "48%";
        return game.style.left = "-30px";
    }  else if ((map[2] == plyr) && (map[4] == plyr) && (map[6] == plyr)){
        console.log("if=8");
        const game = winner();
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
            cs.forEach(c =>{
                c.innerHTML = '';
            })
            map = [
                "c","c","c",
                "c","c","c",
                "c","c","c"
            ];
        }
    }
}
const changePlayer = (body,storage) =>{
    const container = document.createElement('DIV');
    container.classList.add('change-avatar');
    const r = document.createElement('SPAN');
    r.classList.add('change-avatar_option');
    r.setAttribute('id','r');
    const pi = document.createElement('SPAN');
    pi.classList.add('change-avatar_option');
    pi.setAttribute('id','pi');
    const pu = document.createElement('SPAN');
    pu.classList.add('change-avatar_option');
    pu.setAttribute('id','pu');
    const b = document.createElement('SPAN');
    b.classList.add('change-avatar_option');
    b.setAttribute('id','b');
    const g = document.createElement('SPAN');
    g.classList.add('change-avatar_option');
    g.setAttribute('id','g');
    const o = document.createElement('SPAN');
    o.classList.add('change-avatar_option');
    o.setAttribute('id','o');
    // append-child
    container.appendChild(r);
    container.appendChild(pi);
    container.appendChild(pu);
    container.appendChild(b);
    container.appendChild(g);
    container.appendChild(o);
    body.appendChild(container);
    // events
    r.addEventListener('click',()=>{
        body.style.background = '#ff1744';
        sessionStorage.setItem(storage,'#ff1744');
    })
    pi.addEventListener('click',()=>{
        body.style.background = '#ec407a';
        sessionStorage.setItem(storage,'#ec407a');
    })
    pu.addEventListener('click',()=>{
        body.style.background = '#aa00ff';
        sessionStorage.setItem(storage,'#a0f')
    })
    b.addEventListener('click',()=>{
        body.style.background = '#2962ff';
        sessionStorage.setItem(storage,'#2962ff');
    })
    g.addEventListener('click',()=>{
        body.style.background = '#00e676';
        sessionStorage.setItem(storage,'#00e676');
    })
    o.addEventListener('click',()=>{
        body.style.background = '#ffa726';
        sessionStorage.setItem(storage,'#ffa726');
    })
}
const gameInit = ()=>{
    const container = document.createElement('DIV');
    container.classList.add('game');
    const p1 = document.createElement('DIV');
    p1.classList.add('player','player-1');
    const p1Avt = document.createElement('SPAN');
    p1Avt.classList.add('player-1_avatar','player_avatar');
    p1Avt.style.background = `${sessionStorage.getItem("p1")}`;
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
    p2.classList.add('player','player-2');
    const p2Avt = document.createElement('SPAN');
    p2Avt.classList.add('player-2_avatar','player_avatar');
    p2Avt.style.background = `${sessionStorage.getItem("p2")}`;
    const p2sco = document.createElement('SPAN');
    p2sco.classList.add('player-2_score','player_score');
    p2sco.setAttribute('id','score-o');
    p2sco.textContent = "0";
    // append-child
    container.appendChild(p1);
    p1.appendChild(p1Avt);
    p1.appendChild(p1sco);
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
    container.appendChild(p2);
    p2.appendChild(p2Avt);
    p2.appendChild(p2sco);
    document.body.appendChild(container);
    // events
    const c = document.querySelectorAll('.cs');
    c.forEach(cs =>{
        cs.addEventListener('click',e=>{
            e.stopPropagation();
            if (cs.childElementCount == 0){
                const at = document.createElement('H3');
                at.classList.add(player);
                at.textContent = player;
                cs.appendChild(at);
                const i = cs.id.split('-')[1];
                play(player,i-1);
                player = player == "x" ? "o" : "x";
            } else if (win) newG();
        })
    })
    document.body.addEventListener('click',()=>{
        if (win){
            newG();
        }
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