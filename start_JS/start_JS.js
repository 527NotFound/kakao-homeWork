// 화살표 함수
// ES6에서 도입된 간결한 함수 표현 방식

// 기본 화살표 함수
let add = (a, b) => {
    return a + b;
}

// 중괄호와 return 생략 (한 줄일 때)
let multiply = (a, b) => a * b;

// 매개변수가 하나일 때 괄호 생략
let square = x => x * x;

// 매개변수가 없을 때
let sayHello = () => "안녕하세요!";

console.log(add(3, 4));      // 7
console.log(multiply(3, 4)); // 12
console.log(square(5));      // 25
console.log(sayHello());     // "안녕하세요!"

// 객체를 반환할 때는 괄호로 감사기
let createPerson = (name, age) => ({name: name,
                                    age: age});
console.log(createPerson("홍길동", 30)); // {name: "홍길동", age: 30}

// ================================================================

/** 일반 함수와 화살표 함수의 차이점 */

// this 바인딩의 차이
let obj = {
    name: "홍길동",

    // 일반 함수: this는 obj를 가리킴
    normalFunction: function() {
        return `안녕하세요, ${this.name}님!`;
    },

    // 화살표 함수: this는 상위 스코프의 this를 가리킴
    arrowFunction: () => {
        return `안녕하세요, ${this.name}님!`; // this.name은 undefined
    }
};

console.log(obj.normalFunction()); // "안녕하세요, 홍길동님!"
console.log(obj.arrowFunction()); // "안녕하세요,undefinedsla!"

// ================================================================

/** 예외 처리 */

// try-catch-finally
// 기본 try-catch
try {
    let result = 10 / 0;
    if (result === Infinity) {
        throw new Error("0으로 나눌 수 없습니다!");
    }
} catch (error) {
    console.log("오류 발생:", error.message);
} finally {
    console.log("항상 실행되는 블록");
}

// JSON 파싱 예외 처리
function perseJSON(jsonString) {
    try {
        let data = JSON.parse(jsonString);
        console.log("파싱 성공:", data);
        return data;
    } catch (error) {
        console.log("JSON 파싱 오류:", error.message);
        return null;
    }
}

parseJSON('{"name": "홍길동"}'); // 파싱 성공: {name: "홍길동"}
parseJSON('잘못된 JSON');        // JSON 파싱 오류: ...

// 사용자 정의 오류
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    } catch (error) {
        console.log("계산 오류:", error.message);
        return null;
    }
}

console.log(divide(10, 2)); // 5
console.log(divide(10, 0)) // null (계산 오류: 오류 메세지...)