const inpHour = document.querySelector(".inp-hour");
const inpMin = document.querySelector(".inp-min");
const inpSec = document.querySelector(".inp-sec");

const btnStart = document.querySelector(".btn-start");
const btnReset = document.querySelector(".btn-reset");
var intervalVar;
// 실행 시작

btnStart.addEventListener("click", () => {
    btnStart.classList.toggle("abled");
    if (btnStart.className.indexOf("abled") !== -1) {
        // document.querySelector(".btn-start-img").src =
        //     "img/icon-start.png";
        btnStart.classList.remove("stop");                
        btnStart.innerHTML = `<img class="btn-start-img"
                src="img/icon-start.png"
                alt=""
            />START`
            //일시정지 css
        document.querySelector(".btn-reset-img").src = "img/shape.png";
        btnReset.classList.add("abled");

        let hour = inpHour.value;
        let min = inpMin.value;
        let sec = inpSec.value;
        console.log(hour, min, sec);
        
        let setTime =
            parseInt(hour * 3600) + parseInt(min * 60) + parseInt(sec);
        console.log(setTime);

        intervalVar= setInterval(function () {
            // 정수로부터 남은 시, 분, 초 단위 계산
            setTime -= 1;
            console.log(setTime);
            hour = Math.floor(setTime / 3600);
            
            min = Math.floor((setTime - hour * 3600) / 60);
            
            sec = setTime - hour * 3600 - min * 60;
            
            // hh:mm:ss 형태를 유지하기 위해 한자리 수일 때 0 추가

            if (hour < 10) {
                inpHour.value = "0" + hour;
            } else {
                inpHour.value = hour;
            }
            
            if (min < 10) {
                inpMin.value = "0" + min;
            } else {
                inpMin.value = min;
            }
            
            if (sec < 10) {
                inpSec.value = "0" + sec;
            } else {
                inpSec.value = sec;
            }
            if(setTime==0){
                
                setTimeout(countF,1)}
        }, 1000);

        let setT = setTimeout(function () {
            clearInterval(intervalVar);
            
        }, setTime * 1000);

    } else {
        
        btnStart.innerHTML = `<img class="btn-start-img"
                src="img/icon-stop.png"
                alt=""
            />PAUSE`
            btnStart.classList.add("stop");
            clearInterval(intervalVar);

    }
});

// 일시정지

//리셋
btnReset.addEventListener("click", () => {
    if (btnReset.className.indexOf("abled") !== -1) {
        inpHour.value = "00";
        inpMin.value = "00";
        inpSec.value = "00";
        btnReset.classList.remove("abled");
        btnStart.classList.remove("abled");
        document.querySelector(".btn-reset-img").src =
            "img/icon-reset-disabled.png";
        document.querySelector(".btn-start-img").src =
            "img/icon-start-disabled.png";
            clearInterval(intervalVar);
    } else {
    }
});


function countF(){
inpSec.value = "00";
btnReset.classList.remove("abled");
btnStart.classList.remove("abled");
document.querySelector(".btn-reset-img").src =
"img/icon-reset-disabled.png";
document.querySelector(".btn-start-img").src =
"img/icon-start-disabled.png";
alert('Finish')
}