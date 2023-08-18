function getInputValue(inputId) {
  const input = document.getElementById(inputId)
  const inputString = input.value
  const inputValue = parseFloat(inputString)
  return inputValue
}

function getElementValue(elementId) {
  const element = document.getElementById(elementId)
  const elementString = element.innerText
  const elementValue = parseFloat(elementString)
  return elementValue
}

function setNewValue(elementId, newValue) {
  const element = document.getElementById(elementId)
  element.innerText = newValue
  return element
}

function calculate(area, value1, value2) {
  const calculation = area * value1 * value2
  return calculation
}

function addToCalculationEntry(areaType, area) {
  const areaEntry = document.getElementById('calculation-entry')
  const div = document.createElement('div')
  let count = areaEntry.childElementCount

  div.innerHTML = `
  <table class="table font-bold text-2xl">
              <tbody>
                <tr>
                  <th>${count + 1}</th>
                  <td>${areaType}</td>
                  <td>${area} cm<sup>2</sup></td>
                </tr>
                </tbody>
                </table>
  `

  areaEntry.appendChild(div)
}
