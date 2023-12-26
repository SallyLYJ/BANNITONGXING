$(function(){
    var chooseRound=[];
    var random_num,tag=0,serviceTime,num;
    //判断>=ie10
    var isIE = document.all && !window.atob;

    var $serviceRound=$(".service_round");

    var numTop=[0,1,5],
        numBottom=[2,3,4];
     //生成随机数
    function random(max, min) {
        var result = parseInt(Math.random() * (max - min + 1) + min);
        return result;
    }
    //选出三个随机数并添加放大缩小动画
    function serviceRound(){

        chooseRound=[];
        for (var i = 0; chooseRound.length < 3; i++) {
            num=random(0,4);
            if(i==0){
                random_num=numTop[num-1];
            }else{
                random_num=numBottom[num-1];
            }
            console.log('random_num',random_num);
            //random_num=random(0,7);
            for (var j = 0; j < chooseRound.length; j++) {
              //已存在序号重新抽取
                if(chooseRound[j]==random_num){
                    tag=1;
                    break;
                }
            };
            if(!chooseRound||!tag){
                chooseRound[i]=random_num;
            }else{
                tag=0;
                i--;
            }
            
        };
        $serviceRound.removeClass('service_li_current');
        for (var k = 0; k < chooseRound.length; k++) {
            $serviceRound.eq(chooseRound[k]).addClass('service_li_current');
        };
    }
    
    //如果是ie10以上或不是ie
    if(!isIE){
        serviceRound();
        serviceTime=setInterval(serviceRound,4000);
    }
    $(".service_main li").hover(function() {
         if(!isIE){
            $serviceRound.removeClass('service_li_current');
            clearInterval(serviceTime);
            $(this).addClass('service_li_hover_current');
         }
    }, function() {
        if(!isIE){
            $(this).removeClass('service_li_hover_current');
            serviceRound();
            serviceTime=setInterval(serviceRound,4000);
            
        }
    });
    
    
  
})