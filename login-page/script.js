var slider_img= document.querySelector('.slider-img');
var images=['image1.jpg','image2.png','image3.png'];
var i=0; // current img index
var go= document.querySelector('.login-button');


function next(){
	if(i >= images.length-1) i = -1;
	i++;    
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}

function goLink(){
     window.location.href="https://www.google.com.tr/search?q=dolar+grafik&bih=644&biw=1366&hl=tr&sxsrf=AOaemvJxdvGbkBXIUjk1gygmL2d2L5WS9g%3A1635845727080&source=hp&ei=XwaBYaFSs4TBuQ-6xYvwCA&iflsig=ALs-wAMAAAAAYYEUb654eHO3nHAuVP1hq5RrcmomRPTa&oq=dolar+grafik&gs_lcp=Cgdnd3Mtd2l6EAMyEAgAEIAEELEDEIMBEEYQggIyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEOoCECc6BAgjECc6CwgAEIAEELEDEIMBOg4ILhCABBCxAxDHARCjAjoECAAQQzoLCC4QgAQQxwEQrwE6CAgAEIAEELEDOgkIIxAnEEYQggJQlQtYl1xgyF1oAXAAeAGAAdYBiAGqDpIBBjAuMTEuMZgBAKABAqABAbABCg&sclient=gws-wiz&ved=0ahUKEwjh_dybsPnzAhUzQjABHbriAo4Q4dUDCAc&uact=5";
}