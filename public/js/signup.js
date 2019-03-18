//sign in
//一般會員登入
//輸入 email, password 後點擊登入按鈕，判斷是否有此人，若有此人跳到 profile 頁，讀出姓名、email

function signup() {
	const url = 'https://api.appworks-school.tw/api/1.0/user/signup';
	const data = {
		"name": document.getElementById('login-name').value,
		"email": document.getElementById('login-account').value,
		"password": document.getElementById('login-password').value
	};

	// Default options are marked with *
	return fetch(url, {
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data), // must match 'Content-Type' header
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
		})
		.then(response => {

			const {
				status
			} = response;

			// const status = response.status;

			if (status) {
				response.json().then(result => {
					console.log('result', result)

					let personalData = {
						usename: result.data.user.name,
						userEmail: result.data.user.email,
						userPicture: result.data.user.picture
					}

					console.log(personalData);
					//存到 localStorage
					//把 result 的資料找到，然後拿出要哪些資料，整理過後塞到 localStorage
					// set on load for testing
					localStorage.setItem('personalData', JSON.stringify(personalData));
					window.location = "profile.html";
				});
			} else {
				throw ('fetch error')
			}


			// 輸出成 json
		})
		.catch(err => console.log('error', err));
}

let signUpButton = document.getElementById('signUpButton');
signUpButton.addEventListener("click", signup);





//getDataresponse(name, email)
//data.user.name
//data.user.email


// //facebook 登入
// //點擊 facebook 登入按鈕，判斷是否有此人，若有此人跳到 profile 頁，讀出姓名、email & 大頭貼
// app.init = function () {
// 	app.cart.init();
// 	app.fb.statusChangeCallback = app.initProfile;
// }; app.initProfile = function () {
// 	if (app.state.auth === null) {
// 		window.location = "./";
// 	}
// 	app.fb.getProfile().then(function (data) {
// 		app.showProfile(data);
// 	}).catch(function (error) {
// 		console.log("Facebook Error", error);
// 	});
// }; app.showProfile = function (data) {
// 	app.get("#profile-picture").src = "https://graph.facebook.com/" + data.id + "/picture/?width=200";
// 	let details = app.get("#profile-details");
// 	app.createElement("div", {
// 		atrs: {
// 			className: "name",
// 			textContent: data.name
// 		}
// 	}, details);
// 	app.createElement("div", {
// 		atrs: {
// 			className: "email",
// 			textContent: data.email
// 		}
// 	}, details);
// }; window.addEventListener("DOMContentLoaded", app.init);

// //create account
// //一般會員註冊
// //輸入 email, password, 姓名後把資料傳給後端
// const url = 'https://api.appworks-school.tw/api/1.0/user/signup';
// const data = {
// 	"name": "",
// 	"email": "",
// 	"password": ""
// };

// const otherPram = {
// 		"content-type": "application/json; charset = UTF-8"
// 	},
// 	body: Data,
// 	method: "POST"

// fetch(Url, otherPram)
// .then(data => {
// 	return data.json()
// })
// .then(res => {
// 	console.log(res)
// })
// .catch(error => console.log(error))

// //可以自己上傳大頭貼照
// <
// form action = "/api/1.0/admin/avatar"
// method = "post"
// enctype = "multipart/form-data" >
// <
// input type = "file"
// name = "avatar" / >
// <
// /form>


// //facebook 註冊
// app.init = function () {
// 	app.cart.init();
// 	app.fb.statusChangeCallback = app.initProfile;
// }; app.initProfile = function () {
// 	if (app.state.auth === null) {
// 		window.location = "./";
// 	}
// 	app.fb.getProfile().then(function (data) {
// 		app.showProfile(data);
// 	}).catch(function (error) {
// 		console.log("Facebook Error", error);
// 	});
// }; app.showProfile = function (data) {
// 	app.get("#profile-picture").src = "https://graph.facebook.com/" + data.id + "/picture/?width=200";
// 	let details = app.get("#profile-details");
// 	app.createElement("div", {
// 		atrs: {
// 			className: "name",
// 			textContent: data.name
// 		}
// 	}, details);
// 	app.createElement("div", {
// 		atrs: {
// 			className: "email",
// 			textContent: data.email
// 		}
// 	}, details);
// }; window.addEventListener("DOMContentLoaded", app.init);