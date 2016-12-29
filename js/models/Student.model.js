function Student(){
	this.id=0;
	this.firstName="";
	this.lastName="";
	this.email="";
	this.status="";

	this.toString=function(){
		return this.id + ","+ this.firstName + ","
		+ this.lastName + ","+ this.email + ","+ this.status;
	}
}