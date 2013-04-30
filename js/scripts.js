function listPosts(data){
	var output = '<ul data-role="listview" data-theme="a" data-filter="true">'
	$.each(data.posts, function(key,val){
		output += '<li>';
		output += '<a href="#blogpost" onclick="showPost('+val.id+')" data-transition="slide">';
		output += '<h3>' + val.title + '</h3>';
		output += (val.thumbnail) ? 
			'<img src="'+val.thumbnail+'" alt="'+val.title+'"/>' :
			'<img src="images/defaultPostThumb.png" alt="'+val.title+'"/>' ;
		output += '<p>' + val.excerpt + '</p>';
		output += '</a>';
		output += '</li>';
	});
	output += '</ul>';
	$('#postList').html(output);
}
function showPost(id){
	$('#mypost').html("");
	$.getJSON('http://glutenfreesocial.com/?json=get_post&post_id='+id + '&callback=?', function(data){
		var output = '';
		output += '<h3>' + data.post.title + '</h3>';
		output += data.post.content;
		$('#mypost').html(output);
	});
}
function listTweets(data){
	console.log(data)
}