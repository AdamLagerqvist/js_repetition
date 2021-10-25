let num = Math.round(Math.random()*100)

document.querySelector('#button').addEventListener('click', (e) => {
    let guess = document.querySelector('input').value
    if(guess > num && guess != null){
        document.querySelector('#output').textContent = "."
        setTimeout(() => {  
            document.querySelector('#output').textContent = ".."; 
            setTimeout(() => {  
                document.querySelector('#output').textContent = "...";
                setTimeout(() => {  
                    document.querySelector('#output').textContent = "You've guessed to high."; 
                }, 400);
            }, 400);
        }, 400);
    }else if(guess < num && guess != null){
        document.querySelector('#output').textContent = "."
        setTimeout(() => {  
            document.querySelector('#output').textContent = ".."; 
            setTimeout(() => {  
                document.querySelector('#output').textContent = "...";
                setTimeout(() => {  
                    document.querySelector('#output').textContent = "You've guessed to low."; 
                }, 400);
            }, 400);
        }, 400);
    }else{
        document.querySelector('#output').textContent = "."
        setTimeout(() => {  
            document.querySelector('#output').textContent = ".."; 
            setTimeout(() => {  
                document.querySelector('#output').textContent = "...";
                setTimeout(() => {  
                    document.querySelector('#output').textContent = "Congrats you guessed the right number guess again to play another time!";
                }, 400);
            }, 400);
        }, 400);
        num = Math.round(Math.random()*100)
    }
});