//儲存喜愛商品 -> 移除喜愛商品 -> 取得喜愛商品 

function getCookies(name) {
	let result = null;
	cookies = document.cookie.split('; ');
	cookies.forEach(element => {
		if (element.indexOf(name) >= 0) {
			result = element.split('=')[1];
		}
	});

	return result; // null if not found
}

var like = document.querySelector('.like-btn');
like.onclick = function (e) {
	const trigger = e.target.classList.toggle('is-active');
	const id = document.getElementById('product-id').innerText;
	const likeUrl = `https://davidadm.com/api/1.0/user/favorite-save?id=${id}`;
	const unlikeUrl = `https://davidadm.com/api/1.0/user/favorite-delete?id=${id}`;
	const token = getCookies('token');
	console.log(token);
	if (!token) {
		return;
	}
	if (trigger) { // like

		fetch(likeUrl, {
			headers: {
				'Authorization': `Bearer ${token}`,
			},
			method: 'GET', // *GET, POST, PUT, DELETE, etc.
		}).then(res => console.log(res.json()));
	} else { //unlike
		fetch(unlikeUrl, {
			headers: {
				'Authorization': `Bearer ${token}`,
			},
			method: 'GET', // *GET, POST, PUT, DELETE, etc.
		}).then(res => console.log(res.json()));;
	}
};



var list = document.querySelector('.listlist');

list.onclick = function () {
	window.location = "favorite.html";
}


//找到 user，get 所有她點擊所有的商品 id 印到喜愛清單那頁
if (window.location === "favorite.html") {
	getLike();
}

function getLike() {
	const token = getCookies('token');
	const getLikeURL = 'https://davidadm.com/api/1.0/user/favorite-get';
	fetch(getLikeURL, {
		headers: {
			'Authorization': `Bearer ${token}`,
		},
		method: 'GET', // *GET, POST, PUT, DELETE, etc.
	}).then(res => console.log(res.json()));
};



// app.showProduct = function () {
// 	let product = app.state.product;
// 	app.get("#product-name").textContent = product.title;
// 	app.get("#product-id").textContent = product.id;
// 	app.get("#product-price").textContent = "TWD." + product.price;
// 	app.get("#product-summary").innerHTML = product.note + "<br/><br/>" + product.texture + "<br/>" + product.description.replace(/\r\n/g, "<br/>") + "<br/><br/>清洗：" + product.wash + "<br/>產地：" + product.place;
// 	app.createElement("img", {
// 		atrs: {
// 			src: product.main_image
// 		}
// 	}, app.get("#product-main-image"));
// }