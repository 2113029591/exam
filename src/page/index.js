$(document).ready(function(){
    $.fn.fullpage({
		slidesColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
		anchors: ['page1', 'page2', 'page3', 'page4'],
        navigation:true,
        //设置滚动的速度
        scrollSpeed:500,
        loopBottom:true,
        //单个屏幕内可滚动
        // scrollOverflow:true,
        //滚动前的回调函数
        onLeave:function(index,nextIndex){
            if(index==1){
                $(".test").removeClass('rollIn animated');
                $(".test").addClass('animated fadeOut');
            }
        },
        // 滚动到某一屏后的回调函数
        afterLoad:function(anchorLink,index){
            if(index==1){
                $(".test").removeClass('animated fadeOut');
                $(".test").addClass('rollIn animated');
            }
        }
	});
})