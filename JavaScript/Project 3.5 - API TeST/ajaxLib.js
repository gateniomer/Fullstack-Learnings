//AJAXLIB Consturctor
function ajaxLib(){
  this.http = new XMLHttpRequest();
}
ajaxLib.prototype.get = function(url,callback){
  this.http.open('GET',url,true);
  this.http.onload = function(){
    if(this.status === 200){
      var result = JSON.parse(this.responseText);
      callback(result);
    }else{
      console.log(self.http.status);
    }
    
  };

  this.http.send();
}