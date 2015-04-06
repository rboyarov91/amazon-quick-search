	
if (!localStorage['notfirst'])
{
	localStorage["defsite"]="g";
	localStorage["defsite2"]="th";
	localStorage["siteid"]="s1";
	localStorage["siteid2"]="s21";
	localStorage['notfirst'] = '1';
}
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.greeting!="")
    	openTabs(request.greeting);
  });

chrome.omnibox.onInputEntered.addListener(
function(text)
{
	var url;
	if(text.indexOf("\\t")!=-1)
	{
		text=text.replace("\\t","");
		url = " http://www.amazon.com/s?url=search-alias%3Daps&field-keywords="+text;
		// if(localStorage["defsite2"]=="th")
		// 	url = "http://thesaurus.com/browse/"+text;
		// else if(localStorage["defsite2"]=="mw")
		// 	url = "http://www.merriam-webster.com/thesaurus/"+text; 						      
		// else if(localStorage["defsite2"]=="co")
		// 	url = "http://www.collinsdictionary.com/dictionary/english-thesaurus/"+text;
		chrome.tabs.create({"url":url, "selected":true});
		return;
	}

	url = " http://www.amazon.com/s?url=search-alias%3Daps&field-keywords="+text;

	// if(localStorage["defsite"]=="g")
	// 	url = "https://www.google.co.in/search?hl=en&q=define+"+text;
	// else if(localStorage["defsite"]=="mw")
	// 	url = "http://www.merriam-webster.com/dictionary/"+text; 						      
	// else if(localStorage["defsite"]=="di")
	// 	url = "http://dictionary.reference.com/browse/"+text; 	
	// else if(localStorage["defsite"]=="co")					      
	// 	url = "http://www.collinsdictionary.com/dictionary/english/"+text;
	// else if(localStorage["defsite"]=="tfd")					      
	// 	url = "http://www.thefreedictionary.com/"+text;
	chrome.tabs.create({"url":url, "selected":true});

});

function openTabs(info)
{
	var url,str;
	if((typeof info)=="string")
		str=info;
	else
		str=info.selectionText ;
	url = " http://www.amazon.com/s?url=search-alias%3Daps&field-keywords="+str;
	// if(localStorage["defsite"]=="g")
	// 	url = " https://www.google.co.in/search?hl=en&q=define+"+str;
	// else if(localStorage["defsite"]=="mw")
	// 	url = "http://www.merriam-webster.com/dictionary/"+str; 						      
	// else if(localStorage["defsite"]=="di")
	// 	url = "http://dictionary.reference.com/browse/"+str; 	
	// else if(localStorage["defsite"]=="co")					      
	// 	url = "http://www.collinsdictionary.com/dictionary/english/"+str;
	// else if(localStorage["defsite"]=="tfd")					      
	// 	url = "http://www.thefreedictionary.com/"+str;

	chrome.tabs.create({"url":url, "selected":true});
}

function openTabs2(info)
{
	var  url,str;
	if((typeof info)=="string")
		str=info;
	else
		str=info.selectionText ;
	if(localStorage["defsite2"]=="th")
		url = "http://thesaurus.com/browse/"+str;
	else if(localStorage["defsite2"]=="mw")
		url = "http://www.merriam-webster.com/thesaurus/"+str; 						      
	else if(localStorage["defsite2"]=="co")
		url = "http://www.collinsdictionary.com/dictionary/english-thesaurus/"+str;
	chrome.tabs.create({"url":url, "selected":true});
	return;
}

var title = "Define ";
var context = "selection";
var id = chrome.contextMenus.create({"title": "Amazon: '"+'%s'+"'", "contexts":[context], "onclick":openTabs});
//var id2 = chrome.contextMenus.create({"title": "Thesaurus: '"+'%s'+"'", "contexts":[context], "onclick":openTabs2});

