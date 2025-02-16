//今日の日付を取得
const today =new Date();

//年、月,日、を取得
const year = today.getFullYear();
const month = today.getMonth()+1;
const day = today.getDate();

//実行結果と同じ形式で出力
console.log(year + "年"　+ month + "月"　+ day + "日");