// ID로 요소 선택
const elementById = document.getElementById('myId');

// class로 요소 선택
const elementsByClass = document.getElementsByClassName('myClass');

// tag로 요소들 선택
const elementsByTag = document.getElementsByTagName('div');

// css 선택자로 첫 번째 요소 선택
const elementByQuery = document.querySelector('.container > p');

// css 선택자로 모든 요소 선택
const elementsByQueryAll = document.querySelectorAll('div.item');

// ===============================================================
// DOM 조작의 주요 방법들

// 1. 요소 내용 변경

// HTML 내용 변경 (태그 포함)
element.innerHTML = '<strong>새로운 내용</strong>';

// 텍스트 내용만 변경
element.textContent = '새로운 텍스트';

// 2. 스타일 조작

// 직접 스타일 변경
element.style.color = 'red';
element.style.fontSize = '16px';

// 클래스 조작
element.classList.add('highlight');
element.classList.remove('hidden');
element.classList.toggle('active');

// 3. 요소 생성 및 추가

// 새 요소 생성
const newDiv = document.createElement('div');
newDiv.textContent = '새로운 DIV 요소';

// 요소 추가
parentElement.appendChild(newDiv);
parentElement.insertBefore(newDiv, referenceElement);

// 4. 이벤트 처리

// 이벤트 리스너 추가
button.addEventListener('click', function(event) {
    console.log('버튼이 클릭되었습니다!');
});

// 이벤트 위임
document.addEventListener('click', function(event) {
    if (event.target.matches('.button')) {
        // 동적으로 생성된 버튼도 처리 가능
    }
});

// ===============================================================
// 최적화 기법들

// 1. 배치 변경 최소화

element.style.width = '100px';
element.style.height = '100px'; // 여러 번의 reflow 발생

// 개선된 방법
element.style.cssText = 'width: 100px; height: 100px'; // 한 번의 reflow

// 2. DocumentFragment 사용

const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    fragment.appendChild(li);
}
ul.appendChild(fragment); // 한 번에 DOM에 추가

// 3. transform과 opacity 활용 (GPU 가속)

element.style.transform = 'translateX(100px)'; // reflow 없이 이동
element.style.opacity = '0.5'; // repaint만 발생

// ===============================================================
// 최적화 사례들

// 1. DOMContentLoaded 사용

document.addEventListener('DOMContentLoaded', function() {
    // DOM이 완전히 로드된 후 실행
    const element = document.getElementById('myElement');
    // DOM 조작 코드...
})

// 2. 요소 캐싱

// 비효율적인 방법
for (let i = 0; i < 10; i++) {
    document.getElementById('myElement').style.left = i + 'px';
}

// 효율적인 방법
const element = document.getElementById('myElement');
for (let i = 0; i < 10; i++) {
    element.style.left = i + 'px';
}

// 3. 이벤트 위임 활용

// 각 버튼마다 이벤트 리스너 추가 (비효율적)
buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});

// 부모 요소에 하나의 이벤트 리스너 (효율적)
parentElement.addEventListener('click', function(event) {
    if (event.target.matches('button')) {
        handleClick(event);
    }
})