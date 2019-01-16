const getFormFields = require('../../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateGoal = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.newGoal(data)
    .then(ui.createSuccess)
    .catch(ui.mainFailure)
}

const onGrabGoals = (event) => {
  $('.grabBudgetForm').show()
  event.preventDefault()
  api.grabGoals()
    .then(ui.grabSuccess)
    .catch(ui.mainFailure)
}

const onDeleteGoal = (event) => {
  event.preventDefault()
  const input = getFormFields(event.target)
  api.deleteGoals(input.goal.id)
    .then(ui.deleteSuccess)
    .catch(ui.mainFailure)
}

const onEditGoal = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const input = getFormFields(event.target)
  api.editGoals(data, input.goal.id)
    .then(ui.editSuccess)
    .catch(ui.mainFailure)
}

module.exports = {
    onCreateGoal,
    onEditGoal,
    onDeleteGoal,
    onGrabGoals
}