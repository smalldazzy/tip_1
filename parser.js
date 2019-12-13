// const data = [
//     {
//         code: 1,
//         name: 'tovar1',
//         link: './sputnik.html'
//     },
//     {
//         code: 2,
//         name: 'tovar2',
//         link: './square.html'
//     },
// ]
// let sdata = '1#tovar1#./sputnik.html;2#tovar2#./square.html'
const parseData = () => {
    let lsdata = localStorage.getItem('tabledata')
    let trows = lsdata.split(';')
    let finaldata = trows.map((item)=>{
        let tdata = item.split('#')
        return {
            code: tdata[0],
            name: tdata[1],
            link: tdata[2],
        }
    })
    render(finaldata)
}
const render = (data) => {
    let table = document.createElement('table')
    table.setAttribute('class', 'tbl')
    let thead = document.createElement('thead')
    thead.setAttribute('class', 'thd')
    thead.innerHTML = '<tr>'+          
    '<th class=thd onClick="PROD_CODE_onClick()" id="PROD_CODE" title="Сортировать?">Код товара</th>'+
    '<th title="Нет сортировки.">Наименование товара</th>'+
    '<th onClick="" id="PROD_PRICE" title="Сортировать?">Цена</th></tr>'
    table.appendChild(thead)
    let tbody = document.createElement('tbody')
    tbody.setAttribute('class', 'tbd')
    data.forEach((item) => {
        let tr = document.createElement('tr')
        let code = document.createElement('td')
        code.setAttribute('class', 'ttd')
        code.innerText = item.code
        let name = document.createElement('td')
        name.setAttribute('class', 'ttd')
        name.innerText = item.name
        let link = document.createElement('td')
        link.innerHTML = `<a href='${item.link}' target='_blank'>link</a>`
        link.setAttribute('class', 'ttd')
        tr.appendChild(code)
        tr.appendChild(name)
        tr.appendChild(link)
        tbody.appendChild(tr)
    })
    table.appendChild(tbody)
    document.body.appendChild(table)
}
