// ScrollMagic 사용법
let spyEls = document.querySelectorAll('section.scroll-spy');
console.log(spyEls);

spyEls.forEach(function(spyEl) {
  new ScrollMagic.Scene ({ // 감시할 장면 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.5 // 화면의 50% 지점에서 보여짐 여부 감시(0~1 사이의 값을 지정)
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo (new ScrollMagic.Controller());
});

// 종이비행기 모달창
let modalPaper = document.querySelector('#welcome');
let modalBtn = document.querySelectorAll('.paper-airplane .btn-modal');
let closeBtn = document.querySelector('#welcome .btn-close');
let airplaneEl = document.querySelector('.paper-airplane');
console.log(modalBtn);
console.log(modalBtn[0]);
console.log(modalBtn[1]);

modalBtn[0].addEventListener('click', function() {
  modalPaper.style.opacity = '1';
  modalPaper.style.visibility = 'visible';

  airplaneEl.classList.add('shoong');
});

closeBtn.addEventListener('click', function() {
  modalPaper.style.opacity = '0';
  modalPaper.style.visibility = 'hidden';
  airplaneEl.classList.remove('shoong');
});

// 현재 연도 표시
// 날짜 정보를 가진 JS의 Date 객체 활용
new Date().getFullYear; // 현재 연도 정보가 숫자 데이터로 반환됨
console.log(new Date().getFullYear());

let thisyear = document.querySelector('.this-year');
thisyear.textContent = new Date().getFullYear();


// 페이지 최상단으로 이동
let toTopBtn = document.querySelector('#to-top');

// 페이지에 스크롤 감지 이벤트 추가
// window: 브라우저 창 객체
window.addEventListener('scroll', function () {
  // console.log(window.scrollY); // Y축 스크롤 위치

  // 페이지 스크롤 위치가
  // 500px을 넘으면 요소를 보이고,
  // 500px을 넘지 않으면 요소 숨기기
  if (window.scrollY > 500) {
     // 요소 보이기
    // toTopBtn.style.display = 'flex';
    // 애니메이션 처리를 하고 싶다면 
    toTopBtn.style.opacity = 1;
    toTopBtn.style.transform = 'translateX(0)';
  } else {
    // 요소 숨기기
    // toTopBtn.style.display = 'none';
    // 애니메이션 처리를 하고 싶다면 
    toTopBtn.style.opacity = 0;
    toTopBtn.style.transform = 'translateX(100px)';
  }
});

