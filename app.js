function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];//Õë¶Ô IEä¯ÀÀÆ÷
	}else{
		return getComputedStyle(obj,false)[attr];//Õë¶Ôfirefoxä¯ÀÀÆ÷
	}
}