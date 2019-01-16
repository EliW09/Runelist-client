const toastr = require('toastr')

const createSuccess = () => {
    toastr.success('Created goal!')
}

const editSuccess = () => {
    toastr.success('Goal edited!')
}

const deleteSuccess = () => {
    toastr.success('Deleted goal!')
}

const mainFailure = () => {
    toastr.error('FAILED')
}

const grabSuccess = data => {
    $('.goals').empty()
    data.goals.forEach(goal => {
      $('.goals').append(`
        <div class=${goal.id}>
        <h4 id=${goal.id}>Goal ID: ${goal.id}</h4>
        </div>`)
      $(`#${goal.id}`).css('color', 'white')
      for (const key in goal) {
        if (key !== 'id' && key !== 'user') {
            if (goal.complete == 'true' || goal.complete == true) {
                $(`.${goal.id}`).append(`<h6>${key}: ${goal[key]}</h6>`)
                $(`.${goal.id}`).css('border', '3px solid #434a52')
                $(`.${goal.id}`).css('background', 'rgba(0, 255, 0, 0.8)')
                $(`.${goal.id}`).css('box-shadow', '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)')
                $(`.${goal.id}`).css('margin', '4px')
            }

            if (goal.complete == 'false' || goal.complete == false) {
                $(`.${goal.id}`).append(`<h6>${key}: ${goal[key]}</h6>`)
                $(`.${goal.id}`).css('border', '3px solid #434a52')
                $(`.${goal.id}`).css('background', 'rgba(255, 0, 0, 0.8)')
                $(`.${goal.id}`).css('box-shadow', '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)')
                $(`.${goal.id}`).css('margin', '4px')
            }
        }
      }
    })
  }

  module.exports = {
      createSuccess,
      editSuccess,
      deleteSuccess,
      mainFailure,
      grabSuccess
  }