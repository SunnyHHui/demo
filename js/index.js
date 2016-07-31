///**
// * Created by Administrator on 2016/7/19.
// */
//$(function(){
//    $("#startbtn").rotate({
//        bind:{
//            click:function(){//绑定click单击事件
//                var a = Math.floor(Math.random() * 360); //生成随机数
//                $(this).rotate({
//                    duration:3000,//转动时间间隔（转动速度）
//                    angle: 0,  //开始角度
//                    animateTo:3600+a, //转动角度，10圈+
//                    easing: $.easing.easeOutSine, //动画扩展
//                    callback: function(){ //回调函数
//                        alert('中奖了！');
//                    }
//                });
//            }
//        }
//    });
//});
$(function(){
    $("#startbtn").click(function(){
        lottery();
    });
});
function lottery(){
    $.ajax({
        type: 'POST',
        url: 'index.php',
        dataType: 'json',
        cache: false,
        error: function(){
            alert('出错了！');
            return false;
        },
        success:function(json){
            $("#startbtn").unbind('click').css("cursor","default");
            var a = json.angle; //角度
            var p = json.prize; //奖项
            $("#startbtn").rotate({
                duration:3000, //转动时间
                angle: 0,
                animateTo:1800+a, //转动角度
                easing: $.easing.easeOutSine,
                callback: function(){
                    var con = confirm('恭喜你，中得'+p+'\n还要再来一次吗？');
                    if(con){
                        lottery();
                    }else{
                        return false;
                    }
                }
            });
        }
    });
}