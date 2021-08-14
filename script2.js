$(document).ready(function(){
     $('table td,.headings span').click(function(){
          $(this).toggleClass('strikee non-strikee');
      });
      $(document).on('change keyup click','#spl-ins,#siz-bx,#pos,#de,#cbw,#sdbw',function(){
        var font_size = $(this).val();
        var idd = this.id;
        console.log(font_size);

        $('textarea.'+idd).css('font-size',font_size);
      });  
});