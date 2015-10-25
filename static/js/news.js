var curPage = 0; //当前页码 
var is_more = true;
var total,pageSize,totalPage; //总记录数，每页显示数，总页数 

function render_news(data) {
	var data = [
		{
			'create_time': '2015-09-21', 
			'title': '【未满】生活美学工作室', 
			'content': '<p>一直想去的一家店 可能是期待值太高了吧 去过之后有些失望 套餐的东西还是挺多的 特别喜欢摆盘 除了主餐不满意 其他都还可以 应该不会再去了</p><p>#芝麻奶油面包# 面包松......</p><img src="../static/image/pic.png" alt="">'
		},		
		{
			'create_time': '2015-09-21', 
			'title': '【未满】生活美学工作室', 
			'content': '<p>一直想去的一家店 可能是期待值太高了吧 去过之后有些失望 套餐的东西还是挺多的 特别喜欢摆盘 除了主餐不满意 其他都还可以 应该不会再去了</p><p>#芝麻奶油面包# 面包松......</p><img src="../static/image/pic.png" alt="">'
		},
		{
			'create_time': '2015-09-21', 
			'title': '【未满】生活美学工作室', 
			'content': '<p>一直想去的一家店 可能是期待值太高了吧 去过之后有些失望 套餐的东西还是挺多的 特别喜欢摆盘 除了主餐不满意 其他都还可以 应该不会再去了</p><p>#芝麻奶油面包# 面包松......</p><img src="../static/image/pic.png" alt="">'
		},		
	]
	var newsListScript = $("#news-list-template").html();
	var newsListTemplate = Handlebars.compile(newsListScript);
	$('#news_list').append(newsListTemplate(data));
}

function load_news_data(){
	if (is_more){
		$.ajax({ 
			type: 'GET',
			url: "/seems/all_news_info", 
			data: {'page_num': curPage + 1, 'page_size': 10}, 
			success: function(data_json){
				news_list = data_json.data;
				console.log(news_list);
				render_news(news_list);
				curPage += 1;
				if (news_list.length <= 1){
					is_more = false;
				}
	    	}
	  	});
	}
}

load_news_data();