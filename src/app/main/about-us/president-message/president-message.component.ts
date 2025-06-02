import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-president-message',
  templateUrl: './president-message.component.html',
  styleUrls: ['./president-message.component.scss']
})
export class PresidentMessageComponent {


       @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
          @ViewChild('footercontainer', { read: ViewContainerRef }) footercontainer!: ViewContainerRef;
      
            
          constructor(private cfr: ComponentFactoryResolver, private fb: FormBuilder, private MainService : MainService) {
          
          }
        
          async ngAfterViewInit() {
            this.container.clear();
            const { HeaderComponent } = await import('../../shared/header/header.component');
            this.container.createComponent(this.cfr.resolveComponentFactory(HeaderComponent));
        
            const { FooterComponent } = await import('../../shared/footer/footer.component');
            this.footercontainer.createComponent(this.cfr.resolveComponentFactory(FooterComponent));
          }

}
