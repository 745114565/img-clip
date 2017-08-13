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
