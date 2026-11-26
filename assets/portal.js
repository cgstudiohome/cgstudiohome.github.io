(function () {
    'use strict';

    function applyTextReplacements(lang) {
        const attr = lang === 'en' ? 'data-en' : 'data-tr';
        document.querySelectorAll('[' + attr + ']').forEach(function (el) {
            const val = el.getAttribute(attr);
            if (val !== null) {
                el.textContent = val;
            }
        });
        const titleEl = document.querySelector('title[' + attr + ']');
        if (titleEl) {
            const tv = titleEl.getAttribute(attr);
            if (tv) document.title = tv;
        }
        const metaDesc = document.getElementById('meta-description');
        if (metaDesc) {
            const mv = metaDesc.getAttribute(attr);
            if (mv) metaDesc.setAttribute('content', mv);
        }
    }

    window.setPortalLang = function (lang, persist) {
        const target = lang === 'en' ? 'en' : 'tr';
        document.documentElement.lang = target;
        document.documentElement.setAttribute('data-portal-lang', target);

        const btnTr = document.getElementById('lang-tr');
        const btnEn = document.getElementById('lang-en');
        if (btnTr) btnTr.classList.toggle('active', target === 'tr');
        if (btnEn) btnEn.classList.toggle('active', target === 'en');

        applyTextReplacements(target);

        if (persist) {
            try {
                localStorage.setItem('cg_lang', target);
            } catch (e) {}
            if (typeof window.gtag === 'function') {
                window.gtag('event', 'select_language', { language: target });
            }
        }
    };

    function initPortalLanguage() {
        const urlParams = new URLSearchParams(window.location.search);
        const qLang = (urlParams.get('lang') || '').toLowerCase();
        if (qLang === 'tr' || qLang === 'en') {
            window.setPortalLang(qLang, false);
            return;
        }

        let saved = null;
        try {
            saved = localStorage.getItem('cg_lang');
        } catch (e) {}

        if (saved === 'tr' || saved === 'en') {
            window.setPortalLang(saved, false);
            return;
        }

        const navLangs = navigator.languages || [navigator.language || ''];
        let isTurkish = false;
        for (let i = 0; i < navLangs.length; i++) {
            const l = (navLangs[i] || '').toLowerCase();
            if (l.startsWith('tr')) {
                isTurkish = true;
                break;
            }
        }
        window.setPortalLang(isTurkish ? 'tr' : 'en', false);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPortalLanguage);
    } else {
        initPortalLanguage();
    }
})();
