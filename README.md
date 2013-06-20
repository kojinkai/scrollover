scrollover
==========

Just a really simple jQuery plugin to add and remove classes
when you scroll a fixed navigation.

This could be used to add box-shadows, for example, to stop the
page looking broken if you leave it mid-scroll and make it clear
to the user that there is a fixed top navigation.

Usage
-----

You can invoke the plugin on a jQuery object. The plugin assumes you will be applying this to
a single, main navigation object, like so
    
    $('#main-nav').scrollover();

Please note: **The plugin currently only works on a jQuery object that returns a single element**

This is simply so you can return a single object rather than looping over a jQuery set
and is designed to simply keep the plugin slightly more lightweight.

Options
-------

Currently, the only options are the classname you wish to add or remove.  Defaults to "scrolled" but can be overridden like so

    $('#main-nav').scrollover({
      classname: "myclassname"
    });
