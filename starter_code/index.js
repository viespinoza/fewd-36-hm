
/* I tried a bunch of things and nothing worked. So I started to use the solution code - first looking and typing my own functions, but it didn't work, so I started copying iy exactly to avoid adding spaces and typos, but not working. Is it a problem with my folder location or html? I tested with two versions of the JS snippets, also with both <script> in the body and in the head, nothing. Finally my console said that there was an unexpected error on line 43 but I didn't have a line 43...! Weird :-( This was very hard and I'm feeling quite lost now*/
/* OMG how frustrating... I had created a duplicate of the js file and was saving everything in it ut linking to the wrong one. Regardless, I found this pretty hard and couldn't have done this without looking at the solution :-( */

function addMe(first,second){
}

// Use the ```$.ready()``` handler to delay your code
jQuery(document).ready(function (){


/* on READ MORE click, hide the "Read More" link using ```$.hide()``` & have remainder of the blog's content main column slide down and appear on page */

jQuery('.readmore').click(function (e) {
	e.preventDefault();
jQuery('#show-this-on-click').slideDown();
jQuery(".readmore").hide();
jQuery(".readless").show();
});


/* on READ LESS click, have the ```<p>``` slide up and hide the "Read Less" link using  ```$.slideUp()``` and ```$.hide()``` */
//show the "Read More" link using ```$.show()```


jQuery('.readless').click(function (e) {
	e.preventDefault();
	jQuery('#show-this-on-click').slideUp();
	jQuery('.readless').hide();
	jQuery('.readmore').show();
    });

 
/* Using the same functions as above, if a user clicks the "Learn More" link in the sidebar, have the ```<span>``` inside that ```<p>``` slide down and hide the "Learn More" link using ```$.slideDown()``` and ```$.hide()` */

jQuery('.learnmore').click(function (e) {
	e.preventDefault();
	jQuery('#learnmoretext').slideDown();
	jQuery('.learnmore').hide();
    });
/* PS: In the html, why the <script> linking to the js file is in the <head>, not on the bottom of the <body>? */
});