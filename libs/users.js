	$(document).ready(function loadPosts(){
		var root ='https://jsonplaceholder.typicode.com';
		$.ajax({
 			url: root + '/users',
 			method: 'GET'
		}).then(function(data) {

		/*2 template-uri - unul pozitionare stanga / unul dreapta */

		$.map( data, function( post, index ){
		var template = '<div align="right">' + 
						'<h2>' + post.name + '</h2>' +
						'<h4>' + 'Username: ' + post.username + '</h4>' +
						'<p>' + 'Email: ' + post.email + '</p>' +
						'<h4>' + 'Address: ' + post.address.street + '</h4>' +
						'<p>' + post.address.suite + '</p>' +
						'<p>' + post.address.city + '</p>' +
						'<p>' + post.address.zipcode + '</p>' +
						'<p>' + 'Phone: ' + post.phone + '</p>' +
						'<p>' + 'Website: ' + post.website + '</p>' +
						'<h4>' + 'Company: ' + post.company.name + '</h4>' +
						'<p>' + post.company.catchPhrase + '</p>' +
						'<p>' + post.company.bs + '</p>' +
						'</div>';

		var template2 = '<div align="left">' + 
						'<h2>' + post.name + '</h2>' +
						'<h4>' + 'Username: ' + post.username + '</h4>' +
						'<p>' + 'Email: ' + post.email + '</p>' +
						'<h4>' + 'Address: ' + post.address.street + '</h4>' +
						'<p>' + post.address.suite + '</p>' +
						'<p>' + post.address.city + '</p>' +
						'<p>' + post.address.zipcode + '</p>' +
						'<p>' + 'Phone: ' + post.phone + '</p>' +
						'<p>' + 'Website: ' + post.website + '</p>' +
						'<h4>' + 'Company: ' + post.company.name + '</h4>' +
						'<p>' + post.company.catchPhrase + '</p>' +
						'<p>' + post.company.bs + '</p>' +
						'</div>';

		if (index % 2 == 0) {
			$('#users').append(template);
		} else {
			$('#users').append(template2);
		}

		$('.loadPosts').click(function(ev){
		});
		setTimeout(function(){

		/*Selectati toti children din #users/ #posts*/
		var children = $('#users div').children();
		console.log("TOTI CHILDREN DIN #USERS",children);

		/*Elementele 2 si 7 aiba background rosu*/
		$('#users div').eq(1).css('background','red');
		$('#users div').eq(6).css('background','red');

		/*selectati first/last element*/
		var first = $('#users div').first().find('h2');
		console.log('SELECTATI FIRST ELEMENT',first);

		var last = $('#users div').last();
		console.log('SELECTATI LAST ELEMENT',last);


		/*Faceti append de text pe fiecare children adaugand textul 'Text appended'.
		$('#users div').children().append(' Text appended')*/

		/*Toti children ai unui children sa aiba culoarea albastru, cu exceptia elementului 2.*/

		$('#users div').children().css('background','#cceeff');
		$('#users div').children().eq(2).css('background','white');
		
		/*Cautati #users   si afisati in consola: children, siblings, parent;*/
		$('#users div').children();
		$('#users div').parent();
		$('#users div').siblings();

		/*Inlocuiti text la primul child element din childrenii #users*/
		var firstChild = $('#users div').children().eq(1).text('Inlocuiti text');
		console.log('INLOCUITI TEXT LA PRIMUL CHILD ELEMENT DIN CHILDRENII #USERS',firstChild);

		/*Toate div-urile ce au pozitionare dreapta sa le aplicati bg rosu din jquery.*/
		$(template).css('background','red');
		console.log('div dreapta - rosu',template);

		},2000);

		});
	});

});
/*La click show/hide al 2 lea children din #users*/
function hidePost(){
	$('#users div').children().eq(2).hide();
	console.log('S-A ASCUNS',hidePost);
}

function showPost(){
	$('#users div').children().eq(2).show();
	console.log('S-A AFISAT',showPost);

}
/*creati o functie ce pe un event de click sa navigheze pe 'http://google.com' */
function navigate(){
	window.location.href = 'https://www.google.ro/';
	window.location.target = 'blank';
}



	
