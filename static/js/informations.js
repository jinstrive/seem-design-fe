var curPage = 0; //当前页码 
var is_more = true;
var total,pageSize,totalPage; //总记录数，每页显示数，总页数 

function render_author_infos(data) {
	// var data = [
	// 	{
	// 		'nickname': '梁甜', 
	// 		'avator': '../static/image/avatar.png',
	// 		'english_name': 'MOSSIA', 
	// 		'descr': '<p>卡文克莱是一个全方位的设计师，不论是正牌、副牌或任何一个产品路线，他都有完整的企划想法。现在，他旗下一共有三个主要的服装路线，而配件则依服装表现来搭配设计。现年56岁的他在纽约时尚界的一言一行都被媒体注视着，有“纽约第七大道的王子”的封号。 </p>'
	// 	},				
	// 	{
	// 		'nickname': '梁甜', 
	// 		'avator': '../static/image/avatar.png',
	// 		'english_name': 'MOSSIA', 
	// 		'descr': '<p>卡文克莱是一个全方位的设计师，不论是正牌、副牌或任何一个产品路线，他都有完整的企划想法。现在，他旗下一共有三个主要的服装路线，而配件则依服装表现来搭配设计。现年56岁的他在纽约时尚界的一言一行都被媒体注视着，有“纽约第七大道的王子”的封号。 </p>'
	// 	},				
	// 	{
	// 		'nickname': '梁甜', 
	// 		'avator': '../static/image/avatar.png',
	// 		'english_name': 'MOSSIA', 
	// 		'descr': '<p>卡文克莱是一个全方位的设计师，不论是正牌、副牌或任何一个产品路线，他都有完整的企划想法。现在，他旗下一共有三个主要的服装路线，而配件则依服装表现来搭配设计。现年56岁的他在纽约时尚界的一言一行都被媒体注视着，有“纽约第七大道的王子”的封号。 </p>'
	// 	},		
	// ]
	var authorsScript = $("#authors-list-template").html();
	var authorsTemplate = Handlebars.compile(authorsScript);
	$('#authors_list').append(authorsTemplate(data));
}

function load_authors_data(){
	if (is_more){
		$.ajax({ 
			type: 'GET',
			url: "/seems/all_authors", 
			data: {'page_num': curPage + 1, 'page_size': 10}, 
			success: function(data_json){
				authors_list = data_json.data;
				console.log(authors_list);
				render_author_infos(authors_list);
				curPage += 1;
				if (authors_list.length <= 1){
					is_more = false;
				}
	    	}
	  	});
	}
}

load_authors_data();