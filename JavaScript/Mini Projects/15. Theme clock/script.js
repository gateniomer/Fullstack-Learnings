const needles = document.querySelectorAll('.needle');
const needlesArray = Array.from(needles);
setInterval(()=>{
    const date = new Date();
    console.log(date.getSeconds());
    needles[0].style.transform=`translate(-50%,0) rotateZ(${date.getHours()*30}deg)`
    needles[1].style.transform=`translate(-50%,0) rotateZ(${date.getMinutes()*6}deg)`
    needles[2].style.transform=`translate(-50%,0) rotateZ(${date.getSeconds()*6}deg)`
},1000);
