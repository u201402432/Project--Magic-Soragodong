var isAnswered ;
var answered ;

/* 로딩시 바로 작동 */
window.onload = function() {  
    //반복 클릭 방지
    isAnswered = false ;
    answered = 1 ;
    //반복 클릭 방지
    
    checkMobile() ;
    
    
    // 스크롤 위치 임의 수정
    //window.scrollTo({top:0, left:80, behavior:'smooth'});
   
    //이미지 사전 로딩
    preloading(['../images/sora_move.gif']);
  
    //로딩 이미지 작업
    _wait();
}


/* 이미지 미리 로딩 */
function preloading (imageArray) { let n = imageArray.length; for (let i = 0; i < n; i++) { let img = new Image(); img.src = imageArray[i]; } }


function _wait(){
    //로딩 이미지 4초 이후 시작이미지로 교체
    setTimeout("_startImg()", 4000); 
}

// 시작 이미지로 교체하는 함수
function _startImg(){
    // 로딩 이미지를 기본 이미지로 교체
    document.getElementById("mainImg").src = '../images/soragodong.png' ;
    
    // 버튼 활성화
    document.getElementById("bt").disabled = false ;
}


/* 물어보기 버튼 */
function start() {
    if(isAnswered){// 답변을 한번만 가능하게 하기
            var image = document.getElementById('mainImg');
            image.src = "../images/sora_move.gif";
    
            // 오디오 파일 재생 시간 보정
            setTimeout("getAnsweredAudio("+answered+")", 1600); 
        
        if(answered<3)
            ++answered ;
        
        return ;
    }
    
    isAnswered = true ;
    
    var ask = document.getElementById("ask") ;
    if(ask.value.length<1){
        alert("질문을 입력하세요!") ;
        return ;
    }
    
    reset() ; // 질문 내용 삭제
    
    var image = document.getElementById('mainImg');
    image.src = "../images/sora_move.gif";
    
    // 오디오 파일 재생 시간 보정
    setTimeout("getAudio()", 1600); 
}

function reset(){
    var f = document.getElementById("ask") ;
    f.value = "" ;
    
}

// 오디오 출력
function getAudio(){    
    var max = 43 ; // 랜덤 가지 수
    var rand = Math.floor(Math.random() * max) +1 ;
    var sound = document.getElementById("sound") ;
    sound.src = "../mp3/a"+rand+".mp3";
    sound.load() ;
    sound.play() ;
        
}

function getAnsweredAudio(num){
    var sound = document.getElementById("sound") ;
    sound.src = "../mp3/answer"+num+".mp3";
    sound.load() ;
    sound.play() ;
}

function papa(){
        alert();
}

// 안드로이드인지 IOS인지 구분
function checkMobile(){
 
    var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
    
    if ( varUA.indexOf('android') > -1) {
        //안드로이드
        return "android";
    } else if ( varUA.indexOf("iphone") > -1||varUA.indexOf("ipad") > -1||varUA.indexOf("ipod") > -1 ) {
        //IOS
        document.getElementById('sound').hidden = false ;
    
        return "ios";
    } else {
        //아이폰, 안드로이드 외
        return "other";
    }
    
}


