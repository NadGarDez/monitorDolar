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



		ajax = new this.httpComunication();

		ajax.petition(
			'url.com',
			false,
			'json',
			function(data){
				console.log('all it is fine');
				//there we will call the function 
				this.saveData(data);

			},
			function(error){
				console.log('there is an error');
			}


		);

		setTimeout(




			function(){
				this.scrap();
			}
		),
		10000

	}


	this.saveData=function(data){

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

		ajax = new this.httpComunication();

		switch(level){
			case  1: //search the dolar prize average for each hour in a determinate day
				var stringSearch="option={option}";
				stringSearch = ajax.makeQueryString(stringSearch, {option:1});
				ajax.petition(
					'url.com',
					true,
					'myheader',
					stringSearch,
					'json',
					function(data){
						console.log('all it is fine');
						this.render(data);
						//there we will call the function 

					},
					function(){
						console.log('there is an error');
					}


				);

			break;
			case 2 : //search the dolar prize average for each day in a  determinate week
			
				var stringSearch="option={option}";
				stringSearch = ajax.makeQueryString(stringSearch, {option:2});
				ajax.petition(
					'url.com',
					true,
					'myheader',
					stringSearch,
					'json',
					function(){
						console.log('all it is fine');
						//there we will call the function 

					},
					function(){
						console.log('there is an error');
					}


				);



			break;
			case 3:  //seach the dolar prize average for each month in a determinate year
			
				var stringSearch="option={option}";
				stringSearch = ajax.makeQueryString(stringSearch, {option:3});
				ajax.petition(
					'url.com',
					true,
					'myheader',
					stringSearch,
					'json',
					function(){
						console.log('all it is fine');
						//there we will call the function 

					},
					function(){
						console.log('there is an error');
					}


				);



			break;

		}

	}


	this.render= function(data){

		//this is the render function.. we will use canvas to print in the frontend

	}


}

function httpComunication (){

	this.patition= function(url,option,headers="",data="",formateResponse,callbak,callbakError){
		


		if(option==true){

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
		else{


			fetch(
				url
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

	}

	this.makeQueryString = function(string,keys){

		for(let key in keys){
			string = string.replace('{'+key+'}',keys[]);
		}

		return string;

	}

}


var scraper = new scraping(); 