let stars=document.querySelector('.stars');
let moon=document.querySelector('.moon');
let mountains3=document.querySelector('.mountains3');
let mountains4=document.querySelector('.mountains4');
let river=document.querySelector('.river');
let boat=document.querySelector('.boat');
let mountains7=document.querySelector('.mountains7');
let js=document.querySelector('.js');
let menu=document.querySelector('.menu')
let list=document.querySelector('.list')
window.onscroll=function(){
    let value=scrollY;
    stars.style.left=value*1+'px';
    moon.style.top=value*2+'px';
    mountains3.style.top=value*1.5+'px';
    mountains4.style.top=value*1.2+'px';
    river.style.top=value+'px';
    boat.style.top=value+'px';
    boat.style.left=value*4+'px';
    js.style.fontSize=value+'px';
    if(scrollY>=67){
        js.style.fontSize=67+'px';
        js.style.position='fixed';
        if(scrollY>=440){
            js.style.display='none';

        }else{
            js.style.display='block';

        }
        if (scrollY>=200){
            document.querySelector('.main').style.background= 'linear-gradient(#99bacf,#10001f)';

        }else{
            document.querySelector('.main').style.background= 'linear-gradient(#200016,#10001f)';

        }

    }
}
menu.onclick=function(){
   list.style.display='block';
}