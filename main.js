const button = document.querySelector('.button');

button.addEventListener('click', () => {
	//instanciar
	const xhr = new XMLHttpRequest();
	//conectar

	xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

	//verificar status y hacer las operaciones
	xhr.onload = function () {
		if (this.status === 200) {
			const arrPosts = JSON.parse(this.responseText);

			arrPosts.forEach((post) => {
				const cont = document.createElement('div');
				cont.classList.add('post');
				cont.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;
				document.querySelector('.posts').appendChild(cont);
			});
		}
	};

	//sin esto no jala
	xhr.send();
});
