
// 상단으로 이동
let moveTopButton = document.querySelector('.move_top_button2');

moveTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

let slideButtons = document.querySelectorAll('.slide_button_box_left2, .slide_button_box_right');

slideButtons.forEach(function (slideButton) {
    slideButton.addEventListener('click', function () {
        let slideCardList = this.parentNode.querySelector('.slide_card_list');
        if (this.classList.contains('slide_button_box_left2')) {
            slideCardList.style.transform = "translateX(20%)";
            setTimeout(function () {
                slideCardList.insertBefore(slideCardList.lastElementChild, slideCardList.firstElementChild);
                slideCardList.style.transform = "translateX(0)";
            }, 500);
        } else {
            slideCardList.style.transform = "translateX(-20%)";
            setTimeout(function () {
                slideCardList.insertAdjacentElement('beforeend', slideCardList.firstElementChild);
                slideCardList.style.transform = "translateX(0)";
            }, 500);
        }
    });
});

let currentSlide = 1;
const slides = document.getElementsByClassName("visual_slide");

// 자동으로 슬라이드를 전환하는 함수
function nextSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    currentSlide++;

    if (currentSlide > slides.length) {
        currentSlide = 1;
    }

    slides[currentSlide - 1].style.display = "block";
    setTimeout(nextSlide, 3000); // 3초 후에 다음 슬라이드로 자동 전환
}

// 초기화
nextSlide();

function openPopup(url) {
    var w = 500;
    var h = 600;
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    window.open(url, 'popupWindow', 'width=' + w + ',height=' + h + ',top=' + top + ',left=' + left + ',location=no,menubar=no,toolbar=no,status=no,resizable=no');
}

document.getElementById('toggle').addEventListener("click", function() {
    if(document.querySelector('body').classList.contains('dark-mode')){
        document.body.classList.remove("dark-mode");
    }else{
        document.body.classList.add("dark-mode");
    }
},false);
