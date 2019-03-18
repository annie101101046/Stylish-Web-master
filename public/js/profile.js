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

//讀 localstorage 的資料印出來
if (typeof (Storage) !== "undefined") {
	console.log(localStorage);
	var username = document.getElementById('load_name');
	var email = document.getElementById('load_email');
	var picture = document.getElementById('profile_picture');
	var data = localStorage.getItem('personalData');
	data = JSON.parse(data);


	username.innerHTML = data.usename;
	email.innerHTML = data.userEmail;
	picture.innerHTML = data.userPicture;
} else {
	// No web storage Support.
}