const config = require('../../config.js')
const store = require('../../store.js')

const newGoal = data => {
  return $.ajax({
    url: config.apiUrl + '/goals',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const grabGoals = () => {
  return $.ajax({
    url: config.apiUrl + '/goals',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const editGoals = (data, id) => {
  return $.ajax({
    url: config.apiUrl + `/goals/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteGoals = (id) => {
  return $.ajax({
    url: config.apiUrl + `/goals/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
    newGoal,
    editGoals,
    deleteGoals,
    grabGoals
}