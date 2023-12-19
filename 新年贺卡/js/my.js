$(function() {
	if ($('.titem .swiper-container').length > 0) {
		var swiperban = new Swiper('.titem .swiper-container', {
			nextButton: '.titem .swiper-button-next',
			prevButton: '.titem .swiper-button-prev',
			centeredSlides: true
		});
	}




	$('#btngenerate').click(function() {
		$('#btngenerate').hide();
		var toname = '祝' + $('#toname').val();
		if (toname.length > 5) {
			$('#btngenerate').show();
			alert('请输入4字以内的发送对象！');
			return;
		}


		var uname = $('#uname').val();

		if (uname.length > 5) {
			$('#btngenerate').show();
			alert('请输入4字以内的署名！');
			return;

		}
		var id = $('#poster .say').val();
		// if (toname.includes('祝佟丽娅') || toname.includes('祝慎海雄') || uname.includes('佟丽娅') || uname
		// 	.includes('慎海雄')) {
		// 	$('#btngenerate').show();

		// 	alert('您的输入中含有敏感词，请重新输入！');
		// 	return;
		// }
		// $.post('https://aip.baidubce.com/rest/2.0/solution/v1/text_censor/v2/user_defined', {
		// 	text: toname + uname
		// }, function(res) {

		// 	if (res.code == 0) {
		// 		console.log('成功')
		// 	}
		// 	else{
		// 		console.log('失败')
		// 	}
		// })


		$.ajax({
			url: 'http://101.201.29.192:33333/WebService1.asmx/GifGenerate1',
			contentType: "application/json",
			dataType: "json",
			data: "{'modelid':'" + id + "','to':'" + toname +
				"','from':'" + uname + "'}",

			type: "POST",
			success: function(res) {

				var str = JSON.stringify(res);
				
				var first = str.lastIndexOf('{') + 1;
				var last = str.indexOf('}');
				console.log(str.substring(first, last))
				if(str.substring(first, last)=='不合规'){
					$('#btngenerate').show();
					alert('您的输入中含有敏感词，请重新输入！');
					return
				}
				// var imgUrl = '../images/' + str.substring(first, last) + '.png';
				var imgUrl = 'http://101.201.29.192/rongheka/images/' + str
					.substring(first, last) + '.png';


				$('.posterbg').hide();
				$('#view').hide();
				$('#imgBox').html('<img src="' + imgUrl + '" />').show()
					.parent('.poster').show();

				// console.log($('#imgBox').html());



			},
			error: function(e) {
				alert(e);
			},
		});
		// $.post('https://omgmkt.qq.com/api/verifytext', {
		// 	text: toname + uname
		// }, function(res) {

		// 	if (res.code == 0) {



		// 	} else {
		// 		$('#btngenerate').show();
		// 		alert('您的输入中含有敏感词，请重新输入！');
		// 	}
		// })

	})



	$('#btngenerate1').click(function() {
		$('#btngenerate1').hide();
		var toname = '致' + $('#toname').val();
		if (toname.length > 5) {
			$('#btngenerate1').show();
			alert('请输入4字以内的发送对象！');
			return;
		}
		
		11
		var uname = $('#uname').val();
		
		if (uname.length > 5) {
			$('#btngenerate1').show();
			alert('请输入4字以内的署名！');
			return;
		
		}
		var id = $('#poster .say').val();
		// if (toname.includes('祝佟丽娅') || toname.includes('祝慎海雄') || uname.includes('佟丽娅') || uname
		// 	.includes('慎海雄')) {
		// 	$('#btngenerate').show();
		
		// 	alert('您的输入中含有敏感词，请重新输入！');
		// 	return;
		// }
		// $.post('https://aip.baidubce.com/rest/2.0/solution/v1/text_censor/v2/user_defined', {
		// 	text: toname + uname
		// }, function(res) {
		
		// 	if (res.code == 0) {
		// 		console.log('成功')
		// 	}
		// 	else{
		// 		console.log('失败')
		// 	}
		// })
		
		
		$.ajax({
			url: 'http://101.201.29.192:33333/WebService1.asmx/GifGenerate1',
			contentType: "application/json",
			dataType: "json",
			data: "{'modelid':'" + id + "','to':'" + toname +
				"','from':'" + uname + "'}",
		
			type: "POST",
			success: function(res) {
		
				var str = JSON.stringify(res);
				
				var first = str.lastIndexOf('{') + 1;
				var last = str.indexOf('}');
				console.log(str.substring(first, last))
				if(str.substring(first, last)=='不合规'){
					$('#btngenerate1').show();
					alert('您的输入中含有敏感词，请重新输入！');
					return
				}
				// var imgUrl = '../images/' + str.substring(first, last) + '.png';
				var imgUrl = 'http://101.201.29.192/rongheka/images/' + str
					.substring(first, last) + '.png';
		
		
				$('.posterbg').hide();
				$('#view').hide();
				$('#imgBox').html('<img src="' + imgUrl + '" />').show()
					.parent('.poster').show();
		
				// console.log($('#imgBox').html());
		
		
		
			},
			error: function(e) {
				alert(e);
			},
		});
		// $.post('https://omgmkt.qq.com/api/verifytext', {
		// 	text: toname + uname
		// }, function(res) {
		
		// 	if (res.code == 0) {
		
		
		
		// 	} else {
		// 		$('#btngenerate').show();
		// 		alert('您的输入中含有敏感词，请重新输入！');
		// 	}
		// })

	})


	$('#btngenerate2').click(function() {
		$('#btngenerate2').hide();



		var id = $('#poster .say').val();
		// $.post('https://omgmkt.qq.com/api/verifytext', {
		// 	text: uname
		// }, function(res) {
		// 	if (res.code == 0) {

		$.ajax({
			url: 'http://101.201.29.192:33333/WebService1.asmx/GifGenerate1',
			contentType: "application/json",
			dataType: "json",
			data: "{'modelid':'" + id + "','to':'" + "" +
				"','from':'" + "" + "'}",

			type: "POST",
			success: function(res) {

				var str = JSON.stringify(res);
				var first = str.lastIndexOf('{') + 1;
				var last = str.indexOf('}');
				// var imgUrl = '../images/' + str.substring(first, last) + '.png';
				var imgUrl = 'http://101.201.29.192/rongheka/images/' + str
					.substring(first, last) + '.png';


				$('.posterbg').hide();
				$('#view').hide();
				$('#imgBox').html('<img src="' + imgUrl + '" />').show()
					.parent('.poster').show();

				console.log($('#imgBox').html());



			},
			error: function(e) {
				alert(e);
			},
		});


	})

})

function getQueryString(name) {
	let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	let r = window.location.search.substr(1).match(reg);
	if (r != null) {
		return unescape(r[2]);
	};
	return null;
}
