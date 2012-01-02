dojo.provide("mycustom.navigator.ui.MenuBar");

dojo.require("dijit._Widget");
dojo.require("dijit._Templated");


dojo.declare("mycustom.navigator.ui.MenuBar", [ dijit._Widget, dijit._Templated ],
{
		// Here is the HTML template/snippet for the widget.
		templateString:			dojo.cache("mycustom.navigator.ui", "MenuBar.html"),
		// This enables us to define widgets inside our widget using 'dojoType'
		widgetsInTemplate:	true,
		
		// The postCreate function is called after the template is rendered, but before it is inserted into the DOM
		postCreate:	function()
		{
			console.log("mycustom.navigator.ui.MenuBar postCreate called.");

		}

		
});
