'use strict'

// Interacting with site logic

const onLoad = () => {
    $('.settingsp').hide()
    $('.main').hide()
    $('.extra').hide()
    $('.editGoalForm').hide()
    $('.createGoalForm').hide()
    $('.deleteGoalForm').hide()
    $('.grabGoalForm').hide()
    $('.authp').show()
}

const onLogIn = () => {
    $('.editGoalForm').hide()
    $('.createGoalForm').hide()
    $('.deleteGoalForm').hide()
    $('.grabGoalForm').hide()
    $('.authp').hide()
    $('.main').show()
    $('.extra').show()
    $('.settingsp').hide()
    $('.games').empty()
}

const onLogOut = () => {
    $('.editGoalForm').hide()
    $('.createGoalForm').hide()
    $('.deleteGoalForm').hide()
    $('.grabGoalForm').hide()
    $('.main').hide()
    $('.extra').hide()
    $('.settingsp').hide()
    $('.authp').show()
}

const openAccount = () => {
    $('.editGoalForm').hide()
    $('.createGoalForm').hide()
    $('.deleteGoalForm').hide()
    $('.grabGoalForm').hide()
    $('.main').hide()
    $('.extra').hide()
    $('.settingsp').show()
    $('.games').empty()
}

const createGoal = (event) => {
    event.preventDefault()
    $('.createGoalForm').show()
    $('.grabGoalForm').hide()
    $('.editGoalForm').hide()
    $('.deleteGoalForm').hide()
  }
  
  const editGoal = (event) => {
    event.preventDefault()
    $('.editGoalForm').show()
    $('.createGoalForm').hide()
    $('.deleteGoalForm').hide()
    $('.grabGoalForm').hide()
  }
  
  const deleteGoal = (event) => {
    event.preventDefault()
    $('.deleteGoalForm').show()
    $('.editGoalForm').hide()
    $('.createGoalForm').hide()
    $('.grabGoalForm').hide()
  }
  
  const grabGoals = (event) => {
    event.preventDefault()
    $('.deleteGoalForm').hide()
    $('.editGoalForm').hide()
    $('.createGoalForm').hide()
    $('.grabGoalForm').show()
  }

module.exports = {
    onLoad,
    onLogIn,
    onLogOut,
    openAccount,
    grabGoals,
    createGoal,
    editGoal,
    deleteGoal
}