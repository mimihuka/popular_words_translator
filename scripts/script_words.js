let searchParams = new URLSearchParams(window.location.search);

// 读取网址参数
let param = searchParams.get("word");

// 获取 h3 元素
let word = document.querySelector("#word");
let content = document.querySelector("#content");

//读取json内容
var jsonData;
fetch('../words/words.json')
  .then(response => response.json())
  .then(data => {
    jsonData = data;
    // 修改 h3 元素中的内容
    word.textContent = param;
    content.textContent = jsonData[param];
  });