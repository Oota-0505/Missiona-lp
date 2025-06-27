// DOMが読み込まれてからJavaScriptを実行
document.addEventListener('DOMContentLoaded', () => {
    // スクロールで表示されるボタンの制御
    const scrollToTopBtn = document.getElementById('scrollToTop');
    const fixedLineBtn = document.getElementById('fixedLineBtn');

    if (scrollToTopBtn && fixedLineBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollToTopBtn.classList.add('show');
                fixedLineBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
                fixedLineBtn.classList.remove('show');
            }
        });
    }

    // スクロールでトップに戻る機能
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 要素のフェードインアニメーション
    const fadeInElements = document.querySelectorAll('.fade-in');

    if (fadeInElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        fadeInElements.forEach(element => {
            observer.observe(element);
        });
    }
});

