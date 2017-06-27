
	
	function changeImg(url){
		setItem('url', $('.galaxy').attr('src'))
		$('.galaxy').attr('src', url)
	}

	function revertImg(){
		var url = window.localStorage.getItem('url')
		$('.galaxy').attr('src', url)
	}

	function setItem(key, value){
		window.localStorage.setItem(key, value)
	}

	function getItem(key){
		var txt = window.localStorage.getItem(key)
		appendText('#custom',txt)
	}
	function appendText(selector,txtValue){
		$(selector).append(txtValue)
	}


	/*Blog - iterare pe array de obiecte si cum sa cream template uri in javascript */

	function loadPosts(){
		var root ='https://jsonplaceholder.typicode.com';
		/*var blogPosts = [
		{
			title: 'Titlu 1',
			subtitle: 'Subtitlu 1',
			author: 'Eu',
			date: '12.03.2017',
			article: 'Lorem Ipsum'
		},

		{
			title: 'Titlu 2',
			subtitle: 'Subtitlu 2',
			author: 'Eu',
			date: '12.03.2017',
			article: 'Lorem Ipsum'
		},

		{
			title: 'Titlu 3',
			subtitle: 'Subtitlu 3',
			author: 'Eu',
			date: '12.03.2017',
			article: 'Lorem Ipsum'
		},

		{
			title: 'Titlu 4',
			subtitle: 'Subtitlu 4',
			author: 'Eu',
			date: '12.03.2017',
			article: 'Lorem Ipsum'
		},

		{
			title: 'Titlu 5',
			subtitle: 'Subtitlu 5',
			author: 'Eu',
			date: '12.03.2017',
			article: 'Lorem Ipsum'
		}
	];*/


	$.ajax({
 		url: root + '/posts',
 		method: 'GET'
	}).then(function(data) {

		$.map( data, function( post,index ){
		var template = '<div>' + 
						'<h2>' + post.title + '</h2>' +
						'<p>' + post.body + '</p>' +
						'</div>';

		/*if (index < 3) {
			$('#posts').append(template);
		} else {
			$('#posts').append(template);
		}*/

		$('#posts').append(template);
		console.log(template);

		});
	});
}

/*
	function changestyle (selector, atribut, valoare){
		$(selector).css(atribut, valoare);
	}


	setTimeout(function(){
		changestyle('#custom','background','blue');
	}, 3000)

	setTimeout(function(){
		changestyle('h2','font-size','10px');
	}, 4000)

	setTimeout(function(){
		changestyle('h3','font-color','red');
	}, 5000)






	
$(document).ready(function(){
	
	var cssBgKey = 'background' - cheie
	var cssBgColorValue = 'blue' - valoare

	 setTimeout(function(){
		$('#custom').css(cssBgKey, cssBgColorValue);
	}, 3000) */



	/*function changeStyle(selector,atribut,value)
	$(selector).css(atribut,value)*/

	






	/* setTimeout(function(){
		$('#custom').append('<h2>Lovely</h2>');
	}, 2000) 
	 sau 
	 var template = function(){
	 	return '<h2>Lovely</h2>'
	 }

	 setTimeout(function(){
		$('#custom').append(template);
	}, 2000) 



	/* setTimeout(function(){
		$('#custom').addClass('customColor');
	}, 2000) 
	adauga clasa la H1 

	setTimeout(function(){
		$('#custom').css('background', 'blue');
	}, 3000)
	schimba culoarea background '#home' 

	setTimeout(function(){
		$('#custom').html('my custom text');
	}, 4000)
	schimba textul pt H1 

	




})

*/
