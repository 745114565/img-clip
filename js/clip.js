window.onload = function(){
	
	//禁止图片被选中
	document.onselectstart = new Function('event.returnValue=false;');
	var mainDiv = document.getElementById('main');	
	var rightDiv = document.getElementById('right');
	var upDiv = document.getElementById('up');
	var leftDiv = document.getElementById('left');
	var downDiv = document.getElementById('down');
	var leftUpDiv = document.getElementById('left-up');
	var rightUpDiv = document.getElementById('right-up');
	var leftDownDiv = document.getElementById('left-down');
	var rightDownDiv = document.getElementById('right-down');
	
	
	var isKeyDown = false;
	var contact = '';
	rightDiv.onmousedown = function(){
		isKeyDown = true;
		contact = 'right';
	},
	upDiv.onmousedown = function(){
		isKeyDown = true;
		contact = 'up';
	},
	leftDiv.onmousedown = function(){
		isKeyDown = true;
		contact = 'left';
	},
	downDiv.onmousedown = function(){
		isKeyDown = true;
		contact = 'down';
	},
	leftUpDiv.onmousedown = function(){
		isKeyDown = true;
		contact = 'left-up';
	},
	rightUpDiv.onmousedown = function(){
		isKeyDown = true;
		contact = 'right-up';
	},
	leftDownDiv.onmousedown = function(){
		isKeyDown = true;
		contact = 'left-down';
	},
	rightDownDiv.onmousedown = function(){
		isKeyDown = true;
		contact = 'right-down';
	},
	
	
	window.onmouseup = function(){
		isKeyDown = false;
	},
	window.onmousemove = function(e){
		if(isKeyDown){
			
			if(contact === 'right'){
				rightMove(e)
			}else if(contact === 'up'){
				upMove(e)
			}else if(contact === 'left'){
				leftMove(e)
			}else if(contact === 'down'){
				downMove(e)	
			}else if(contact === 'left-up'){
				leftMove(e);
				upMove(e);
			}else if(contact === 'right-up'){
				rightMove(e);
				upMove(e);
			}else if(contact === 'left-down'){
				leftMove(e);
				downMove(e);
			}else if(contact === 'right-down'){
				rightMove(e);
				downMove(e);
			}
		}
		setChoice();
	}	

function rightMove(e){
		//移动后鼠标的横坐标
		var x = e.clientX;
		//选取框变化前的宽度
		var widthbefore = mainDiv.offsetWidth - 2;
		//移动后选取框增加的宽度
		var addWidth = '';
		addWidth = x - getPosition(mainDiv).left - widthbefore;
		//选取框变化后的宽度设置
		mainDiv.style.width = addWidth + widthbefore + 'px';
}
	function upMove(e){
		//鼠标的纵坐标
		var y = e.clientY;
		//选取框相对于屏幕上边的距离
		var mainY = getPosition(mainDiv).top;
		//增加的高度
		var addHeight = mainY - y ;
		//原来的高度
		var heightBefore = mainDiv.offsetHeight -2 ;
		
		//变化后的高度
		mainDiv.style.height = heightBefore + addHeight + 'px';
		mainDiv.style.top = mainDiv.offsetTop - addHeight + 'px';
	}
	function leftMove(e){
		//鼠标的横坐标
		var x = e.clientX;
		//选取框位于屏幕左边的距离
		var mainX = getPosition(mainDiv).left;
		//增加的宽度
		var addWidth = mainX - x ;
		//变化钱的宽度
		var mainXBefore = mainDiv.offsetWidth - 2;
		//变化后的宽度
		mainDiv.style.width = mainXBefore + addWidth + 'px';
		mainDiv.style.left = mainDiv.offsetLeft - addWidth + 'px';
		
	}
	function downMove(e){
		//移动后鼠标的纵坐标
		var y = e.clientY;
		//原来的高度
		var heightBefore = mainDiv.offsetHeight - 2;
		var mainY = getPosition(mainDiv).top;
		
		//增加的高度
		var addHeight = y - heightBefore - mainY;
		
		mainDiv.style.height = addHeight + heightBefore + 'px';
		mainDiv.style
		
	}


// 获取元素距离屏幕左边/上边的距离
function getPosition(node){
	var left = node.offsetLeft;
	var top = node.offsetTop;
	var parent = node.offsetParent;
	while(parent){
		left += parent.offsetLeft;
		top += parent.offsetTop;
		
		parent = parent.offsetParent;
	}
	return {"left":left,"top":top};
}

//设置选取区域高亮可见
function setChoice(){
	var top = mainDiv.offsetTop;
	var right = mainDiv.offsetLeft + mainDiv.offsetWidth;
	var bottom = mainDiv.offsetTop + mainDiv.offsetHeight;
	var left = mainDiv.offsetLeft;
	var img2 = document.getElementById('img2');
	img2.style.clip = 'rect('+top+'px,'+right+'px,'+bottom+'px,'+left+'px)'
}
}


