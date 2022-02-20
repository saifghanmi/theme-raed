import BasePage from './base-page';
class Brands extends BasePage {
    onReady() {
        app.onClick('.brands-nav__item', ({target:btn}) => {
            app.all('.brands-nav__item', el => app.toggleElement(el, 'bg-primary lg:bg-primary text-reverse opacity-100', 'unselected', () => el == btn));
            app.all('.brands-nav__item', el => app.toggleElement(el, 'bg-primary text-reverse', 'bg-white', () => el.dataset.id == btn.dataset.id));
        });
        window.addEventListener('scroll', () => {
            let scrolAtTop = window.pageYOffset <= 200;
            app.toggle('#brands-nav', 'px-18 lg:px-44 space-s-2 space-y-2', 'flex-col flex-wrap h-full fixed z-10 top-9 start-3 space-y-0.5 pt-16 pb-10', () => scrolAtTop);
            app.toggle('.brands-nav__item', 'w-10 h-10 bg-white', 'px-1 pb-1 lg:opacity-100 bg-white', () => scrolAtTop);
        });
    }
}

Brands.className = 'Brands';
Brands.allowedPages = ['brands.index'];
Brands.intiateWhenReady();