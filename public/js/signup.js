//sign in
//一般會員註冊
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

					//讓後端拿到資料，然後跳轉到 profile 頁面

					// console.log(personalData);
					// //存到 localStorage
					// //把 result 的資料找到，然後拿出要哪些資料，整理過後塞到 localStorage
					// // set on load for testing
					// localStorage.setItem('personalData', JSON.stringify(personalData));
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


//一般會員登入
function signin() {
	const url = 'https://api.appworks-school.tw/api/1.0/user/signin';
	const data = {
		"email": document.getElementById('loginAccount').value,
		"password": document.getElementById('loginPassword').value,
		"provider": "native"
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

					let userData = {
						usename: result.data.user.name,
						userEmail: result.data.user.email,
						userPicture: result.data.user.picture
					}
					//讓後端拿到資料確認，然後跳轉到 profile 頁面
					window.location = "profile.html";
				});
			} else {
				throw ('fetch error')
			}
			// 輸出成 json
		})
		.catch(err => console.log('error', err));
}

let sign1 = document.getElementById('sign1');
sign1.addEventListener("click", signin);