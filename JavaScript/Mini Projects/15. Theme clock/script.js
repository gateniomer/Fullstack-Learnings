const needles = document.querySelectorAll('.needle');
const needlesArray = Array.from(needles);
setInterval(()=>{
    const date = new Date();
    console.log(date.getSeconds());
    needles[0].style.transform=`rotateZ(${date.getHours()*30}deg)`
    needles[1].style.transform=`rotateZ(${date.getMinutes()*6}deg)`
    needles[2].style.transform=`rotateZ(${date.getSeconds()*6}deg)`
},1000);
