# Prac4. 상대 시간 표시 앱 구현하기
특정 시간을 입력받아, 지금으로부터 얼마 전인지를 표시하는 앱을 만들어봅니다.

<br><br>

### MyCode : RelativeTime.js
```js
/////Best Solution

// const TimeMap = (() => { //Immediately Invokable Function Expression (IIFE) 즉시 실행 함수

//   let min = 60;
//   let hour = min * 60;
//   let day = hour * 24;
//   let week = day * 7;
//   let month = week * 4;
//   let year = month * 12;

//   return { min, hour, day, week, month, year };
// })();


const TimeMap = {
    min : 60,
    hour : 3600,
    day : 86400,
    week : 604800,
    month : 2628000,
    year : 31540000
}

const TimeTextMap = {
    [TimeMap.min]: "분",
    [TimeMap.hour]: "시간",
    [TimeMap.day]: "일",
    [TimeMap.week]: "주",
    [TimeMap.month]: "개월",
    [TimeMap.year]: "년",
};

function createTimeText(time, standard, suffix) {
    return `${Math.floor(time / standard)}${suffix} 전`;
}

const RelativeTime = {
    diff: (date) => {
        const getResult = (new Date() - date) / 1000; //지금 시간과 받아온 date의 시간 차이.

        return Object.entries(TimeMap).reduce((text, [time, value]) => {
            if (getResult >= value) return createTimeText(getResult, value, TimeTextMap[value]);
            return text;
        }, `방금 전`); //기본값
    },
};

export default RelativeTime;

---------------------------------------------------

////MYCODE////
const RelativeTime = {
    diff: (date) => {
        
        let curDate = new Date();
        let dif = curDate - date
        console.log(dif)
        if (dif < 60000){ return '방금 전'}
        else if (dif < 3600000){return `${Math.floor( dif / 60000 )}분 전`}
        else if (dif < 86400000){return `${Math.floor( dif / 3600000 )}시간 전`}
        else if (dif < 604800000) {return `${Math.floor( dif / 86400000 )}일 전`}
        else if (dif < 2419200000) {return `${Math.floor( dif / 604800000 )}주 전`}
        else if (dif < 29030400000) {return `${Math.floor( dif / 2419200000 )}개월 전`}
        else if (dif >= 29030400000) {return `${Math.floor( dif / 29030400000 )}년 전`}
        
    },
  };
  
  export default RelativeTime;

```
<br>

### Solution
```

```

<br><br>

---

<br><br>


## 지시사항
1. RelativeTime.diff(date) 는 또 다른 과거 시간 date를 인자로 받아, date와의 시간 차를 상대 시간으로 표시합니다.

2. 시간 차의 조건은 다음과 같습니다.
```
1분 이내 - 방금 전
60분 이내 - n분 전
24시간 이내 - n시간 전
7일 이내 - n일 전
4주 이내 - n주 전
1년 이내 - n개월 전
1년 이상 - n년 전
```
- 예를 들어, 현재 시간으로부터 60분 전이라면 1시간 전으로 표시합니다. 25시간 전이라면 1일 전으로 표시합니다. 

- 40초 전이라면 방금 전으로 표시합니다.

<br>

### Tips!
new Date()로 아무런 인자를 주지 않으면 현재 시간이 생성됩니다.
두 date를 빼면 시간의 차이가 ms단위로 주어집니다.
시간의 차를 계산해 상대 시간을 구해보세요.