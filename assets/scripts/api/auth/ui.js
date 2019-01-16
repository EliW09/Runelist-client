'use strict'
const toastr = require('toastr')
const site = require('../../functions.js')
const store = require('../../store.js')
const api = require('./api.js')

const signUpSuccess = () => {
  toastr.success('Account successfully created!')
  $('#sign-up')[0].reset()
}

const signUpFailure = () => {
  toastr.error('Account creation failed.')
  $('#sign-up')[0].reset()
}

const signInSuccess = data => {
  toastr.success('Signed in successfully!')
  $('#sign-in')[0].reset()
  store.user = data.user
  site.onLogIn()
}

const signInFailure = () => {
  toastr.error('Failed to sign in.')
  $('#sign-in')[0].reset()
}

const signOutSuccess = () => {
  $('#sign-out')[0].reset()
  toastr.success('Signed out successfully!')
  site.onLogOut()
}

const signOutFailure = () => {
  toastr.error('Failed to sign out.')
  $('#sign-out')[0].reset()
}

const changePasswordSuccess = () => {
  toastr.success('Password successfully changed!')
  $('#changePassword')[0].reset()
}

const changePasswordFailure = () => {
  toastr.error('Failed to change password.')
  $('#changePassword')[0].reset()
}

module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
    changePasswordSuccess,
    changePasswordFailure
}