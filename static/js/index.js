var curPage = 0; //当前页码 
var is_more = true;
var total,pageSize,totalPage; //总记录数，每页显示数，总页数 
// $(document).ready(function(){
//   $("#b01").click(function(){
//   htmlobj=$.ajax({url:"/jquery/test1.txt",async:false});
//   $("#myDiv").html(htmlobj.responseText);
//   });
// });

function render_pros(data) {
	// var data = [
	// 	{'img': '../static/image/temp_pic.png'},
	// 	{'img': '../static/image/temp_pic.png'},
	// 	{'img': '../static/image/temp_pic.png'},
	// 	{'img': '../static/image/temp_pic.png'},
	// 	{'img': '../static/image/temp_pic.png'},
	// ]
	var prosListScript = $("#index-pros-list-template").html();
	var prosListTemplate = Handlebars.compile(prosListScript);
	$('#index_pros_list').append(prosListTemplate(data));
}


function render_banner() {
	$.ajax({ 
		type: 'GET',
		url: "/seems/banners", 
		// data: {'page_num': curPage + 1, 'page_size': 6}, 
		success: function(data_json){
			banner_list = data_json.data;
			console.log(banner_list);
			var prosListScript = $("#index-banner-list-template").html();
			var prosListTemplate = Handlebars.compile(prosListScript);
			$('#swiper-wrapper').append(prosListTemplate(banner_list));
			var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        autoplay: 5000,
		        loop: true,
		    });
    	}
  	});

}

function load_proj_data(){
	if (is_more){
		$.ajax({ 
			type: 'GET',
			url: "/seems/all_pro_info", 
			data: {'page_num': curPage + 1, 'page_size': 6}, 
			// beforeSend:function(){ 
	  //           $("#list ul").append("<li id='loading'>loading...</li>");//显示加载动画 
	  //       }, 
			success: function(data_json){
				pros_list = data_json.data;
				console.log(pros_list);
				render_pros(pros_list);
				curPage += 1;
				if (pros_list.length <= 1 || pros_list.length == undefined){
					is_more = false;
					$(".signaline").html("<p style='text-decoration: none;'>more</p>");
				}
	    	}
	  	});
	}
}

render_banner();
load_proj_data();