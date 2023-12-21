// JavaScript Document







	function picplayer(tag,time,w,h,Lst,btnurl){
		if(Lst.length == 0){return false;}
		var Bigdiv = $("<div></div>");
		Bigdiv.width(w).height(h).css("overflow","hidden");
		var picsDiv = $("<div></div>");
		picsDiv.width(w*Lst.length).height(h).css("overflow","hidden");
		for(i=0;i<Lst.length;i++){
			var img=$("<img />");
			img.attr("src",Lst[i][0]).width(w).height(h);
			picsDiv.append(img);
			if(Lst[i][1]){				
				img.wrap("<a href='"+Lst[i][1]+"' target='"+ Lst[i][2]  +"'></a>");
			}
			
		};		
		
		var mpt = (h-78)/2;
		var mpr = (w-30)-10;
		var btnL = $('<div  style="position:absolute;cursor:pointer; width:30px; height:78px; background:url('+btnurl+'); margin:'+ mpt +'px 0 0 10px;"></div>');
		var btnR = $('<div style="position:absolute;cursor:pointer; width:30px; height:78px; background:url('+btnurl+') -30px 0; margin:'+ mpt +'px 0 0 '+mpr+'px;"></div>');
		
		var ydivw=19*Lst.length;
		var ydiv_mpt= h - 30;
		var zdivw=(w-ydivw)/2;
		var syuan_div = $('<div style="wdith:'+w+'px; position:absolute; height:15px; margin-top:'+ydiv_mpt+'px;"><div style="float:left;height:5px;width:'+zdivw+'px;"></div></div>');
		
		for(i=0;i<Lst.length;i++){
			syuan_div.append("<a style='display:block;float:left;background:url("+btnurl+") -69px 0; width:9px; height:9px; margin-right:10px;'></a>");
		}
		syuan_div.find("a:eq(0)").css("background-position","-60px 0");
		
		Bigdiv.append(syuan_div).append(btnL).append(btnR).append(picsDiv);
		$("#"+tag).width(w).height(h).append(Bigdiv);
		
		Bigdiv.attr("played",0);
		
		
		var starr;
		var star_fun = function(){
			starr =  setInterval(function(){
				start("right");			
			},time);
		}
		if(time>0){
			star_fun();
		}
		
		btnL.click(function(){
			start("left");
			clearInterval(starr);
			star_fun();
		});
		btnR.click(function(){
			start("right");
			clearInterval(starr);
			star_fun();
		});
		
		btnL.hover(function(){
			$(this).css('opacity', '0.5');
		},function(){
			$(this).css('opacity', '1.0');
		});
		btnR.hover(function(){
			$(this).css('opacity', '0.5');
		},function(){
			$(this).css('opacity', '1.0');
		});
		
		var start = function(fx){
			var ts = parseInt(Bigdiv.attr("played"));
			
			if(fx=="left"){
				ts-=1;	
			}else{
				ts+=1;
			}
			
			if(ts+1>Lst.length || ts<0){
				ts = 0;
			}
			
			picsDiv.stop().animate({marginLeft:-(ts*w)+"px"});		
			
			syuan_div.find("a").css("background-position","-69px 0");
			syuan_div.find("a:eq("+ts+")").css("background-position","-60px 0");
			
			Bigdiv.attr("played",ts);
		}
		
		
		
		//syuan_div.hover(function(){Bigdiv.attr("isplay",2);},function(){Bigdiv.attr("isplay",1);});
		
		//alert(Bigdiv.html())
		
	}
	//picplayer end
	
	