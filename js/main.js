let tableHead = document.querySelector('#tableHead')
let tableBody = document.querySelector('#tableBody')
const menu = document.querySelectorAll('#navigation li a')

//exibindo os dados em tela.
const FetchData = url_param => {
    const url = `https://jsonplaceholder.typicode.com/${url_param}`

    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            switch (url_param) {
                case 'posts':
                    tableHead.innerHTML = `
                            <td>User</td>
                            <td>Id</td>
                            <td>Title</td>
                            <td>Body</td>
                        `
                    break;
                case 'albums':
                    tableHead.innerHTML = `
                    <td>User</td>
                    <td>Id</td>
                    <td>Title</td>
                    `
                    break;
                case 'todos':
                    tableHead.innerHTML = `
                    <td>User</td>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Completed</td>
                    `
                    break;
                default:
                    tableHead.innerHTML = `
                    <td>User</td>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Body</td>
                `
                    break;
            }

            tableBody.innerHTML = ''

            data.forEach(a => {
                switch (url_param) {
                    case 'posts':
                        tableBody.innerHTML += `
                        <tr>
                            <td>${a.userId}</td>
                            <td>${a.id}</td>
                            <td>${a.title}</td>
                            <td>${a.body}</td>
                        </tr>
                    `
                        break;
                    case 'albums':
                        tableBody.innerHTML += `
                        <tr>
                            <td>${a.userId}</td>
                            <td>${a.id}</td>
                            <td>${a.title}</td>
                        </tr>
                    `
                        break;
                    case 'todos':
                        tableBody.innerHTML += `
                        <tr>
                            <td>${a.userId}</td>
                            <td>${a.id}</td>
                            <td>${a.title}</td>
                            <td class="completed"><a>${a.completed}</a></td>
                        </tr>
                    `
                        document.querySelectorAll('.completed a').forEach(el => {

                            el.style.display = 'block'
                            el.style.width = '40px'

                            if (el.innerText == "true") {
                                el.style.backgroundColor = 'green'
                                el.style.color = 'green'
                                el.style.fontSize = '0.1rem'
                            } else {
                                el.style.backgroundColor = 'red'
                                el.style.color = 'red'
                                el.style.fontSize = '0.1rem'
                            }
                        })
                        break;
                    default:
                        tableBody.innerHTML += `
                        <tr>
                            <td>${a.userId}</td>
                            <td>${a.id}</td>
                            <td>${a.title}</td>
                            <td>${a.body}</td>
                        </tr>
                    `
                        break;
                }
            })

        })
}



//alterando os dados que aparecerão.
menu.forEach(m => {
    m.addEventListener('click', () => {
        FetchData(m.id)
    })
})