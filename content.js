$(document).bind('keydown', 'ctrl+m', function(e) {
	var selection = window.getSelection(); 
	var str=selection.toString();
  chrome.extension.sendMessage({greeting: str}, function(response)
	{
		console.log(response.farewell);
	});
});






