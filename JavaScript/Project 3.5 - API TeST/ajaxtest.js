//AJAXLIB Consturctor
function ajaxLib(){
  this.http = new XMLHttpRequest();
}
ajaxLib.prototype.get = function(url,callback){
  this.http.open('GET',url);

  const self = this;
  this.http.onload = function(){
    if(self.http.status === 200){
      var result = JSON.parse(self.http.responseText)[0].text;
      console.log(self.http);
      callback(result);
    }else{
      console.log(self.http.status);
    }
    
  };

  this.http.send();
}