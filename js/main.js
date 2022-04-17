//  navber 
window.addEventListener('scroll', function() {
  if (window.scrollY > 152) {
  document.getElementById('navbar_top').classList.add('fixed-top');
 } else {
 document.getElementById('navbar_top').classList.remove('fixed-top');

 document.body.style.paddingTop = '0';
 } 
 });
 //////////////////////////////////////////
 function adddesc(ev){
  if(ev.id=="d1")
   document.getElementById('descrip-eslam').innerHTML="لَا إِلَٰهَ إِلَّا ٱللَّٰهُ مُحَمَّدًا رَسُولُ ٱللَّٰهِ";

  else if(ev.id=="d2")
   document.getElementById('descrip-eslam').innerHTML="( اللهُ أكْبَرُ اللهُ أكْبَرُ ) مرَّة واحدة. ( أشْهَدُ أنْ لاَّ إلَهَ إلاَّ اللهُ ) مرَّة واحدة . ( أشْهَدُ أنَّ مُحَمَّداً رَسُولُ اللهِ ) مرَّة واحدة . ( حَيَّ عَلَى الصَّلاةِ ) مرَّة واحدة . ( حَيَّ عَلَى الفَلاحِ ) مرَّة واحدة . ( قَدْ قَامَت الصَّلاةُ ) مرَّتان . ( اللهُ أكْبَرُ ) مرَّتان . ( لاَ إلَهَ إلاَّ اللهُ ) مرَّة واحدة.";

   else if(ev.id=="d3")
   document.getElementById('descrip-eslam').innerHTML="﴿وآتوا الزكاة﴾ إنفاق المال على جهة الفرض، وهي حق معلوم من المال، مقدر بقدر معلوم.";
   
   else if(ev.id=="d4")
   document.getElementById('descrip-eslam').innerHTML="﴿يَا أَيُّهَ الَّذِينَ ءآمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ﴾";

   else if(ev.id=="d5")
   document.getElementById('descrip-eslam').innerHTML="﴿وَأَذِّنْ فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا وَعَلَى كُلِّ ضَامِرٍ يَأْتِينَ مِنْ كُلِّ فَجٍّ عَمِيق﴾";
} 

function leaveData(ev){
  
  document.getElementById('descrip-eslam').innerHTML="";
}
/////////////////////time of Sala//////
$(document).ready(function(){
  var alterClass=function(){
 if(window.innerWidth < 550){
     
$('#linestyle').removeClass('linetime1_Style');
}
if(window.innerWidth >= 550){
$('#linestyle').addClass('linetime1_Style');
}
};
$(window).resize(function(){
alterClass();
});
alterClass();
});



///////////////////////counter////////
function updateCount(id)
{
 var value=parseInt(document.getElementById(id).textContent);
value+=1;
document.getElementById(id).textContent=value.toString();
}
   ///////////////////Shar////////////////////////////
   $(document).ready(function() {
  
    $(function() {
    
    var createPopover = function (item, title) {
                         
          var $pop = $(item);
          $pop.popover({
              placement: 'top',
              trigger: 'click',
              html: true,
              content: function () {
                  return $('#popup-content').html();
              }
          }).on('shown.bs.popover', function(e) {
              
              var current_popover = '#' + $(e.target).attr('aria-describedby');
              var $cur_pop = $(current_popover);
            
              $cur_pop.find('.close').click(function(){
                  
                  $pop.popover('hide');
              });
            
              
          });
  
          return $pop;
      };
  
   
    createPopover('#showPopover');
  
    
  });
  });
  ////////////////////////////////////////////////////////











 //////////////////////ReadMore/////////////////
 function ReadMore(dotID,morID,btID) {
   
  var dots ;
  var moreText;
  var btnText;
     dots = document.getElementById(dotID);
     moreText = document.getElementById(morID);
     btnText = document.getElementById(btID);
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "أقرأ المزيد"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "أقرأ أقل"; 
    moreText.style.display = "inline";
  }
}
