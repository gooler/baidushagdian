$(function(){
	var $imgs=$('.bannerL img');
	var $imgsw=$('.bannerL').width();
	var $imgsh=$('.bannerL').height();
	var $imgsB=$('.bannerL')
	var now=0;
	var next=0;
	$imgs.css({left:-$imgsw}).eq(0).css({left:0});
	var t=setInterval(mov,3000)
	function mov(){
		next++;
		if(next>=$imgs.length){
			next=0;
		};
		$imgs.eq(next).css({left:$imgsw});
		$imgs.eq(now).animate({left:-$imgsw},500);
		$imgs.eq(next).animate({left:0},500);
		now=next;
	};
	$imgsB.hover(function(){
		clearInterval(t)
	},function(){
		t=setInterval(mov,3000)
	})
	// $imgs.hover(function(){
	// 	$(this).animate({height:$imgsh+30,width:$imgsw+30},300)
	// },function(){
	// 	$(this).animate({height:$imgsh,width:$imgsw},300,)
	
	// })
  var $li=$('.li img');
  var $liB=$('li');
  $li.hover(function(){
  	$(this).stop(true)
  	$(this).animate({left:-20},500)
   
  },function(){
  	$(this).animate({left:0},500)
  })

})