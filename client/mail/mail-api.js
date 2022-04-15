const list = async () => {
  try {
    let response = await fetch('/api/emails/', {
      method: 'GET',
    })
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

const getEmailById = async (id) => {
  try {
    let response = await fetch('/api/emails/' + id, {
      method: 'GET',
    })
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

// const sendLetter = async (id) => {
//   try {
//     let response = await fetch('/api/emails/' + id, {
//       method: 'GET',
//     })
//     return await response.json()
//   } catch (err) {
//     console.log(err)
//   }
// }

const sendLetterNodemailer = async (letter) => {
  console.log("letter", letter)
  try {
    let response = await fetch('/api/emails/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(letter)
    })
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}
const sendLetterSendgrid = async (letter) => {
  console.log("letter SG", letter)
  try {
    let response = await fetch('/api/emails/sendsg/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(letter)
    })
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}
const sendLetterMailgun = async (letter) => {
  console.log("letter MG", letter)
  try {
    let response = await fetch('/api/emails/mailgun', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(letter)
    })
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}


export { list, getEmailById, sendLetterNodemailer, sendLetterSendgrid, sendLetterMailgun }