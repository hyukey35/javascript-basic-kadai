// head要素を取得し、中身を出力する
console.log(document.head);
// body要素を取得し、中身を出力する
console.log(document.body);

const textElement =
document.getElementById('text');
const buttonElement =
document.getElementById('btn');

buttonElement.addEventListener('click',()=> {
  textElement.textContent = 'ボタンをクリックしました';
});