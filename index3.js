// CHALLENGE VOWELS

function removeVowels(doc) {
  let vowels = "aeiouy";
  let bigVowels = vowels.toUpperCase();
  console.log(doc);
  let newDoc = "";
  for (let i = 0; i < doc.length; i++) {
    if (!vowels.includes(doc[i]) && !bigVowels.includes(doc[i])) {
      newDoc = newDoc + doc[i];
    }
  }
  console.log(newDoc);
  return newDoc;
}

removeVowels("document");
removeVowels("I like my boss");
removeVowels("350 euro");
removeVowels("Mate academy!!!");

// Challenge MAKE ABBR

function makeAbbr(words) {
  let abbr = words[0];
  for (let i = 0; i < words.length; i++) {
    if (words[i] === " ") {
      abbr = abbr + words[i + 1];
    }
  }
  abbr = abbr.toUpperCase();
  return abbr;
}

makeAbbr("national aeronautics space administration");
makeAbbr("central processing unit");
makeAbbr("simplified molecular input line entry specification");

// Challenge decryptMessage

function decryptMessage(message) {
  let newMessage = "";
  for (let i = message.length - 1; i >= 0; i--) {
    newMessage = newMessage + message[i];
  }
  return newMessage;
}

decryptMessage("!!!reeb gniknird ekil eW");
decryptMessage("0202 ni eb lliw cimednap surivanoroc A");
