    const compteur = document.getElementById('compte');
    const barcontrole = document.querySelector('.controle');
    const footer = document.querySelector('footer');
    const bardef = document.querySelector('.bardef');
    const rond = document.querySelector('.rond');
    const rec = document.querySelector('.rec');
    const play = document.querySelector('.play');
    const arret = document.querySelector('.arret');
    const pause = document.querySelector('.pause');
    const lecompteur = document.querySelector('.compteur');
    const rep2 = document.querySelector('.rep2');
    var audio = document.querySelector("#audio");
    var gong = document.querySelector("#gong");
    let refreshTimer;
    let cmp=1;
    const tempo = 10;
    compteur.innerHTML = tempo; // initialise le timer
    console.log(window.document);
    // Déclenche la fonction play lors du clic sur le bt 
    rec.addEventListener('click', () => { refreshTimer = setInterval(playTimer, 1000); });
    arret.addEventListener('click', () => {  
        clearInterval(refreshTimer); 
        audio.pause(); 
        rond.style.animationPlayState = 'paused';
        bardef.style.animationPlayState = 'paused';
        

    });

    function playTimer(){ 
        audio.play();
        rec.style.display = 'none';
        arret.style.display = 'block'; 

        let tempsrestant = (tempo - cmp);
        if (tempsrestant==0) { 
            clearInterval(refreshTimer);
            audio.pause();
            gong.play();
            rep2.classList.add('active');
            play.style.display = 'block';
            arret.style.display = 'none';
        }
        compteur.innerHTML = tempsrestant;
        rond.style.animation = 'deplacement-rond ' +(tempo-1)+'s forwards linear';
        bardef.style.animation = 'deplacement-bardef ' +(tempo-1)+'s forwards linear';
        cmp++;
    }

    footer.addEventListener('click', () =>{
        // barcontrole.classList.remove('barcontroleclose');
        barcontrole.classList.toggle('barcontroleopen');
    })
    // footer.addEventListener('mouseout', () =>{
    //     barcontrole.classList.remove('barcontroleopen');
    //     barcontrole.classList.add('barcontroleclose');
    // })