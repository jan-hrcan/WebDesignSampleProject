var menuOpened = false;
function SideMenuOpenClose() {
  if (!menuOpened) {
    $('.responsive-menu-items').css("display","inherit");
    $('.logo-div').css("display","none");
    $('.menu-opener').css("margin-left","80px");
    menuOpened = true;
  } else {
    $('.responsive-menu-items').css("display","none");
    $('.menu-opener').css("margin-left","180px");
    $('.logo-div').css("display","inherit");
    menuOpened = false;
  }
}


       
var NUMBER_OF_THE_TUNE;



function CheckCorrectAnswer(answer)
{
    $('.hero-images-container').css("display","none");
    $('.canvas-container').css("display","inherit");
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    var textSize = 10;
    var intervalId;

    if (NUMBER_OF_THE_TUNE == answer) {
        var word = "Correct! :)"    
        ctx.fillStyle = "white";    
    }
    else{
        var word = "False! :("    
        ctx.fillStyle = "red"; 
    }

    intervalId = setInterval(drawText, 90);
        
    function drawText() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var font = textSize + 'px' + ' Broadway';
        ctx.font = font;
        ctx.textAlign = "center";   
        ctx.fillText(word, canvas.width/2, canvas.height/2); 
        textSize += 1;
        if (textSize === 60) {
          clearInterval(intervalId);
          textSize = 10;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          $('.hero-images-container').css("display","inherit");
          $('.canvas-container').css("display","none");
        }
    
    }

}

function PlaySound() {
    var sound = new Audio();        
    var num = Math.floor(Math.random() * 10);
    sound.src = './sounds/' + num + '.mp3';

    sound.play();

    NUMBER_OF_THE_TUNE = num;
}
