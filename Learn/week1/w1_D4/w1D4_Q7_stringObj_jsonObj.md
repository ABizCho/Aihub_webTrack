1. 문자열을 String으로 감싸지 않고도 문자열 메서드를 호출할 수 있다.<br>
자바스크립트는 자동으로 문자열을 String 래퍼 객체로 변환하므로, 문자열 메서드를 문제없이 호출할 수 있습니다.


2. new를 이용해 생성하면 타입이 객체가 됩니다. String(10) 등 new를 사용하지 않으면 문자열 타입을 반환합니다.


3. JSON.stringify()로 문자열로 변한 객체는 JSON.parse()를 이용해, 문자열을 넘겨 다시 객체로 만들 수 있습니다.