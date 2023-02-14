/* Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1" */


function removeUrlAnchor(url){
    // establish const = to index to find the indexOf #
    const index = url.indexOf('#');
    
    // conditional for if # is present to slice and return URL if not
    return index != -1 ? url.slice(0, index) : url
    
  }