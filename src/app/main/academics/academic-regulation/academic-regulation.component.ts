import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-academic-regulation',
  templateUrl: './academic-regulation.component.html',
  styleUrls: ['./academic-regulation.component.scss']
})
export class AcademicRegulationComponent {



   @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
    @ViewChild('footercontainer', { read: ViewContainerRef }) footercontainer!: ViewContainerRef;
  
    constructor(private cfr: ComponentFactoryResolver,private MainService : MainService,private fb: FormBuilder) {
        
        }
    
    
    async ngAfterViewInit() {
      this.container.clear();
      const { HeaderComponent } = await import('../../../main/shared/header/header.component');
      this.container.createComponent(this.cfr.resolveComponentFactory(HeaderComponent));
  
      const { FooterComponent } = await import('../../../main/shared/footer/footer.component');
      this.footercontainer.createComponent(this.cfr.resolveComponentFactory(FooterComponent));
  
      
    }
}
