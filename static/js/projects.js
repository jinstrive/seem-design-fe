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
	$('#pros_list').append(projectsListTemplate(data));
}

function load_projects_data(){
	if (is_more){
		$.ajax({ 
			type: 'GET',
			url: "/seems/all_pro_info", 
			data: {'page_num': curPage + 1, 'page_size': 12, 'ptype': getUrlParam('ptype')}, 
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

function categorys_on_change(){
	ptype = getUrlParam('ptype');
	// $("#pro_cates>li").removeClass("cate-on");
	if (ptype == null){
		$("#pro_cates>li:first").addClass("cate-on");
		return;
	}
	$( "#pro_cates>li" ).each(function( index ) {
		// console.log( index + ": " + $( this ).text() );
		if (index == parseInt(ptype)){
			$(this).addClass("cate-on");
		}
	});
}


$(document).ready(function () {  
	categorys_on_change();
	load_projects_data();

    $(window).scroll(function () {  
        var $currentWindow = $(window);  
        //当前窗口的高度  
        var windowHeight = $currentWindow.height();  
        // console.log("current widow height is " + windowHeight);  
        //当前滚动条从上往下滚动的距离  
        var scrollTop = $currentWindow.scrollTop();  
        // console.log("current scrollOffset is " + scrollTop);  
        //当前文档的高度  
        var docHeight = $(document).height();  
        // console.log("current docHeight is " + docHeight);  

        //当 滚动条距底部的距离 + 滚动条滚动的距离 >= 文档的高度 - 窗口的高度  
        //换句话说：（滚动条滚动的距离 + 窗口的高度 = 文档的高度）  这个是基本的公式  
        if (scrollTop >= docHeight - windowHeight) {  
            load_projects_data();  
        }  
    });  
}); 