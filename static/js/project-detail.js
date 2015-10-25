function render_project_detail(data) {
				
	// var data = {
	// 	'id': '12',
	// 	'title': '【未满】生活美学工作室',
	// 	'content': '<p>一直想去的一家店 可能是期待值太高了吧 去过之后有些失望 套餐的东西还是挺多的 特别喜欢摆盘 除了主餐不满意 其他都还可以 应该不会再去了</p><p>【前餐】#芝麻奶油面包# 面包松......</p><img src="../static/image/pic.png" alt=""><img src="../static/image/pic.png" alt=""><img src="../static/image/pic.png" alt="">',
	// }
	var projectDetailScript = $("#projects-detail-template").html();
	var projectDetailTemplate = Handlebars.compile(projectDetailScript);
	$('#project-detail-content').append(projectDetailTemplate(data));
}

function load_project_detail_data(){
	$.ajax({ 
		type: 'GET',
		url: "/seems/project_detail", 
		data: {'pid': getUrlParam('pid')}, 
		success: function(data_json){
			project_detail = data_json.data;
			console.log(project_detail);
			render_project_detail(project_detail);
    	}
  	});
}

load_project_detail_data();