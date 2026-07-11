const result = document.getElementById("result");
setInterval(() => {
  const currenttime = Date.now();
    const birthdaytime = new Date(2026, 9, 31).getTime();
    let timer = birthdaytime - currenttime;
    
    const day = Math.floor((timer) / (1000 * 60 * 60 * 24));
    timer %= 1000 * 60 * 60 * 24;
    const hour = Math.floor(timer / (1000 * 60 * 60 ));
    timer %= 1000 * 60 * 60 ;
    const minute = Math.floor(timer / (1000 * 60 ));
    timer %= 1000 * 60 ;
    const second = Math.floor(timer / (1000 ));
    timer %= 1000;
    
    result.textContent = `${day}:Days ${hour}:Hours ${minute}:Minutes ${second}:Seconds`;
});
