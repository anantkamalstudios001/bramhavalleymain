import { AfterViewInit, Component } from '@angular/core';
declare var google: any;
declare var AOS: any;



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit {

    ngAfterViewInit(): void {

          AOS.init({
      duration: 1000,
      once: true
    });



    this.loadGoogleTranslate();




    

  }

  loadGoogleTranslate() {
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    (window as any).googleTranslateElementInit = () => {
      new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi,mr',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
    };
  }


  scrollToTop(event: Event): void {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}




}
