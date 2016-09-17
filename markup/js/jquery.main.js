// Create the dropdown base
var nav = $("#main-nav");
$("<select class='nav-select visible-xs' />").appendTo(nav);
var select = nav.find("select");

// Populate dropdown with menu items
nav.find("a").each(function() {
	var el = $(this);
		$("<option />", {
		"value"   : el.attr("href"),
		"text"    : el.text()
	}).appendTo("nav select");
});

$("nav select").change(function() {
	window.location = $(this).find("option:selected").val();
});

$(function(){
	$('#gallery').slick({
		dots: false, 
		autoplay: false,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});

	$('.js--features-gallery').slick({
		arrows: false,
		dots: true
	});

	$(function($) {

	    $(".knob").knob({
	        change : function (value) {
	            //console.log("change : " + value);
	        },
	        release : function (value) {
	            //console.log(this.$.attr('value'));
	            console.log("release : " + value);
	        },
	        cancel : function () {
	            console.log("cancel : ", this);
	        },
	        /*format : function (value) {
	         return value + '%';
	         },*/
	        draw : function () {

	            // "tron" case
	            if(this.$.data('skin') == 'tron') {

	                this.cursorExt = 0.5;

	                var a = this.arc(this.cv)  // Arc
	                        , pa                   // Previous arc
	                        , r = 1;

	                this.g.lineWidth = this.lineWidth;

	                if (this.o.displayPrevious) {
	                    pa = this.arc(this.v);
	                    this.g.beginPath();
	                    this.g.strokeStyle = this.pColor;
	                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
	                    this.g.stroke();
	                }

	                this.g.beginPath();
	                this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
	                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
	                this.g.stroke();

	                this.g.lineWidth = 2;
	                this.g.beginPath();
	                this.g.strokeStyle = this.o.fgColor;
	                this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 3 / 3, 0, 5 * Math.PI, false);
	                this.g.stroke();

	                return false;
	            }
	        }
	    }); 
	});
})