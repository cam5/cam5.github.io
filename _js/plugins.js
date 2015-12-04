// Creates dope footnotes from a Jekyll post that can float beside the
// main content, rather than at the end, functioning as more of an "aside".
(function($) {

  $(document).ready(function() {

    var content     = $('.content'),
        footNotes   = content.find('sup[id^="fnref"]');
        contentEdge = content.offset().left;

    $.each(footNotes, function(i, el) {

      /**
       * 1. We can reasonably assume that the Jekyll-parsed markdown for footnotes will remain
       *    in the #fnref:1 format for the anchors in the <sup> tags
       * 2. As well as the footnotes themselves to be in a #fn:1 format.
       * 3. But, jQuery's selector engine chokes on a literal `:`. Thinks we're too fancy!
       */
      var $el   = $(el),
          ref   = el.id,                           // 1
          refNo = el.id.replace('ref', ''),        // 2
          text  = $('li[id="' + refNo + '"] > p'); // 3

      $el.parent('p')
        .addClass('has-footnote-aside')

        .append($('<div/>', {
          id:     ref + '-aside',
          class:  'footnote-aside',
          text:   text.text().replace('↩', ''),
          style:  'top:' + ($el.parent('p').offset().top + 10) + 'px; left: ' + contentEdge + 'px;'
        }))
      ;

    });

  });

})(jQuery);
