import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit,AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  @ViewChild('footercontainer', { read: ViewContainerRef }) footercontainer!: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver,private MainService : MainService,private fb: FormBuilder) {
      
      }
  
   


  async ngAfterViewInit() {
    this.container.clear();
    const { HeaderComponent } = await import('../../main/shared/header/header.component');
    this.container.createComponent(this.cfr.resolveComponentFactory(HeaderComponent));

    const { FooterComponent } = await import('../../main/shared/footer/footer.component');
    this.footercontainer.createComponent(this.cfr.resolveComponentFactory(FooterComponent));

    
  }


  // backendUrl = 'http://localhost:3000/';  
  backendUrl = '/';  
  
  blog_articles_data:any;
  // sliderData:any;
  // aboutData:any[]=[];
  // future_programmes_Data:any;
  // placements_Data:any;
  // placement_images_Data:any;
  // home_services_Data:any;
  // testimonials:any[]= [ ];
  // faculty_data:any;
  // home_services_Data:any;
  // home_services_Data:any;

    ngOnInit(): void {

      this.MainService.blog_articles().subscribe((res:any) => {
        this.blog_articles_data = res.data;
        console.log(res);
      })

      // this.MainService.slider().subscribe((res:any) => {
      //   this.sliderData = res.data;
      //   console.log(res);
      // })

      
      // this.MainService.who_we_are().subscribe((res:any) => {
      //   this.aboutData = res.data;
      //   console.log(res);
      // })

      //   this.MainService.future_programmes().subscribe((res:any) => {
      //   this.future_programmes_Data = res.data;
      //   console.log(res);
      // })

      // this.MainService.placements_fun().subscribe((res:any) => {
      //   this.placements_Data = res.data;
      //   console.log(res);
      // })

      // this.MainService.placement_images().subscribe((res:any) => {
      //   this.placement_images_Data = res.data;
      //   console.log(res);
      // })
      // this.MainService.home_services().subscribe((res:any) => {
      //   this.home_services_Data = res.data;
      //   console.log(res);
      // });
      // this.MainService.get_testimonials().subscribe((res:any) => {
      //   this.testimonials = res.data;
      //   console.log(res);
      // })
      // this.MainService.faculty().subscribe((res:any) => {
      //   this.faculty_data = res.data;
      //   console.log(res);
      // })


      
      

      

      

      
      











    }






  


}
