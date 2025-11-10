//Init github constructor
const github = new Github;
//Init UI constructor
const ui = new UI;

const searchUser = document.getElementById('searchUser');

//Add event listeners
searchUser.addEventListener('keyup', (e) => {

  const userText = e.target.value;

  if (userText !== '') {
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not found') {
          //show alert
          ui.showAlert('User Not found', 'alert alert-danger');
        } else {
          //Show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }

      })


  } else {
    //clear profile
    ui.clearProfile();

  }


})









































// // Init Github
// const github = new Github;
// // Init UI
// const ui = new UI;

// // Search input
// const searchUser = document.getElementById('searchUser');

// // Search input event listener
// searchUser.addEventListener('keyup', (e) => {
//   // Get input text
//   const userText = e.target.value;

//   if (userText !== '') {
//     // Make http call
//     github.getUser(userText)
//       .then(data => {
//         if (data.profile.message === 'Not Found') {
//           // Show alert
//           ui.showAlert('User not found', 'alert alert-danger');
//         } else {
//           // Show profile
//           ui.showProfile(data.profile);
//           ui.showRepos(data.repos);
//         }
//       })
//   } else {
//     // Clear profile
//     ui.clearProfile();
//   }
// });