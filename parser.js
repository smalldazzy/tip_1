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
// let sdata = '1#tovar1#./sputnik.html;2#tovar2#./square.html;3#tovar3#;'
// localStorage.setItem('tabledata','1#Avto#./sputnik.html;2#Мяч#./square.html;3#тест#;')
// input выпадающий список из имен товаров из файла, если выбранный в списке отсутсвтет или содержится в описанрии
// для анимации рандом из 5 анимаций с постоянным временем
const onInit = () => {
    document.getElementById('file').addEventListener('change', read, false)
    // const finaldata = parseData(localStorage.getItem('tabledata'))
    const select = document.getElementById('sel')
    for (var i = 0; i < finaldata.length; i++) {
        var opt = finaldata[i];
        var el = document.createElement("option");
        el.textContent = opt.name;
        el.onclick = () => top.location.href = opt.link
        el.value = opt.name;
        select.appendChild(el);1
    }
}
const fillDropdown = (finaldata) => {
    const select = document.getElementById('sel')
    // select.setAttribute('onchange', onChange(finaldata))
    for (var i = 0; i < finaldata.length; i++) {
        var opt = finaldata[i];
        var el = document.createElement("option");
        el.textContent = opt.name;
        el.onclick = () => top.location.href = opt.link
        el.value = opt.name;
        select.appendChild(el);1
    }
}
const parseData = (lsdata) => {
    // if (typeof lsdata !== 'string') {
    //     alert('Parse failed')
    //     return
    // }
    // let lsdata = localStorage.getItem('tabledata')
    let trows = lsdata.split(';')
    let finaldata = trows.map((item)=>{
        let tdata = item.split('#')
        // if (tdata.length !== 3) {
        //     alert('parse failed')
        //     return
        // }
        return {
            code: tdata[0],
            name: tdata[1],
            link: tdata[2],
        }
    })
    return finaldata
}
const read = (e) => {
    console.log(e.target.files[0])
    if (e.target.files[0].type !== 'text/plain'){
        alert('non txt file')
        return
    }
    let reader = new FileReader()
    reader.onload = (file) => {
            console.log(file.target.result)
            const finaldata = parseData(file.target.result)
            fillDropdown(finaldata)
        
    }
    reader.readAsText(e.target.files[0])
    
}
const onChange = () => {
    const finaldata = parseData(localStorage.getItem('tabledata'))
    const select = document.getElementById('sel')
    var selectedValue = select.options[select.selectedIndex].value;
    console.log(selectedValue)
    const tableItem = finaldata.find((item) => item.name === selectedValue)
    if (!tableItem.link) {
        alert('Invalid link')
    } else {
        render([tableItem])
    }
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
