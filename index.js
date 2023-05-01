
		//console.log("Learn Javascript");
		//document.write("this is document write");
		//alert("Hello ,World")
		//Javascript console family
		//console.warn("this is a warning");
		//console.error("This is an error");

	//3.JAvascript variables
	/*
	var number1=6;
	var number2=4;
	console.log(number1+number2);

	//4.DAtatypes in js
	var str1="This is a string";
	var str2='This is also a string';
	var num1=455;
	var num2=56.76;
	//objects
	var marks={
		ravi:34,
		Krishna:100,
		harry:99.97 
	}
	console.log(marks);
	console.log(num1 + str1);

	//Bolleans
	var a=true;
	var b=false;
	console.log(a,b);

	var und=undefined;
	console.log(und);

	//Array
	var arr=[1,2,3,4,5,"string"]
	console.log(arr);
	console.log(arr[2]);
	*/
	//FUNCTIONS
	 function avg(a,b){
	 	return (a+b)/2;
	 }
	 c1=avg(4,6);
	 c2=avg(11,13);
	 console.log(c1,c2);

	 //LOOPS

	 var arr=[0,2,3,4,5,6];
	/* for(var i=0;i<arr.length;i++){
	 	console.log(arr[i]);
	 }*/

	 //while loop

	//var j=0;
	 /*
	 while (j<arr.length){
	 	console.log(arr[j]);
	 	j++;
	 }*/

	// do{
	 	//console.log(arr[j]);
	 	//j++;
	//} while(j<arr.length);
	//Array Properties

    let myArr=["Fan","Camera",34,null,true];
    console.log(myArr.length);
    //myArr.pop();
    //myArr.push("Krishna");
    //myArr.shift();
   // console.log(myArr);

    //Strings Method in JS
    let myLovelyString="Krishna is a good boy";
    //console.log(myLovelyString.length);
//console.log(myLovelyString.indexOf("good"));
//console.log(myLovelyString.slice(1,3));

let myDate=new Date();
//console.log(myDate.getTime());

//DOM Manipulation

let elem=document.getElementById("click");
console.log(elem);

let elemClass=document.getElementsByClassName("container");
//console.log(elemClass);
//elemClass[0].style.background="yellow";
//elemClass[0].classList.add("bg-primary");
//console.log(elem.innerHTML);
//console.log(elem.innerText);

//console.log(elemClass[0].innerHTML);

tn=document.getElementsByTagName("div")
console.log(tn)

createdElemet=document.createElement('p');
createdElemet.innerText="This is a created para";
tn[0].appendChild(createdElemet);
createdElemet2=document.createElement('p');
createdElemet2.innerText="This is a created bold";
tn[0].replaceChild(createdElemet2,createdElemet);

//Selecting Using Query
sel=document.querySelector('.container');
console.log(sel);	
sel=document.querySelectorAll('.container');
console.log(sel); 

//EVENTS IN JAVASCRIPT

//function clicked(){
	//console.log('The button was clicked')
//}
/*window.onload=function(){
	console.log('The document was loaded')
}
firstContainer.addEventListener('click',function(){
	document.querySelectorAll('.container')[0].innerHTML="<b> We have clicked</b>"
	console.log("click hua")
})*/

/*firstContainer.addEventListener('onmouseover',function(){
	console.log("Mouse on container")
})*/

//firstContainer.addEventListener('mouseout',function(){
	//console.log("Mouse out of container")
//})

/*	console.log("Mouse up when clicked on container")
})

firstContainer.addEventListener('mousedown',function(){
	console.log("Mouse down when clicked on container")
})*/

//Set timeout an setintervals
logKaro=()=>{
	document.querySelectorAll('.container')[0].innerHTML="<b> Set Interval Fired</b>"
	console.log("I am your log")
}
//setTimeout(logKaro,3000);
//clr=setInterval(logKaro,3000);

//Javascript local storage

//JSON

obj={name:"Krishna",length:1}
jso=JSON.stringify(obj);
console.log(typeof jso)
console.log(jso)
parsed=JSON.parse('{"name":"Krishna","length":1}')
console.log(parsed);