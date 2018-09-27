/*
 * Copy right VnS Nevermore
 * URI: http://vnsharing.net/forum/member.php?u=269917
 *
 * dice.js
 * 8/21/2010
 */

var cs = document.getElementsByTagName('div');
for (var i = 0; i < cs.length; i++) {
	if (cs[i].className == "dice") {
		var par = cs[i].parentNode;
		var rel = /post_message_([0-9]*)/
		while (!par.id.match(rel) && par != undefined) {
			par = par.parentNode;
		}
		if (par != undefined) {
			var id = par.id.replace(rel,"$1");
			cs[i].innerHTML = '<object width="100" height="100"><param name="FlashVars" value="diceURL=dice.php&amp;diceID=' + id + '" /><param name="movie" value="dice.swf"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="dice.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="100" height="100" FlashVars="diceURL=dice.php&amp;diceID=' + id + '"></embed></object>';
		}
	}
}
