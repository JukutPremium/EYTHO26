document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('videoModal');
    const clsbtn = document.getElementById('closeModal');
    const videoFrame = document.getElementById('videoFrame');
    const playButtonMobile = document.getElementById('playButtonMobile');
    const playButtonDesktop = document.getElementById('playButtonDesktop');
    const closeButton = document.getElementById('closeModal');

    function showModal() {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function hideModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        videoFrame.src = videoFrame.src;
    }

    playButtonMobile.addEventListener('click', showModal);
    playButtonDesktop.addEventListener('click', showModal);
    closeButton.addEventListener('click', hideModal);

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            hideModal();
        }
    });

    function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        videoFrame.src = videoFrame.src;
    }
    closeBtn.addEventListener('click', closeModal);
});


function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

$(".nav-btn").click(function () {
    $(".nav-menu").toggleClass("active");
    $(".nav-btn").toggleClass("active");
    $(".inner-nav-btn").toggleClass("active");
});

$(".nav-link").mouseenter(function () {
    $(this).find(".inner-nav-link").addClass("active");
});

$(".nav-link").mouseleave(function () {
    $(this).find(".inner-nav-link").removeClass("active");
});

$(document).ready(function () {
    // $('.box-header-list-kategori').on('mousedown', function(event) {
    //     var $this = $(this);
    //     var rect = $this[0].getBoundingClientRect();
    //     var mouseY = event.clientY;

    //     // Menambahkan class berdasarkan arah hover (atas/bawah)
    //     if (mouseY < rect.top + rect.height / 2) {
    //         $this.css("transform-origin", "top");
    //         $this.css("transition", "none");
    //         $this.removeClass('list-hover-bawah');
    //         $this.addClass('list-hover-atas');
    //     } else {
    //         $this.css("transform-origin", "bottom");
    //         $this.css("transition", "none");
    //         $this.removeClass('list-hover-atas');
    //         $this.addClass('list-hover-bawah');
    //     }
    // });
    let kategoriHoreving = 1;

    $(".box-header-list-kategori").mouseenter(function () {
        let kategoriData = $(this).attr("kategori-data");
        kategoriHoreving++
        $(this).addClass("active");
        $(this).find("h6").addClass("active");
        $(this).find("img").attr("src", "assets/compres/up-right-arrow-wh.png");
        $(this).find(".inner-text-header-list-kategori").addClass("active");
        $(this).find("img").addClass("active");
        $(".area-header-list-kategori").addClass("active");

        if (kategoriData == "kategori1") {
            $(".preview-list-kategori").removeClass("active");
            $(".kategori-home1").addClass("active");
            $(".kategori-home1").css("z-index", kategoriHoreving);
        } else if (kategoriData == "kategori2") {
            $(".preview-list-kategori").removeClass("active");
            $(".kategori-home2").addClass("active");
            $(".kategori-home2").css("z-index", kategoriHoreving);
        } else if (kategoriData == "kategori3") {
            $(".preview-list-kategori").removeClass("active");
            $(".kategori-home3").addClass("active");
            $(".kategori-home3").css("z-index", kategoriHoreving);
        } else if (kategoriData == "kategori4") {
            $(".preview-list-kategori").removeClass("active");
            $(".kategori-home4").addClass("active");
            $(".kategori-home4").css("z-index", kategoriHoreving);
        } else if (kategoriData == "kategori5") {
            $(".preview-list-kategori").removeClass("active");
            $(".kategori-home5").addClass("active");
            $(".kategori-home5").css("z-index", kategoriHoreving);
        } else if (kategoriData == "kategori6") {
            $(".preview-list-kategori").removeClass("active");
            $(".kategori-home6").addClass("active");
            $(".kategori-home6").css("z-index", kategoriHoreving);
        } else if (kategoriData == "kategori7") {
            $(".preview-list-kategori").removeClass("active");
            $(".kategori-home7").addClass("active");
            $(".kategori-home7").css("z-index", kategoriHoreving);
        } else if (kategoriData == "kategori8") {
            $(".preview-list-kategori").removeClass("active");
            $(".kategori-home8").addClass("active");
            $(".kategori-home8").css("z-index", kategoriHoreving);
        }
    });

    $(".box-header-list-kategori").mouseleave(function () {
        $(this).removeClass("active");
        $(this).find("h6").removeClass("active");
        $(this).find("img").attr("src", "assets/compres/up-right-arrow.png");
        $(this).find(".inner-text-header-list-kategori").removeClass("active");
        $(this).find("img").removeClass("active");
    });

    $(".top-header-list-kategori").mouseenter(function () {
        $(this).closest('.box-header-list-kategori').addClass('transition-0s');
        $(this).closest('.box-header-list-kategori').removeClass('list-before-hover-atas');
        $(this).closest('.box-header-list-kategori').addClass('list-before-hover-bawah');
        $(this).closest('.box-header-list-kategori').removeClass('transition-0s');
        $(this).closest('.box-header-list-kategori').removeClass('list-hover-atas');
        $(this).closest('.box-header-list-kategori').addClass('list-hover-bawah');
    });

    $(".bottom-header-list-kategori").mouseenter(function () {
        $(this).closest('.box-header-list-kategori').addClass('transition-0s');
        $(this).closest('.box-header-list-kategori').removeClass('list-before-hover-bawah');
        $(this).closest('.box-header-list-kategori').addClass('list-before-hover-atas');
        $(this).closest('.box-header-list-kategori').removeClass('transition-0s');
        $(this).closest('.box-header-list-kategori').removeClass('list-hover-bawah');
        $(this).closest('.box-header-list-kategori').addClass('list-hover-atas');
    });

    $(".top-header-list-kategori").mouseleave(function () {
        $(this).closest('.box-header-list-kategori').addClass('transition-0s');
        $(this).closest('.box-header-list-kategori').removeClass('list-before-hover-atas');
        $(this).closest('.box-header-list-kategori').addClass('list-before-hover-bawah');
        $(this).closest('.box-header-list-kategori').removeClass('list-hover-atas');
        $(this).closest('.box-header-list-kategori').addClass('list-hover-bawah');
        $(this).closest('.box-header-list-kategori').removeClass('transition-0s');
    });

    $(".bottom-header-list-kategori").mouseenter(function () {
        $(this).closest('.box-header-list-kategori').addClass('transition-0s');
        $(this).closest('.box-header-list-kategori').removeClass('list-before-hover-bawah');
        $(this).closest('.box-header-list-kategori').addClass('list-before-hover-atas');
        $(this).closest('.box-header-list-kategori').removeClass('list-hover-bawah');
        $(this).closest('.box-header-list-kategori').addClass('list-hover-atas');
        $(this).closest('.box-header-list-kategori').removeClass('transition-0s');
    });

    // $('.box-header-list-kategori').on('mouseleave', function() {
    //     var $this = $(this);
    //     var rect = $this[0].getBoundingClientRect();
    //     var mouseY = event.clientY;
    //     // Menghapus kedua class saat hover selesai
    //     if (mouseY < rect.top + rect.height / 2) {
    //         $this.css("transform-origin", "top");
    //         $this.addClass('list-hover-atas');
    //         $this.removeClass('list-hover-bawah');
    //     } else {
    //         $this.css("transform-origin", "bottom");
    //         $this.css("transition", "none");
    //         $this.addClass('list-hover-bawah');
    //         $this.removeClass('list-hover-atas');
    //     }
    // });
});

const textWidth = document.querySelector('.running-text span').offsetWidth;

gsap.to(".running-text", {
    x: `-${textWidth}`,
    duration: 25,
    ease: "none",
    repeat: -1,
    repeatDelay: 0,
    onRepeat: function () {
        gsap.set(this.targets(), { x: 0 });
    }
});