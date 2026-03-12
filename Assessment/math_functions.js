console.log(Math.round(randomFiveDigit()));

function randomFiveDigit() {
  return Math.floor(Math.random() * 90000) + 10000; // 10000..99999
}

  let firstName = "satish";
  let secondName = "kacharla";
  console.log(`${firstName} ${secondName}`);