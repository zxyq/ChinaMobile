window.onload = function () {

    var tab = document.getElementsByClassName("tab")[0];
    var lis = document.getElementsByClassName("item");
    var downMenu = document.getElementsByClassName("downMenu");

    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onmouseover = function () {

            for (var j = 0; j < lis.length; j++) {
                downMenu[j].style.display = "none";
            }
            downMenu[this.index].style.display = "block";
        }
        lis[i].onmouseout = function () {
            for (var j = 0; j < lis.length; j++) {
                downMenu[j].style.display = "none";
            }
        }
    }


    var win = $(".banner_image")[0];
    var imgs = $("a", win);
    var lins = $("li", win);
    var num = 0;
    var btnL = $(".btnL")[0];
    var btnR = $(".btnR")[0];
    var t = setInterval(move, 3000);
    var flag = true;
    var flag1 = true;

    win.onmouseover = function () {
        clearInterval(t);
    }
    win.onmouseout = function () {
        clearInterval(t);
        t = setInterval(move, 3000);
    }
    for (var i = 0; i < lins.length; i++) {
        lins[i].index = i;
        lins[i].onmouseover = function () {
            num = this.index;
            for (var i = 0; i < imgs.length; i++) {
                animate(imgs[i], {opacity: 0}, 500);
                lins[i].className = "";
            }
            animate(imgs[this.index], {opacity: 1}, 500);
            lins[this.index].className = "xydhot";

        }
    }


    //btnR
    btnR.onclick = function () {
        move();
    }
    //btnL
    btnL.onclick = function () {
        if(!flag1){
            return;
        }
        flag1 = false;
        num--;
        if (num < 0) {
            num = imgs.length - 1;
        }
        for (var i = 0; i < imgs.length; i++) {
            animate(imgs[i], {opacity: 0}, 500,function(){
                flag1 = true;
            });
            lins[i].className = "";
        }
        animate(imgs[num], {opacity: 1}, 500,function(){
            flag1 = true;
        });
        lins[num].className = "xydhot";
    }


    function move() {
        if (!flag) {
            return;
        }
        flag = false;
        num++;
        if (num == imgs.length) {
            num = 0;
        }
        for (var i = 0; i < imgs.length; i++) {
            animate(imgs[i], {opacity: 0}, 500, function () {
                flag = true;
            });
            lins[i].className = "";
        }
        animate(imgs[num], {opacity: 1}, 500, function () {
            flag = true;
        });
        lins[num].className = "xydhot";
    }




    //var moveleft = $(".move_left")[0];
    //moveleft.onmouseover = function(){
    //    animate(moveleft,"left",20)
    //}
}