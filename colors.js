


var Links = {
    SetColor:function(color){
      var alist =document.querySelectorAll('a')
      var i = 0;
      while(i < alist.length){alist[i].style.color = color; i = i+1;}
  }};
  
  var Body = {
    setBackgroundColor:function(color){document.querySelector('body').style.backgroundColor = color;}
  ,setColor:function(color){document.querySelector('body').style.color = color;}
} ;

