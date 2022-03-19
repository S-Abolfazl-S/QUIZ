// hide page content in coming to website
document.querySelectorAll("body>:not(form,script)").forEach(e=>{
    e.style.display='none';
});

// ~~~~~~~~~~~~~~~~~~ user's list ~~~~~~~~~~~~~~~~~~~~~ // 
const users = {
	"hossein":{
		"email":"hossein@gmail.com",
		"password":"hossein999",
		"user_code":101
	},
	"reza":{
		"email":"reza@ymail.com",
		"password":"reza888",
		"user_code":102
	},
	"sara":{
		"email":"sara@gmail.com",
		"password":"sara777",
		"user_code":103
	},
} 
// ~~~~~~~~~~~~~~~~~~ /user's list ~~~~~~~~~~~~~~~~~~~~~ // 

// ~~~~~~~~~~~~~~~~~~ question's ~~~~~~~~~~~~~~~~~~~~~ //
const questions = {
	q1: [
		"سخت افزار به چه بخشی از کامپیوتر گفته می شود؟", //question
		4, //answer
		"قسمت های فلزی کامپیوتر", //option1
		"برد های الکترونیک و درایوها", //option2
		"وسایل فیزیکی کامپیوتر", //option3
		"هر سه مورد",
	], //option4
	q2: [
		"خصوصیات بارز نسل سوم کامپیوترها چه بود ؟",
		3,
		"استفاده از ترانزیستورها",
		"استفاده از لامپ خلأ",
		"استفاده از مدارهای تجمع",
		"هیچکدام",
	],
	q3: [
		"وسایل ضبط اطلاعات بـا دسترسـی مسـتقیم و مـدارهای مجتمع از ویژگیهـای کـدامیک از هـای نسـل کامپیوتری است؟",
		3,
		"نسل اول",
		"نسل دوم",
		"نسل سوم",
		"هیچکدام",
	],
	q4: [
		"کامپیوتراولین الکترونیکی چه نام داشت ؟",
		2,
		"EDVAC",
		"ENIAC",
		"MARKI",
		"UNIVAC",
	],
	q5: [
		"واحد سرعت در کامپیوتر های شخصی عبارت است از ... ",
		3,
		"CPS",
		"LPM",
		"MIPS",
		"MIPC",
	],
	q6: [
		"وقتی برنامه ای وارد کامپیوتر می شود، این برنامه در کدام قسمت از حافظه قرار می گیرد؟",
		1,
		"RAM",
		"ROM",
		"EPROM",
		"هیچکدام",
	],
	q7: [
		"در کامپیوتر های 16 بیتی هر بایت برابر چند بیت است ؟",
		2,
		"16 bit",
		"8 bit",
		"32 bit",
		"4 bit",
	],
	q8: [
		"عملکرد داخلی کامپیوتر (از نظر محاسباتی و برنامه نویس ...)",
		2,
		"در مبنای 10 می باشد",
		"در مبنای 2 می باشد",
		"در مبنای 16 می باشد",
		"در مبنای 8 می باشد",
	],
	q9: [
		"فرق RAM و ROM در چیست؟",
		4,
		"هیچ تفاوتی با هم ندارند .",
		"ROM از نوع نیمه هادی و RAM از نوع مغناطیسی است .",
		"ROM فقط خواندنی است اما RAM فقط نوشتنی است .",
		"ROM فقط خواندنی است اما RAM خواندنی و نوشتنی است .",
	],
	q10: [
		"کار واحد ALU عبارتست از ...",
		4,
		"ذخیره کردن اطلاعات و انجام عملیات کنترلی لازم.",
		"انجام عملیات ریاضی",
		"انجام هر گونه اعمال منطقی",
		"موارد ب و ج",
	],
};
// ~~~~~~~~~~~~~~~~~~ /question's ~~~~~~~~~~~~~~~~~~~~~ //

// ~~~~~~~~~~~~~~~~~~ add question's ~~~~~~~~~~~~~~~~~~~~~ // 
for (let counter = 1; counter <= 10; counter++) {
	// create template question
	const nodeMain = document.querySelector("main #quiz-form>div");
	const newNode = document.createElement("div");
	newNode.innerHTML = nodeMain.innerHTML;
	newNode.querySelector("h4").innerHTML = `سوال ${counter}`;
	newNode.querySelector("p").innerHTML = questions[`q${counter}`][0];
	//add Option's
	const opt = newNode.querySelectorAll("div label");
	opt[0].innerHTML = `الف) ${
		questions[`q${counter}`][2]
	} <input type="radio" name="q${counter}" value="1"">`;
	opt[1].innerHTML = `ب) ${
		questions[`q${counter}`][3]
	} <input type="radio" name="q${counter}" value="2"">`;
	opt[2].innerHTML = `ج) ${
		questions[`q${counter}`][4]
	} <input type="radio" name="q${counter}" value="3"">`;
	opt[3].innerHTML = `د) ${
		questions[`q${counter}`][5]
	} <input type="radio" name="q${counter}" value="4"">`;
	document.querySelector("main #quiz-form").appendChild(newNode);
}
// ~~~~~~~~~~~~~~~~~~ /add question's ~~~~~~~~~~~~~~~~~~~~~ // 


// ~~~~~~~~~~~~~~~~~~ timer ~~~~~~~~~~~~~~~~~~~~~ // 
let timer = document.querySelector("header>div.info>.timer");
let tMinute = 9;
let tSecond = 60;
let tStart = () => {
	tSecond--; 
	timer.innerHTML = `${tMinute} : ${tSecond}`;
	if (tSecond <= 0) {
		tSecond = 60;
		tMinute--;
		if (tMinute < 0) {
			clearInterval(tStop);
			btnResult.click();
			window.scrollBy(0, document.body.scrollHeight);
		} 
	}
};
let tStop = setInterval(tStart, 1000);
clearInterval(tStop); // stop timer
// ~~~~~~~~~~~~~~~~~~ /timer ~~~~~~~~~~~~~~~~~~~~~ // 

// ################################## RESULT ################################### //
// ~~~~~~~~~~~~~~~~~~ get result quiz ~~~~~~~~~~~~~~~~~~~~~ // 
let rs = 0; //result
function getResult() { 
	// first div is template then count variable start from 2
	for (let count = 2; count <= 11; count++) {
		// get answer from the question 
		let ans = document.querySelector(
			`#quiz-form > div:nth-child(${count}) > div > label > input[type=radio]:checked`
		);
		// check input isn't null and validate answer's
		if (ans !== null) {
			if (parseInt(ans.value) === questions[`q${count - 1}`][1]) {
				rs += 2;
			}
		}
	}
	return rs;
}
// ~~~~~~~~~~~~~~~~~~ /get result quiz ~~~~~~~~~~~~~~~~~~~~~ // 

// ~~~~~~~~~~~~~~~~~~ result btn ~~~~~~~~~~~~~~~~~~~~~ // 
let btnResult = document.querySelector("main div.res button");
let Result = document.querySelectorAll("main div.res h4");
let quizForm = document.getElementById("quiz-form");

btnResult.onclick = () => {
	clearInterval(tStop); // stop time
	//set value
	Result[0].innerHTML = `نمره = ${getResult()}`;
	
	// fix time result
	let min = ((9-tMinute)<10)?("0"+(9-tMinute)):(9-tMinute);
	if(tMinute<=0)
		min = "00"
	let sec = ((60-tSecond)<10)?("0"+(60-tSecond)):(60-tSecond); 
	if(tSecond<=0)
		sec = "00" 

	Result[1].innerHTML = `${min}:${sec} زمان پاسخ گویی`;
	//show value
	Result[0].style.display = "block";
	Result[1].style.display = "block";
	// disable form
	quizForm.style.pointerEvents = "none";
	btnResult.style.display = "none";
	// result = 0
	rs = 0;
};
// ~~~~~~~~~~~~~~~~~~ /result btn ~~~~~~~~~~~~~~~~~~~~~ // 
// ################################## /RESULT ################################### // 

// ~~~~~~~~~~~~~~~~~~ form ~~~~~~~~~~~~~~~~~~~~~ // 
// register button, click event
document.querySelector("form").children[3].addEventListener("click", (e) => {
	// get information
    const form = document.querySelector("form"); 
    const username = form.children[0].querySelector('input').value;
    const email = form.children[1].querySelector('input').value;
    const password = form.children[2].querySelector('input').value;
    // validate information
	if(users[username] !== undefined && users[username]["password"] === password && users[username]["email"] === email){ 
		// add information : username , gender, 
		document.querySelector("header>div.info>p").innerHTML = `نام: ${username} شماره: ${users[username].user_code}`;
		//hide login form
		document.querySelector("form").style.display = "none";
		tStop = setInterval(tStart, 1000); // start timer
		// show content
		document.querySelectorAll("body>:not(form,script)").forEach(e=>{
			e.style.display='block';
		}); 
	}else{
		alert('لطفاً مقدار صحیح وارد نمایید');
	}
});
// ~~~~~~~~~~~~~~~~~~ /form ~~~~~~~~~~~~~~~~~~~~~ // 

document.querySelector("form").children[0].querySelector('input').focus()