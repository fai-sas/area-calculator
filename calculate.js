function triAngle() {
  const triangleBase = getInputValue('triangle-base')
  const triangleHeight = getInputValue('triangle-height')

  if (isNaN(triangleBase) || isNaN(triangleHeight)) {
    alert('please provide valid number')
    return
  }

  const finalResult = calculate(0.5, triangleBase, triangleHeight)

  setNewValue('result', finalResult)

  addToCalculationEntry('Triangle', finalResult)
}

function rectangle() {
  const rectangleBase = getInputValue('rectangle-base')
  const rectangleHeight = getInputValue('rectangle-height')

  if (isNaN(rectangleBase) || isNaN(rectangleHeight)) {
    alert('please provide valid number')
    return
  }

  const finalResult = calculate(1, rectangleBase, rectangleHeight)

  setNewValue('rectangle-result', finalResult)

  addToCalculationEntry('Rectangle', finalResult)
}

function parallelogram() {
  const parallelogramBase = getInputValue('parallelogram-base')
  const parallelogramHeight = getInputValue('parallelogram-height')

  if (isNaN(parallelogramBase) || isNaN(parallelogramHeight)) {
    alert('please provide valid number')
    return
  }

  const finalResult = calculate(1, parallelogramBase, parallelogramHeight)

  setNewValue('parallelogram-result', finalResult)

  addToCalculationEntry('Parallelogram', finalResult)
}

function rhombus() {
  const rhombusBase = getInputValue('rhombus-base')
  const rhombusHeight = getInputValue('rhombus-height')

  if (isNaN(rhombusBase) || isNaN(rhombusHeight)) {
    alert('please provide valid number')
    return
  }

  const finalResult = calculate(0.5, rhombusBase, rhombusHeight)

  setNewValue('rhombus-result', finalResult)

  addToCalculationEntry('Rhombus', finalResult)
}

function pentagon() {
  const pentagonBase = getInputValue('pentagon-base')
  const pentagonHeight = getInputValue('pentagon-height')

  if (isNaN(pentagonBase) || isNaN(pentagonHeight)) {
    alert('please provide valid number')
    return
  }

  const finalResult = calculate(0.5, pentagonBase, pentagonHeight)

  setNewValue('pentagon-result', finalResult)

  addToCalculationEntry('Pentagon', finalResult)
}

function ellipse() {
  const ellipseBase = getInputValue('ellipse-base')
  const ellipseHeight = getInputValue('ellipse-height')

  if (isNaN(ellipseBase) || isNaN(ellipseHeight)) {
    alert('please provide valid number')
    return
  }

  const finalResult = calculate(3.14, ellipseBase, ellipseHeight)
  const finalResultToFixed = finalResult.toFixed(2)

  setNewValue('ellipse-result', finalResultToFixed)

  addToCalculationEntry('Ellipse', finalResultToFixed)
}
