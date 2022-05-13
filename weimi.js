(function (){
	var qrcode ="https://cdn.jsdelivr.net/gh/davidshimjs/qrcodejs/qrcode.min.js";

	importjs(qrcode);
	addfloatbutton();
	function importjs(url){
		var script = document.createElement("script");
		script.type = "text\/javascript";
		script.src = url;
		document.head.appendChild(script);
	}
	function addfloatbutton(){
		var jump=document.createElement("div");
		var qr  =document.createElement("div");

		

		jump.style.cssText="border:2px solid red;position:fixed;top:70%;left:80%;width:60px;height:60px;background-color:yellow;z-index:999999;text-align:center;line-height:40px;color:red;box-shadow: 3px 3px 5px #888888;";
		qr.style.cssText="border:2px solid red;position:fixed;top:80%;left:80%;width:60px;height:60px;background-color:yellow;z-index:999999;text-align:center;line-height:40px;color:red;box-shadow: 3px 3px 5px #888888;";

		jump.textContent="跳转";
		jump.addEventListener("click",function(e){
			addOpen(); 
			e.stopPropagation();
		});

		qr.textContent = "QR";
		qr.addEventListener("click", function(e){
			showQrcode();
			e.stopPropagation();
		});
		document.body.appendChild(jump);
		document.body.appendChild(qr);
	}

	function showQrcode(){

		/*防止多次添加二维码节点*/
		var qrcodeNode = document.querySelector('#qrcode');
		if (qrcodeNode) {
			qrcodeNode.parentElement.removeChild(qrcodeNode);
		}
		
		var target = document.querySelector('.link');
		var parent = target.parentElement.parentElement;
		var div = document.createElement('div');

		div.setAttribute("id", "qrcode");
		parent.insertBefore(div, target.parentElement);

		var qrcode = new QRCode("qrcode", {
    		text: target.getAttribute('data-info'),
    		width: 200,
    		height: 200,
    		colorDark : "#000000",
    		colorLight : "#ffffff",
    		correctLevel : QRCode.CorrectLevel.H
		});
	}

	function addOpen(){
		var aaaNode = document.querySelector('#aaa');
		if (aaaNode) {
			aaaNode.parentElement.removeChild(aaaNode);
		}
		
		var target = document.querySelector('.link');

		var  s = target;
		var div = document.createElement('div');
		var a = document.createElement('a');

		div.setAttribute("id", "aaa");
		a.textContent = 'open';
		a.setAttribute('href', s.getAttribute('data-info'));

		div.appendChild(a);
		target.parentElement.appendChild(div);

		a.click();
		target.parentElement.removeChild(div);
	}

})();