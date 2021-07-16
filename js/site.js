//Get the string/value from the page
//Controller function
function getString() {
  document.getElementById('alert').classList.add('invisible')

  let userString = document.getElementById('userString').value

  let revString = reverseString(userString)

  displayString(revString)
}

//Reverse the string
//Logic function
function reverseString(userString) {
  let revString = []

  //reverse a string using a decrementing for loop
  for (let index = userString.length - 1; index >= 0; index--) {
    //add to revString on every iteration
    revString += userString[index]
  }

  //give back to getString
  return revString
}

//Display the message with the reversed string to the user
//View function
function displayString(revString) {
  //write to the page
  document.getElementById(
    'userMessage'
  ).innerHTML = `Your string reversed is: ${revString}`
  //show the alert box
  document.getElementById('alert').classList.remove('invisible')
}
