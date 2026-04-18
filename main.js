// Без elem можно создать, но для дубликата крайне необходим(пробовал).
function createCalendar(elem, year, month) {
    const container = document.querySelector(`.container`)
    let mon = month - 1
    let date = new Date(year, mon)
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    let table = `
        <table>
          <caption>${months[mon]} ${year}</caption>
          <tr>
            <th>Пн</th>
            <th>Вт</th>
            <th>Ср</th>
            <th>Чт</th>
            <th>Пт</th>
            <th>Сб</th>
            <th>Вс</th>
          </tr>
          <tr>
      `
    // Заполняет пустые ячейки до
    for (let i = 0; i < getDay(date); i++) {
        table += `<td></td>`
    }
    // Заполняет дни от 1 до 31
    while (date.getMonth() == mon) {
        table += `<td>${date.getDate()}</td>`
        if (getDay(date) % 7 == 6) table += `</tr><tr>`
        date.setDate(date.getDate() + 1)
    }
    // Заполняет пустые ячейки после
    if (getDay(date) != 0) {
        for (let i = getDay(date); i < 7; i++) {
            table += `<td></td>`
        }
    }

    table += `
          </tr>
        </table>
      `
    elem.innerHTML = table
    container.append(elem)
}
// Возвращает день недели в формате числа от 0 до 6, где 0 это воскресенье.
function getDay(date) {
    let day = date.getDay()
    if (day == 0) day = 7
    return day - 1
}
for (let i = 1; i <= 12; i++) {
    let block = document.createElement('div')
    block.className = 'block'
    createCalendar(block, 2026, i)
}