//FB 的順序要調整
//先進入註冊頁面 -> 註冊成功或登入成功才會進 profile 頁面
//下次再點 profile 頁面會讀 user profile 的一個 id 值去確認

app.init = function () {
	app.cart.init();
	app.fb.statusChangeCallback = app.initProfile;
};
app.initProfile = function () {
	if (app.state.auth === null) {
		window.location = "./";
	}
	app.fb.getProfile().then(function (data) {
		app.showProfile(data);
	}).catch(function (error) {
		console.log("Facebook Error", error);
	});
};
app.showProfile = function (data) {
	app.get("#profile-picture").src = "https://graph.facebook.com/" + data.id + "/picture/?width=200";
	let details = app.get("#profile-details");
	app.createElement("div", {
		atrs: {
			className: "name",
			textContent: data.name
		}
	}, details);
	app.createElement("div", {
		atrs: {
			className: "email",
			textContent: data.email
		}
	}, details);
};
window.addEventListener("DOMContentLoaded", app.init);

// //讀從後端拿出來的資料然後印出來
// if (typeof (Storage) !== "undefined") {
// 	console.log(localStorage);
// 	var username = document.getElementById('load_name');
// 	var email = document.getElementById('load_email');
// 	var picture = document.getElementById('profile_picture');
// 	var data = localStorage.getItem('personalData');
// 	data = JSON.parse(data);


// 	username.innerHTML = data.usename;
// 	email.innerHTML = data.userEmail;
// 	picture.innerHTML = data.userPicture;
// } else {
// 	// No web storage Support.
// }


//拿 user 的 profile 印出來
function profile() {
	const url = 'https://api.appworks-school.tw/api/1.0/user/profile';
	const data = {
		"name": document.getElementById('login-name').value,
		"email": document.getElementById('login-account').value,
		"password": document.getElementById('login-password').value
	};

}