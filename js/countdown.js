function CountdownTimer(elm,tl,mes){
 this.initialize.apply(this,arguments);
}
CountdownTimer.prototype={
 initialize:function(elm,tl,mes) {
  this.elem = document.getElementById(elm);
  this.tl = tl;
  this.mes = mes;
},countDown:function(){
  var timer='';
  var today=new Date();
  var day=Math.floor((this.tl-today)/(24*60*60*1000));
  var hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
  var min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
  var sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
  var me=this;

  if( ( this.tl - today ) > 0 ){
   timer += '<span class="number-wrapper"><div class="line"></div><span class="number day">'+day+'</span><div class="caption">ДНИ</div></span>';
   timer += '<span class="number-wrapper"><div class="line"></div><span class="number hour">'+hour+'</span><div class="caption">ЧАСЫ</div></span>';
   timer += '<span class="number-wrapper"><div class="line"></div><span class="number min">'+this.addZero(min)+'</span><div class="caption">МИНУТЫ</div></span><span class="number-wrapper"><div class="line"></div><span class="number sec">'+this.addZero(sec)+'</span><div class="caption">СЕКУНДЫ</div></span>';
   this.elem.innerHTML = timer;
   tid = setTimeout( function(){me.countDown();},10 );
 }else{
   this.elem.innerHTML = this.mes;
   return;
 }
},addZero:function(num){ return ('0'+num).slice(-2); }
}
function CDT(){

 // Set countdown limit
 var tl = new Date('2019/08/25 15:00:00');

 // You can add time's up message here
 var timer = new CountdownTimer('CDT',tl,'<span class="number-wrapper"><div class="line"></div><span class="number end">Время пришло!</span></span>');
 timer.countDown();
}
window.onload=function(){
 CDT();
}

function openbox(id){
  display = document.getElementById(id).style.display;
  if(display=='' || display=='none'){
   document.getElementById(id).style.display='block';
 }else{
   document.getElementById(id).style.display='none';
 }
}



function openboxbody(){
  $('#registr').addClass('open');
  $('body').addClass('block');
}

function closeboxbody(){
  $('#registr').removeClass('open');
  $('body').removeClass('block');
}




