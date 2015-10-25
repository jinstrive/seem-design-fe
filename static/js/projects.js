var curPage = 0; //当前页码 
var is_more = true;
var total,pageSize,totalPage; //总记录数，每页显示数，总页数 

function render_projects(data) {
	// var data = [
	// 	{
	// 		'id': '21', 
	// 		'img': '../static/image/temp_pic.png',
	// 		'title': '【未满】生活美学工作室', 
	// 	},
	// 	{
	// 		'id': '21', 
	// 		'img': '../static/image/temp_pic.png',
	// 		'title': '【未满】生活美学工作室', 
	// 	},
	// 	{
	// 		'id': '21', 
	// 		'img': '../static/image/temp_pic.png',
	// 		'title': '【未满】生活美学工作室', 
	// 	},
	// 	{
	// 		'id': '21', 
	// 		'img': '../static/image/temp_pic.png',
	// 		'title': '【未满】生活美学工作室', 
	// 	},
	// 	{
	// 		'id': '21', 
	// 		'img': '../static/image/temp_pic.png',
	// 		'title': '【未满】生活美学工作室', 
	// 	},
	// ]
	var projectsListScript = $("#projects-list-template").html();
	var projectsListTemplate = Handlebars.compile(projectsListScript);
	$('#projects-content').append(projectsListTemplate(data));
}

function load_projects_data(){
	if (is_more){
		$.ajax({ 
			type: 'GET',
			url: "/seems/all_pro_info", 
			data: {'page_num': curPage + 1, 'page_size': 10}, 
			success: function(data_json){
				projects_list = data_json.data;
				console.log(projects_list);
				render_projects(projects_list);
				curPage += 1;
				if (projects_list.length <= 1){
					is_more = false;
				}
	    	}
	  	});
	}
}

load_projects_data();