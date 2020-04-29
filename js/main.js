function scraping (){

	this.start= function(){
		setTimeout(
			function(){
				this.scrap();
			},
			100000
		);

	}

	this.scrap= function(){

		setTimeout(

			function(){
				this.scrap();
			}
		),
		10000

	}

	



}

function render () {

	this.element=null;
	this.elementWidth=0;
	this.elementHeight=0;

	this.configEnvarioment = function(id,width,height){//that function select cavas element to print tha graphics
		try{

			this.element=document.getElementById(id);
			if((!isNaN(width))&&(!isNaN(height))){

				this.elementWidth=width;
				this.elementHeight= height;

			}

		}
		catch(error){
			//exeption management
		}

	}

	this.search= function(level,start){//Search the data storage in the database...level refer to the scale of time ... exaple daily, week, month . and start is the time begin the result. that parameter must be a datatime parameter

		switch(level){
			case  1: //search the dolar prize average for each hour in a determinate day
			break;
			case 2 : //search the dolar prize average for each day in a  determinate week
			break;
			case 3:  //seach the dolar prize average for each month in a determinate year
			break;

		}

	}


}

function httpComunication (){

	this.patition= function(url,headers,data,formateResponse,callbak,callbakError){
		var object={
			'method':method
			'body':data
		}



		fetch(
			url,
			object
		)
		.then(
			function(data){
				switch (formateResponse){
					case 'text':

						return data.text();


					break;
					case 'json':

						return data.json();


					break;

				}
			}
		)
		.then(
			function(data){
				callback(data);
			}
		)
		.catch(
			function(error){
				callbakError(error);

			}

		);

	}

	this.makeQueryString = function(string,keys){

		for(let key in keys){
			string = string.replace('{'+key+'}',keys[]);
		}

	}

}