
  //attaches an even listener to the 'window' object that is triggered when the page loads
  window.addEventListener('load', function(e) {
    //varaiable called "appleGrid" targets html ID called "apple-grid"
  	var appleGrid = document.getElementById('apple-grid');
    //varaiable called "appleList" targets html ID called "apple-list"
  	var appleList = document.getElementById('apple-list');
    //varaiable called "appleThumbs" targets html ID called "apple-thumbs"
  	var appleThumbs = document.getElementById('apple-thumbs');
    //varaiable called "gridApples" targets html ID called ".apple"
  	var gridApples = document.querySelectorAll('.apple');

    //foreach function is applied to the elements called "gridApple" and "i"
  	gridApples.forEach((gridApple, i) => {
      //the functionwill be executed when the gridApple is clicked
  		gridApple.addEventListener('click', pickApple);
  	});

    //defines the function "pickApple"
  	function pickApple(e) {
      //variable "apple" uses the function e on top?
  		var apple = e.target;
      //varaiable "apple" converts a number to a string
  		var appleName = apple.dataset.apple.toString();

      //varaiable "appleListItem" creates a list in html
  		var appleListItem = document.createElement('li');
      //selects every 'ol' in html
  		var ol = appleList.querySelector('ol');
      //appends appleListItem to ol
  		ol.appendChild(appleListItem);
      //writes "appleName" in the appleListItem
  		appleListItem.innerText = appleName;
      //varaiable "appleThumb" has the equal value of 'cloned' apple
  		var appleThumb = apple.cloneNode(true);
      //change is applied to html
  		appleThumbs.appendChild(appleThumb);
  	}
  });
