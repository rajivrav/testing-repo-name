/* Sample JavaScript file added with ScriptTag resource. 
This sample file is meant to teach best practices.
Your app will load jQuery if it's not defined. 
Your app will load jQuery if jQuery is defined but is too old, e.g. < 1.7. 
Your app does not change the definition of $ or jQuery outside the app. 
Example: if a Shopify theme uses jQuery 1.4.2, both of these statements run in the console will still return '1.4.2'
once the app is installed, even if the app uses jQuery 1.9.1:
jQuery.fn.jquery => "1.4.2" 
$.fn.jquery -> "1.4.2"
*/

/* Using a self-executing anonymous function - (function(){})(); - so that all variables and functions defined within 
aren’t available to the outside world. */

(function(){
  
/* Load Script function we may need to load jQuery from the Google's CDN */
/* That code is world-reknown. */
/* One source: http://snipplr.com/view/18756/loadscript/ */

var loadScript = function(url, callback){
 
  var script = document.createElement("script");
  script.type = "text/javascript";

  // If the browser is Internet Explorer.
  if (script.readyState){ 
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" || script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  // For any other browser.
  } else {
    script.onload = function(){
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
    
};

/* This is my app's JavaScript */
var fhcScript = function($){
  // $ in this scope references the jQuery object we'll use.
  // Don't use jQuery, or jQuery191, use the dollar sign.
  // Do this and do that, using $.
  
  
  $('#fhcFaq').find('.fhc-answer-container').addClass('collapse');
  
  $('.fhc-question').on('click', function(e) {
    	e.preventDefault();
 		$(this).closest('.fhc-item').find('.fhc-answer-container').toggleClass('collapse');
	});
};
  
  // BEGIN code for product colors on PDP
  
// Load script only of product pages
if(__st.p!='product')
	return;

var loadScript = function(url, callback){

	var script = document.createElement("script");
	script.type = "text/javascript";
	// If the browser is Internet Explorer.
	if (script.readyState){
		script.onreadystatechange = function(){
			if (script.readyState == "loaded" || script.readyState == "complete"){
				script.onreadystatechange = null;
				callback();
			}
		};
	// For any other browser.
	} else {
		script.onload = function(){
			callback();
		};
	}
	script.src = url;
	document.getElementsByTagName("head")[0].appendChild(script);

};

var ProductColorsAppJS = function($){
/* BEGINNING OF APP JS */

	var escapeHtml = (function () {
			var chr = { '"': '&quot;', '&': '&amp;', '<': '&lt;', '>': '&gt;' };
			return function (text) {
					return text.replace(/[\"&<>]/g, function (a) { return chr[a]; });
			};
	}());

	if(window.webyzeProductColorsLoaded)
		return;
	else
		window.webyzeProductColorsLoaded = true;

	function md5cycle(f,d){var b=f[0],a=f[1],c=f[2],e=f[3];b=ff(b,a,c,e,d[0],7,-680876936);e=ff(e,b,a,c,d[1],12,-389564586);c=ff(c,e,b,a,d[2],17,606105819);a=ff(a,c,e,b,d[3],22,-1044525330);b=ff(b,a,c,e,d[4],7,-176418897);e=ff(e,b,a,c,d[5],12,1200080426);c=ff(c,e,b,a,d[6],17,-1473231341);a=ff(a,c,e,b,d[7],22,-45705983);b=ff(b,a,c,e,d[8],7,1770035416);e=ff(e,b,a,c,d[9],12,-1958414417);c=ff(c,e,b,a,d[10],17,-42063);a=ff(a,c,e,b,d[11],22,-1990404162);b=ff(b,a,c,e,d[12],7,1804603682);e=ff(e,b,a,c,d[13],12,-40341101);c=ff(c,e,b,a,d[14],17,-1502002290);a=ff(a,c,e,b,d[15],22,1236535329);b=gg(b,a,c,e,d[1],5,-165796510);e=gg(e,b,a,c,d[6],9,-1069501632);c=gg(c,e,b,a,d[11],14,643717713);a=gg(a,c,e,b,d[0],20,-373897302);b=gg(b,a,c,e,d[5],5,-701558691);e=gg(e,b,a,c,d[10],9,38016083);c=gg(c,e,b,a,d[15],14,-660478335);a=gg(a,c,e,b,d[4],20,-405537848);b=gg(b,a,c,e,d[9],5,568446438);e=gg(e,b,a,c,d[14],9,-1019803690);c=gg(c,e,b,a,d[3],14,-187363961);a=gg(a,c,e,b,d[8],20,1163531501);b=gg(b,a,c,e,d[13],5,-1444681467);e=gg(e,b,a,c,d[2],9,-51403784);c=gg(c,e,b,a,d[7],14,1735328473);a=gg(a,c,e,b,d[12],20,-1926607734);b=hh(b,a,c,e,d[5],4,-378558);e=hh(e,b,a,c,d[8],11,-2022574463);c=hh(c,e,b,a,d[11],16,1839030562);a=hh(a,c,e,b,d[14],23,-35309556);b=hh(b,a,c,e,d[1],4,-1530992060);e=hh(e,b,a,c,d[4],11,1272893353);c=hh(c,e,b,a,d[7],16,-155497632);a=hh(a,c,e,b,d[10],23,-1094730640);b=hh(b,a,c,e,d[13],4,681279174);e=hh(e,b,a,c,d[0],11,-358537222);c=hh(c,e,b,a,d[3],16,-722521979);a=hh(a,c,e,b,d[6],23,76029189);b=hh(b,a,c,e,d[9],4,-640364487);e=hh(e,b,a,c,d[12],11,-421815835);c=hh(c,e,b,a,d[15],16,530742520);a=hh(a,c,e,b,d[2],23,-995338651);b=ii(b,a,c,e,d[0],6,-198630844);e=ii(e,b,a,c,d[7],10,1126891415);c=ii(c,e,b,a,d[14],15,-1416354905);a=ii(a,c,e,b,d[5],21,-57434055);b=ii(b,a,c,e,d[12],6,1700485571);e=ii(e,b,a,c,d[3],10,-1894986606);c=ii(c,e,b,a,d[10],15,-1051523);a=ii(a,c,e,b,d[1],21,-2054922799);b=ii(b,a,c,e,d[8],6,1873313359);e=ii(e,b,a,c,d[15],10,-30611744);c=ii(c,e,b,a,d[6],15,-1560198380);a=ii(a,c,e,b,d[13],21,1309151649);b=ii(b,a,c,e,d[4],6,-145523070);e=ii(e,b,a,c,d[11],10,-1120210379);c=ii(c,e,b,a,d[2],15,718787259);a=ii(a,c,e,b,d[9],21,-343485551);f[0]=add32(b,f[0]);f[1]=add32(a,f[1]);f[2]=add32(c,f[2]);f[3]=add32(e,f[3])}function cmn(f,d,b,a,c,e){d=add32(add32(d,f),add32(a,e));return add32(d<<c|d>>>32-c,b)}function ff(f,d,b,a,c,e,g){return cmn(d&b|~d&a,f,d,c,e,g)}function gg(f,d,b,a,c,e,g){return cmn(d&a|b&~a,f,d,c,e,g)}function hh(f,d,b,a,c,e,g){return cmn(d^b^a,f,d,c,e,g)}function ii(f,d,b,a,c,e,g){return cmn(b^(d|~a),f,d,c,e,g)}function md51(f){txt="";var d=f.length,b=[1732584193,-271733879,-1732584194,271733878],a;for(a=64;a<=f.length;a+=64)md5cycle(b,md5blk(f.substring(a-64,a)));f=f.substring(a-64);var c=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(a=0;a<f.length;a++)c[a>>2]|=f.charCodeAt(a)<<(a%4<<3);c[a>>2]|=128<<(a%4<<3);if(55<a)for(md5cycle(b,c),a=0;16>a;a++)c[a]=0;c[14]=8*d;md5cycle(b,c);return b}function md5blk(f){var d=[],b;for(b=0;64>b;b+=4)d[b>>2]=f.charCodeAt(b)+(f.charCodeAt(b+1)<<8)+(f.charCodeAt(b+2)<<16)+(f.charCodeAt(b+3)<<24);return d}var hex_chr="0123456789abcdef".split("");function rhex(f){for(var d="",b=0;4>b;b++)d+=hex_chr[f>>8*b+4&15]+hex_chr[f>>8*b&15];return d}function hex(f){for(var d=0;d<f.length;d++)f[d]=rhex(f[d]);return f.join("")}function md5(f){return hex(md51(f))}function add32(f,d){return f+d&4294967295}if("5d41402abc4b2a76b9719d911017c592"!=md5("hello"))var add32$0=function(f,d){var b=(f&65535)+(d&65535);return(f>>16)+(d>>16)+(b>>16)<<16|b&65535};

	// Retrive current product ID
	var id = __st.rid;
	var shop = Shopify.shop;
	if(typeof window.webyzeProductColors_Callback_Before == 'function')
		window.webyzeProductColors_Callback_Before();

	$('head').append("<style type=\"text\/css\">#webyze-product-colors-_ID_::before {\n\tcontent:'Colors';\n\tfont-weight: bold;\n\tdisplay:block;\n}\n#webyze-product-colors-_ID_ {\n\tdisplay:block;\n\tpadding:5px 3px;\n    flex-grow: 1;\n\twidth: auto;\n\tmin-width: 70%;\n}\n#webyze-product-colors-_ID_ *\n{\n\t-webkit-box-sizing:content-box !important;\n\t-moz-box-sizing:content-box !important;\n\tbox-sizing:content-box !important;\n}\n#webyze-product-colors-_ID_ .swatchProductColor, #webyze-product-colors-_ID_ .swatchProductColor>div\n{\n\tmargin:0px;\n\tpadding:0px;\n\tbox-shadow:none;\n\tborder-radius:0px;\n\tborder:0px;\n\twidth: 26px;\n    height: 26px;\n    overflow: hidden;\n    display: inline-block;\n    background-position: center center;\n    vertical-align: middle;\n}\n#webyze-product-colors-_ID_ .swatchProductColor\n{\n\tcursor:pointer;\n\tmargin:3px 5px;\n\tborder: 2px solid #ffffff;\n\n\tborder-radius:4px;\n\tpadding:3px;\n\toverflow:visible;\n\twidth:auto;\n}\n#webyze-product-colors-_ID_ .swatchProductColor>div\n{\n\tborder-radius:0px;\n}\n#webyze-product-colors-_ID_ .swatchProductColor.currentSwatch\n{\n\tborder:2px solid rgba(0, 0, 0, 0.3);\n}\n#webyze-product-colors-_ID_ .swatchProductColor>.webyzeTooltip\n{\n\tdisplay:inline-block !important;\n\tposition:static;\n\twidth:100px;\n\tmargin:2px 0px 2px 4px;\n\ttext-align:left;\n\tfont-size:0.8em;\n\ttext-overflow: ellipsis;\n\twhite-space:nowrap;\n}\n#webyze-product-colors-_ID_ .swatchProductColor:hover>.webyzeTooltip\n{\n\tmargin:2px 0px 2px 4px;\n\tdisplay:inline-block;\n}\n#webyze-product-colors-_ID_ .swatchProductColor>.webyzeTooltip>.innerText\n{\n\tdisplay:inline-block;\n\tbackground:transparent;\n\tborder-radius:0px;\n\tpadding:0px;\n\tcolor:inherit;\n\ttext-align:left;\n\ttext-overflow: ellipsis;\n\toverflow:hidden;\n\tvertical-align:middle;\n\twidth:100px;\n}\n#webyze-product-colors-_ID_ .swatchProductColor.swatchType_image>div {\n    background-size:100% 100%;\n}\n#webyze-product-colors-_ID_ .swatchProductColor.swatchType_two_colors>div {\n\ttransform: rotate(0deg);\n}\n#webyze-product-colors-_ID_ .swatchProductColor.swatchType_two_colors>div>div:first-child {\n    transform-origin: 100% 50%;\n}\n#webyze-product-colors-_ID_ .swatchProductColor.swatchType_two_colors>div>div:last-child {\n    transform-origin: 0% 50%;\n}\n#webyze-product-colors-_ID_ .swatchProductColor.swatchType_two_colors>div>div {\n    width: 13px;\n    transform: rotate(90deg);\n\theight: 26px;\n    display: inline-block;\n}\n\n\n\n#webyze-product-colors-_ID_.webyze-large-swatches .swatchProductColor.swatchType_two_colors>div>div {\n    width: 28px;\n\theight: 56px;\n}\n#webyze-product-colors-_ID_.webyze-large-swatches .swatchProductColor\n{\n\twidth: 56px;\n    height: auto;\n}\n#webyze-product-colors-_ID_.webyze-large-swatches .swatchProductColor>div\n{\n\twidth: 56px;\n    height: 56px;\n}\n#webyze-product-colors-_ID_.webyze-large-swatches .swatchProductColor>.webyzeTooltip\n{\n\ttext-align:center;\n\twidth:56px;\n\tmargin-left:0px;\n}\n#webyze-product-colors-_ID_.webyze-large-swatches .swatchProductColor>.webyzeTooltip>.innerText\n{\n\ttext-align:center;\n\twidth:56px;\n}\n#webyze-product-colors-_ID_ {display:none;}<\/style>".replace(/_ID_/g, id));

  	var addExtraCss = function() {
		
		var extraCSS = '';
		switch(Shopify.theme.theme_store_id) {
			case 380:
			case 568:
				extraCSS = 'form #webyze-product-colors-_ID_::before {font-weight: normal;}';
			break;
			case 782:
				extraCSS = 'form #webyze-product-colors-_ID_::before {font-weight: 500;font-size: 1.14286em;opacity:0.55;}';
			break;
			case 796:
				extraCSS = 'form #webyze-product-colors-_ID_::before {font-weight: 500;}';
			break;
			case 775:
				extraCSS = 'form #webyze-product-colors-_ID_::before {font-size: 0.75em;font-weight: 700;opacity:0.95;text-transform: uppercase;margin-bottom:8px;} form #webyze-product-colors-_ID_ {margin-bottom: 13px;}';
			break;
			case 578:
				extraCSS = 'form #webyze-product-colors-_ID_::before {font-weight:normal;font-size: 12px;margin-bottom: 3px;}';
			break;
			case 730:
				extraCSS = 'form #webyze-product-colors-_ID_::before {font-weight: normal;} form #webyze-product-colors-_ID_ {margin:10px auto;}';
			break;
			case 719:
				extraCSS = 'form #webyze-product-colors-_ID_::before {font-size: 0.8em;}';
			break;
			case 679:
				extraCSS = 'form #webyze-product-colors-_ID_::before {font-weight:normal;font-size: 14px;}';
			break;
			case 735:
				extraCSS = 'form #webyze-product-colors-_ID_::before {font-size: 0.625em;opacity: 0.7;text-transform: uppercase;font-weight: 600;margin-bottom: 4px;}';
			break;
			case 687:
				extraCSS = 'form #webyze-product-colors-_ID_ {margin-left:15px;}';
			break;
			case 623:
				extraCSS = 'form #webyze-product-colors-_ID_::before {color:#000000;} form #webyze-product-colors-_ID_ {margin:10px auto;}';
			break;
			case 304:
				extraCSS = 'form #webyze-product-colors-_ID_::before {font-size: 14px;}';
			break;
			case 808:
				extraCSS = 'form #webyze-product-colors-_ID_::before {font-size: 17px;font-weight:normal;font-family:"Playfair Display",sans-serif;}';
			break;
			case 739:
				extraCSS = 'form #webyze-product-colors-_ID_::before {font-size: 0.8em;font-family: "Montserrat","Helvetica Neue",Arial,sans-serif;text-transform: uppercase;} form #webyze-product-colors-_ID_ {text-align:center;width:100%;margin:10px auto;}';
			break;
			case 688:
				extraCSS = 'form #webyze-product-colors-_ID_::before {font-size: 13px;text-transform: uppercase;}';
			break;
			case 686:
				extraCSS = 'form #webyze-product-colors-_ID_::before {font-weight: normal;text-transform: uppercase;}';
			break;
		}

		extraCSS += "#webyze-product-colors-_ID_::before {content:\"Colors\" !important;}";
		$('head').append(('<style type="text/css">'+extraCSS+'</style>').replace(/_ID_/g, id));
	}
 
	var qs = 'prodId='+id+'&shop='+shop;

	var swatchesFetchedCB = function(result) {
		if (typeof result == 'object' && result !==null) {
			if($('#webyze-product-colors-'+id).length==0) {
				if($('form').length>0) {
					if(window.webyzeProductColors_FormSelector) {
						$(window.webyzeProductColors_FormSelector).first().before('<div id="webyze-product-colors-'+id+'"></div>');
					} else {
						var formSelectors = ['form select[name="id"]:visible', 'form .form__row:visible', 'form .product-options:visible', 'form .select:visible', 'form .selection-wrapper.variant:visible', 'form .selection-wrapper.cart:visible', 'form .selector-wrapper:visible', 'form .radio-wrapper:visible', 'form .swatch_options:visible', 'form .variations:visible', 'form[action="/cart/add"]>*:visible', 'form[action="/cart/add"]>*', 'form[action^="/cart/add"]>*:visible'];
						$.each(formSelectors, function(i, v){
							if($(v).length>0) {
								$(v).first().before('<div id="webyze-product-colors-'+id+'"></div>');
								return false;
							}
						});
						//$('form select[name="id"], form .product-options, form .select, form .selector-wrapper, form .radio-wrapper, form[action="/cart/add"]>*:first-child').first().before('<div id="webyze-product-colors-'+id+'"></div>');
					}

				}

			}

			var ele = $('#webyze-product-colors-'+id);
			if(ele.length==0) {
				setTimeout(function() {
					swatchesFetchedCB(result);
				}, 300);
				return;
			}

			var htmlAppend = '';
			$(result).each(function(i, v) {
				htmlAppend += '<span class="swatchProductColor swatchType_'+ v.type +' '+ ((id==v.id)?'currentSwatch':'') +'" data-name="'+escapeHtml(v.name)+'" data-handle="'+escapeHtml(v.handle)+'">';
				switch(v.type) {
					case 'two_colors':
						v.data = v.data.split('|');
						htmlAppend += '<div><div style="background:'+v.data[0]+';"></div><div style="background:'+v.data[1]+';"></div></div>';
					break;
					case 'image':
						htmlAppend += '<div style="background-image: url(\'https://cdn.shopify.com/s/files/1/0258/2485/4100/files/'+ v.data +'\');"></div>';
					break;
					default:
						htmlAppend += '<div style="background:'+v.data+';"></div>';
				}
				htmlAppend += '<span class="webyzeTooltip"><span></span><span class="innerText">'+escapeHtml(v.name)+'</span><span></span></span></span>';
			});

			ele.append(htmlAppend).show();
			ele.find('.swatchProductColor').on('click', function(e) {
				if(!$(this).hasClass('currentSwatch'))
					window.location.href = '/products/'+$(this).data('handle');
				e.preventDefault();
			});

			if(typeof window.webyzeProductColors_Callback_After == 'function')
				window.webyzeProductColors_Callback_After(ele, result);
			addExtraCss();
		} else {
			$('form div[id^="webyze-product-colors-"]').attr('style', 'display:none !important;'+($('form div[id^="webyze-product-colors-"]').attr('style') || ''));
		}
	};
	
	// $.ajax({
	// 	method		: 'GET',
	// 	url			: 'https://s-pc.webyze.com/ProductColors/productGroup-'+md5(qs)+'?'+qs,
	// 	dataType	: 'json'
	// }).done(swatchesFetchedCB).fail(function() {
	// 		$('form div[id^="webyze-product-colors-"]').attr('style', 'display:none !important;'+($('form div[id^="webyze-product-colors-"]').attr('style') || ''));
	// });


	// BEGIN NEW CODE A1

	var getProductGroup = function(productID) {

		var prodGroupJSON = [];
		switch(productID) {
			case 4728720064596:
			case 4728712364116:
                prodGroupJSON = [{"id":4728720064596,"title":"Kapow (Anthracite)","handle":"kapow-anthracite-grey-mens-shoes","image":"https://cdn.shopify.com/s/files/1/0258/2485/4100/products/flatheads-kapow-anthracite-grey-shoes-diagonal_1800x1800.jpg","sku":"FHMSH022001KAPOGYB06","name":"Anthracite","type":"image","data":"slate-black.png"},{"id":4728712364116,"title":"Kapow Chalk","handle":"kapow-chalk-white-mens-shoes","image":"https://cdn.shopify.com/s/files/1/0258/2485/4100/products/flatheads-kapow-chalk-white-shoes-diagonal_1800x1800.jpg","sku":"FHMSH022001KAPOWOW06","name":"Chalk","type":"image","data":"white-white.png"}];
				break;
			case 4774675906644:
			case 4774676267092:
			case 4774675480660:
			case 4774675087444:
			case 4774676693076:
				prodGroupJSON = [{"id":4774675087444,"title":"Ellipsis Graphite","handle":"ellipsis-graphite-mens-shoes","image":"https://cdn.shopify.com/s/files/1/0258/2485/4100/products/flatheads-ellipsis-graphite-mens-shoes-diagonal_1800x1800.jpg","sku":"FHMSH032002ELLGRA06","name":"Graphite","type":"image","data":"back-black.png"},{"id":4774675906644,"title":"Ellipsis Ash","handle":"ellipsis-ash-mens-shoes","image":"https://cdn.shopify.com/s/files/1/0258/2485/4100/products/flatheads-ellipsis-ash-mens-shoes-diagonal_1800x1800.jpg","sku":"FHMSH032002ELLASH06","name":"Ash","type":"image","data":"grey-dark-grey.png"},{"id":4774676267092,"title":"Ellipsis Burgundy","handle":"ellipsis-burgundy-mens-shoes","image":"https://cdn.shopify.com/s/files/1/0258/2485/4100/products/flatheads-ellipsis-burgundy-mens-shoes-diagonal_1800x1800.jpg","sku":"FHMSH032002ELLBUR06","name":"Burgundy","type":"image","data":"burgundy-white.png"},{"id":4774675480660,"title":"Ellipsis Cobalt","handle":"ellipsis-cobalt-mens-shoes","image":"https://cdn.shopify.com/s/files/1/0258/2485/4100/products/flatheads-ellipsis-cobalt-mens-shoes-diagonal_1800x1800.jpg","sku":"FHMSH032002ELLCOB06","name":"Cobalt","type":"image","data":"blue-white.png"},{"id":4774676693076,"title":"Ellipsis Olive","handle":"ellipsis-seaweed-mens-shoes","image":"https://cdn.shopify.com/s/files/1/0258/2485/4100/products/flatheads-ellipsis-seaweed-mens-shoes-diagonal_1800x1800.jpg","sku":"FHMSH032002ELLSWD06","name":"Olive","type":"image","data":"dark-olive-black.png"}];
				break;
			case 6049951023278:
			case 6049969242286:
			case 6049970782382:
			case 6049971241134:
			case 6049972027566:
				prodGroupJSON = [{"id":6049951023278,"title":"Aurea Marine","handle":"aurea-marine-blue-bamboo-mens-shoes","image":"https://cdn.shopify.com/s/files/1/0258/2485/4100/products/flatheads-aurea-marine-blue-bamboo-mens-shoes-diagonal_1800x1800.jpg","sku":"FHMSH032002AURMRN06","name":"Marine","type":"image","data":"blue-white.png"},{"id":6049969242286,"title":"Aurea Pepper","handle":"aurea-pepper-black-bamboo-mens-shoes","image":"https://cdn.shopify.com/s/files/1/0258/2485/4100/products/flatheads-aurea-pepper-black-bamboo-mens-shoes-diagonal_1800x1800.jpg","sku":"FHMSH032002AURPEP06","name":"Pepper","type":"image","data":"back-black.png"},{"id":6049970782382,"title":"Aurea Slate","handle":"aurea-slate-grey-bamboo-mens-shoes","image":"https://cdn.shopify.com/s/files/1/0258/2485/4100/products/flatheads-aurea-slate-grey-bamboo-mens-shoes-diagonal_1800x1800.jpg","sku":"FHMSH032002AURSLT06","name":"Slate","type":"image","data":"dark-slate-black.png"},{"id":6049971241134,"title":"Aurea Tofu","handle":"aurea-tofu-cream-bamboo-mens-shoes","image":"https://cdn.shopify.com/s/files/1/0258/2485/4100/products/flatheads-aurea-tofu-cream-bamboo-mens-shoes-diagonal_1800x1800.jpg","sku":"FHMSH032002AURTOF06","name":"Tofu","type":"image","data":"cream-brown.png"},{"id":6049972027566,"title":"Aurea Treebark","handle":"aurea-treebark-brown-bamboo-mens-shoes","image":"https://cdn.shopify.com/s/files/1/0258/2485/4100/products/flatheads-aurea-treebark-brown-bamboo-mens-shoes-diagonal_1800x1800.jpg","sku":"FHMSH032002AURTRB06","name":"Treebark","type":"image","data":"brown-white.png"}];
				break;
			case 4347482767444:
			case 4347521138772:
			case 4347637694548:
			case 4347669610580:
			case 4347697856596:
			case 4347723481172:
				prodGroupJSON = [{"id":4347482767444,"title":"Ooof (Beige)","handle":"ooof-beige-mens-shoes","image":"https://cdn.shopify.com/s/files/1/0258/2485/4100/products/flatheads-mens-shoes-ooof-beige-1.jpg?v=1576153268","sku":"FHMSH011901OOOFBEI06","name":"Beige","type":"image","data":"beige-white.png?v=1580325885"},{"id":4347637694548,"title":"Ooof (Denim)","handle":"ooof-denim-mens-shoes","image":"https://cdn.shopify.com/s/files/1/0258/2485/4100/products/flatheads-mens-shoes-ooof-denim-2.jpg?v=1576167392","sku":"FHMSH011901OOOFDEN06","name":"Denim","type":"image","data":"denim_white.png?v=1580325885"},{"id":4347669610580,"title":"Ooof (Grey)","handle":"ooof-grey-mens-shoes","image":"https://cdn.shopify.com/s/files/1/0258/2485/4100/products/Studio_Session-448-edited-cropped.png?v=1576159734","sku":"FHMSH011901OOOFGRY06","name":"Grey","type":"image","data":"grey-white.png?v=1580325885"},{"id":4347697856596,"title":"Ooof (Maroon)","handle":"ooof-maroon-mens-shoes","image":"https://cdn.shopify.com/s/files/1/0258/2485/4100/products/flatheads-mens-shoes-ooof-maroon-3.jpg?v=1576162530","sku":"FHMSH011901OOOFMAR06","name":"Maroon","type":"image","data":"maroon-white.png?v=1580325885"},{"id":4347723481172,"title":"Ooof (Navy)","handle":"ooof-navy-mens-shoes","image":"https://cdn.shopify.com/s/files/1/0258/2485/4100/products/flatheads-mens-shoes-ooof-navy-1.jpg?v=1576166954","sku":"FHMSH011901OOOFNAV06","name":"Navy","type":"image","data":"navy-white.png?v=1580325885"}];
				break;
			case 4347066581076:
			case 4347130806356:
			case 4347172126804:
			case 4347210170452:
			case 4347259682900:
			case 4347286585428:
				prodGroupJSON = [{"id":4347066581076,"title":"Kapow (Grey Twist)","handle":"kapow-grey-twist-mens-shoes","image":"https://cdn.shopify.com/s/files/1/0258/2485/4100/products/flatheads-mens-shoes-kapow-grey-twist-1.jpg?v=1576590358","sku":"FHMSH021901KAPOGYY06","name":"Grey Twist","type":"image","data":"grey-white-banana.png?v=1580325885"},{"id":4347130806356,"title":"Kapow (Blackout)","handle":"kapow-blackout-mens-shoes","image":"https://cdn.shopify.com/s/files/1/0258/2485/4100/products/flatheads-mens-shoes-kapow-blackout-2.jpg?v=1576585007","sku":"FHMSH021901KAPOBLB06","name":"Blackout","type":"image","data":"back-black.png?v=1580325885"},{"id":4347172126804,"title":"Kapow (Black Origin)","handle":"kapow-black-origin-mens-shoes","image":"https://cdn.shopify.com/s/files/1/0258/2485/4100/products/flatheads-mens-shoes-kapow-black-origin-3.jpg?v=1576583166","sku":"FHMSH021901KAPOBLW06","name":"Black Origin","type":"image","data":"black-white.png?v=1580325885"},{"id":4347210170452,"title":"Kapow (Olive Twist)","handle":"kapow-olive-twist-mens-shoes","image":"https://cdn.shopify.com/s/files/1/0258/2485/4100/products/flatheads-mens-shoes-kapow-olive-twist-1.jpg?v=1576594825","sku":"FHMSH021901KAPOOLB06","name":"Olive Twist","type":"image","data":"olive-black.png?v=1580325887"},{"id":4347259682900,"title":"Kapow (Olive Origin)","handle":"kapow-olive-origin-mens-shoes","image":"https://cdn.shopify.com/s/files/1/0258/2485/4100/products/flatheads-mens-shoes-kapow-olive-origin-2.jpg?v=1576593887","sku":"FHMSH021901KAPOOLW06","name":"Olive Origin","type":"image","data":"olive-white.png?v=1580325885"},{"id":4347286585428,"title":"Kapow (Grey Origin)","handle":"kapow-grey-origin-mens-shoes","image":"https://cdn.shopify.com/s/files/1/0258/2485/4100/products/flatheads-mens-shoes-kapow-grey-origin-2.jpg?v=1576587591","sku":"FHMSH021901KAPOGYW06","name":"Grey Origin","type":"image","data":"grey-white.png?v=1580325885"}];
				break;
			case 4347388395604:
			case 4347438530644:
				prodGroupJSON = [{"id":4347388395604,"title":"Vronk (Black)","handle":"vronk-black-mens-shoes","image":"https://cdn.shopify.com/s/files/1/0258/2485/4100/products/flatheads-mens-shoes-vronk-black-1_d202e906-adaa-4e94-8381-894e238eada6.jpg?v=1576037177","sku":"FHMSH011901VRONBLA06","name":"Black","type":"image","data":"black-white.png?v=1580325885"},{"id":4347438530644,"title":"Vronk (Grey)","handle":"vronk-grey-mens-shoes","image":"https://cdn.shopify.com/s/files/1/0258/2485/4100/products/flatheads-mens-shoes-vronk-grey-1.jpg?v=1576051114","sku":"FHMSH011901VRONGRY06","name":"Grey","type":"image","data":"grey-white.png?v=1580325885"}];
				break;
		}

		if(prodGroupJSON.length == 0)
			return null;
		else
			return prodGroupJSON;
	};

	swatchesFetchedCB(getProductGroup(id));

	// END NEW CODE A1


/* END OF APP JS */
};
  
  
    // END code for product colors on PDP

/* If jQuery has not yet been loaded or if it has but it's too old for our needs,
we will load jQuery from the Google CDN, and when it's fully loaded, we will run
our app's JavaScript. Set your own limits here, the sample's code below uses 1.7
as the minimum version we are ready to use, and if the jQuery is older, we load 1.9. */
if ((typeof jQuery === 'undefined') || (parseFloat(jQuery.fn.jquery) < 1.7)) {
  loadScript('//ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js', function(){
    jQuery191 = jQuery.noConflict(true);
    fhcScript(jQuery191);
    ProductColorsAppJS(jQuery191);
  });
} else {
  fhcScript(jQuery);
  ProductColorsAppJS(jQuery);
}

})();