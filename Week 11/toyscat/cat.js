class cat{
	constructor(name="cat"){
		this.name=name;
		this.tail =new tail();
		this.toy =null;
	}
}
pickup(aToy){
	this.toy=aToy;
}
drop(){
	this.toy=null;
}