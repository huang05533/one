
$(function(){


//点击搜索框----下拉列表
	$('.search').focus(function(event) {
		$('.search-te').show()
	});
	$('.search').blur(function(event) {
		$('.search-te').hide()
	});
	$('.search-te li').mouseover(function(event) {
		$(this).css({'background-color':'#31c27c','color':'white'}).siblings('').css({'background-color':'white','color':'red'});	
		$(this).children('.search-te li a').css({'color':'white'}).parent('.search-te li').siblings('').children('.search-te li a').css({'color':'black'});
		$(this).children('.search-te li p').css({'color':'white'}).parent('.search-te li').siblings('').children('.search-te li p').css({'color':'grey'});		
		$('.search-te span').css('color', 'grey');
	});


	//播放图标 渐入渐出
	$('.ply').hover(function(){
		$(this).prev('span').css({transform: 'scale(1.2)',opacity: '1'});
	},function(){
		$('.img-ul-li span').css({transform: 'scale(1)',opacity: '0'})
	})

	$('.new-img').hover(function(){
		$(this).prev('.play-span').css({transform: 'scale(1.2)',opacity: '1'});
	},function(){
		$('.play-span').css({transform: 'scale(1)',opacity: '0'})
	})
	$('.img-back').hover(function(){
		$(this).prev('.four-play-span').css({transform: 'scale(1.2)',opacity: '1'});  
	},function(){
		$('.four-play-span').css({transform: 'scale(1)',opacity: '0'})
	})

	$('.five-big-li').hover(function(){
		$(this).children('.popu').children('.po-play').css({transform: 'scale(1.2)',opacity: '1'});
	},function(){
		$('.po-play').css({transform: 'scale(1)',opacity: '0'})
	})

	$('.six-li').hover(function(){
		$(this).children('.six-play-span').css({transform: 'scale(1.2)',opacity: '1'})  
	},function(){
		$('.six-play-span').css({transform: 'scale(1)',opacity: '0'})
	})




	//左右按钮滑出
	$('.banner').mouseover(function(event) {
		$(this).children('.mid-tilte').children('.left').animate({left:'0px'},300)	
		$(this).children('.mid-tilte').children('.right').animate({right:'0px'},300)
	});
	$('.banner').mouseleave(function(event) {
		$(this).children('.mid-tilte').children('.left').animate({left:'-90px'},300)	
		$(this).children('.mid-tilte').children('.right').animate({right:'-90px'},300)
	});



	//歌单推荐---点击左右按钮，图片左右滑动
	var num=0;
    var i=1;
    var a=1;
	$('.left-one').click(function(event) {
		num--;
		i++;
		if(num<0){
			$('.img-ul').css('left', -2400+'px');			
			num=1;
		}	
		$('.img-ul').animate({'left':-1200*num+'px'},500)
		if(i%2==0){
			$('.current-ul-one li').eq(1).addClass('current').siblings('').removeClass('current');
		}
		if(i%2!=0){
			$('.current-ul-one li').eq(0).addClass('current').siblings('').removeClass('current');
		}
	});
	$('.right-one').click(function(event) {
		num++;
		a++;
		if(num>2){
			  $('.img-ul').css('left',0+'px');
			  num=1;
		}
		$('.img-ul').animate({'left': -1200*num+'px'},500)
		if(a%2==0){
			$('.current-ul-one li').eq(1).addClass('current').siblings('').removeClass('current');
		}
		if(a%2!=0){
			$('.current-ul-one li').eq(0).addClass('current').siblings('').removeClass('current');
		}
	});



//新歌首发的图片轮播
	var n=0;
	var c=0;
	$('.left-two').click(function(event) {
		n--;
		if(n<0){
			$('.new-sing-ul').css('left', -9600+'px'); 
			n=4;
		}
        $('.new-sing-ul').animate({'left':-1200*n+'px'}, 300)
        $('.current-ul-two li').eq(n).addClass('current').siblings('').removeClass('current');
	});

	$('.right-two').click(function(event) {
		n++;
		if(n==4){
			n=0;
			$('.current-ul-two li').eq(0).addClass('current').siblings('').removeClass('current');
		}
		if(n>4){
			$('.new-sing-ul').css('left', 0+'px');
			n=1;
		}
		$('.new-sing-ul').animate({'left':-1200*n+'px'}, 300)
		$('.current-ul-two li').eq(n).addClass('current').siblings('').removeClass('current');
	});

//MV的小按钮
	$('.left-six').click(function(event) {
		n--;
		if(n<0){
			$('.banner-six-ul').css('left', -9600+'px'); 
			n=4;
		}
        $('.banner-six-ul').animate({'left':-1200*n+'px'}, 500)
        $('.current-ul-six li').eq(n).addClass('current').siblings('').removeClass('current');
	});

	$('.right-six').click(function(event) {
		n++;
		if(n==4){
			n=0;
			$('.current-ul-six li').eq(0).addClass('current').siblings('').removeClass('current');
		}
		if(n>4){
			$('.banner-six-ul').css('left', 0+'px');
			n=1;
		}
		$('.banner-six-ul').animate({'left':-1200*n+'px'}, 500)
		$('.current-ul-six li').eq(n).addClass('current').siblings('').removeClass('current');
	});



	//轮播图的小按钮
	$('.current-ul-one li').click(function(event){
		var index=$(this).index()	
		$(this).addClass('current').siblings('').removeClass('current');
		$('.img-ul').animate({'left':-1200*index+'px'}, 500)
	});
	$('.current-ul-two li').click(function(event){
		var index1=$(this).index()	
		$(this).addClass('current').siblings('').removeClass('current');
		$('.new-sing-ul').animate({'left':-1200*index1+'px'}, 500)
	});
	$('.current-ul-three li').click(function(event){
		var index2=$(this).index()	
		$(this).addClass('current').siblings('').removeClass('current');
		$('.banner-three-ul').animate({'left':-1200*index2+'px'}, 500)
	});
	$('.current-ul-six li').click(function(event){
		var index3=$(this).index()	
		$(this).addClass('current').siblings('').removeClass('current');
		$('.banner-six-ul').animate({'left':-1200*index3+'px'}, 500)
	});


	//更多
	$('.more').hover(function(event){
		$('.more-icon').css('background-positionY','-55px');
	},function(){
		$('.more-icon').css('background-positionY','-35px');
	})



	//客户端下拉菜单
	$('.big-ul li:nth-child(3)').hover(function(){
		$('.client').show();
	},function(){
		$('.client').hide();
	})




	//排行榜-流行指数
	$('.five-big-li').mouseenter(function(){
		$(this).children('.popu').children('.po').hide();
		$(this).children('.popu').children('.po-play').css({
			opacity: '1',
			transform: 'scale(1.1)'
		});
	})


	//固定按钮-返回顶部
	$(window).scroll(function(event) {
		var h=$(window).scrollTop();
		if(h>150){
			$('.ul-topicon').css('opacity', '1');
		}else{
			$('.ul-topicon').css('opacity', '0');
		}
	});


	//登录-二维码
	$('.weima').hover(function(){
		$('.phone-wei').css('opacity', '1');
	},function(){
		$('.phone-wei').css('opacity', '0');
	})


})