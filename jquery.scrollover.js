(function($){
   
   $.fn.scrollover = function( options ) {

      var opts = $.extend( {}, $.fn.scrollover.defaults, options );
      
      $.fn.scrollover.defaults = {
        
        // Our Settings.
        classname:        "scrolled",
        onScrollStart:    function() {},
        onScrollComplete: function() {}

      };

      var $this = $(this);

      var nav_height = $this.height(),
          offset = $this.scrollTop();

      function scrolled_switch() {
        if ( offset > 0 ) {
          console.log("offset top is gt 0");
          $this.addClass( $.fn.scrollover.defaults.classname );
        }

        else {
          console.log("offset top is 0");
          $this.removeClass( $.fn.scrollover.defaults.classname );
        }
      }

      $(window).on("scroll", function() {
        $.fn.scrollover.defaults.onScrollStart();
        
        // Update our scrollTop value
        offset = $(this).scrollTop();

        // switch our state, if needed
        scrolled_switch();

      });

      
      // Just return this object for now.
      // We're not gonna be applying this to
      // a jQuery set so no need to return this.each()
      return this;
   };

})(jQuery);