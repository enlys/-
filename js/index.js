var tabs=document.getElementById("tabs").getElementsByTagName("li");
console.log(tabs);
var list=document.getElementById("list").getElementsByTagName("ul");

for(var i=0;i<tabs.length;i++){
    tabs[i].onclick=showlist;
}

function showlist(){
    for(var i=0;i<tabs.length;i++){
        if(tabs[i]==this){
            tabs[i].className="active";
            list[i].className="clearfix active";
        }else{
            tabs[i].className="";
            list[i].className="clearfix";

        }
        
    }
}

var sck=document.getElementById("seckillNav");
window.onscroll=function()
{
  var sc=document.documentElement.scrollTop ||documet.body.scrollTop || window.pageYOffset;//解决浏览器兼容问题
  if(sc>=260)
  {
	  sck.className="seckill-nav seckill-navfixed";
  }
  else
  {
	  sck.className="seckill-nav";
	  
  }
};
