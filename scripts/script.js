// kw = ['奥利给','耗子尾汁','黑人抬棺','迷hotel','闹太套','6'];
var kw = [];
var jsonwords = {};
fetch('https://leosut.github.io/pwtrans/words/words.json')
  .then(response => response.json())
  .then(data => {
    var keys = Object.keys(data);
    for (var i = 0; i < keys.length; i++) {
      kw[i] = keys[i];
    }
    Object.assign(jsonwords, data);
  });

function translateSent(sentence, wordlist) {
  for (var j = 0; j < Object.keys(wordlist).length; j++) {
    sentence=sentence.replace(RegExp(Object.keys(wordlist)[j], 'gi'),wordlist[Object.keys(wordlist)[j]]);
  }
  document.querySelector('input').value = sentence;
}

function fuzzyQuery(list, keyWord) {
  var arr = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i].indexOf(keyWord) >= 0) {
      arr.push(list[i]);
    }
  }
  console.log(arr);
  if (arr.length >= 1) {
    window.location.href = "words/?word=" + arr[0];
  } else {
    window.location.href = "https://cn.bing.com/search?q=" + keyWord;
  }
}
