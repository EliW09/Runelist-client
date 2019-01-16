'use strict'

const site = require('./functions.js')
const authEvents = require('./api/auth/events.js')
const goalEvents = require('./api/goal/events.js')

$(() => {
  // your JS code goes here
  $(document).ready(site.onLoad)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#changePassword').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('#createGoal').on('click', site.createGoal)
  $('#editGoal').on('click', site.editGoal)
  $('#deleteGoal').on('click', site.deleteGoal)
  $('#getGoals').on('click', site.grabGoals)
  $('#acc').on('click', site.openAccount)

  $('#createform').on('submit', goalEvents.onCreateGoal)
  $('#grab').on('click', goalEvents.onGrabGoals)
  $('#deleteform').on('submit', goalEvents.onDeleteGoal)
  $('#editform').on('submit', goalEvents.onEditGoal)

  $('.message a').click(function () {
    $('form').animate({height: 'toggle', opacity: 'toggle'}, 'slow')
  })
})
