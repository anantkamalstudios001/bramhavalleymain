import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

    @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
    @ViewChild('footercontainer', { read: ViewContainerRef }) footercontainer!: ViewContainerRef;

      contactForm: FormGroup;
  
    constructor(private cfr: ComponentFactoryResolver, private fb: FormBuilder, private MainService : MainService) {
          this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
    }
  
    async ngAfterViewInit() {
      this.container.clear();
      const { HeaderComponent } = await import('../../main/shared/header/header.component');
      this.container.createComponent(this.cfr.resolveComponentFactory(HeaderComponent));
  
      const { FooterComponent } = await import('../../main/shared/footer/footer.component');
      this.footercontainer.createComponent(this.cfr.resolveComponentFactory(FooterComponent));
    }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
      this.MainService.contact_us(this.contactForm.value).subscribe((res:any) => {
        alert(res.message);
        if(res.status === true) {
          this.contactForm.reset();
        }
      })
    } else {
      console.log('Form is invalid.');
    }
  }


}
