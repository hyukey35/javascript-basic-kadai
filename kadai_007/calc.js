//変数numに１以上の正の数を代入する
let num = Math.floor(Math.random() * 100) + 1;

//変数numの値を出力する（確認用）
 console.log( num);


//もし変数numが3と5の倍数の場合： “3と5の倍数です”
if (num % 3 === 0 && num % 5 === 0){
  console.log('3 と 5の倍数です');
}


// もし変数numが3の倍数の場合： “3の倍数です”
else if(num % 3 == 0 ){
  console.log('3の倍数です');
}

//もし変数numが5の倍数の場合： “5の倍数です”
else if(num % 5 == 0){
  console.log('５の倍数です');
}


//それ以外の場合： 変数numの値を出力する
else{
  console.log(num);
}