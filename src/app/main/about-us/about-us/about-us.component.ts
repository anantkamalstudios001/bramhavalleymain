import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainService } from '../../main.service';
declare var Swiper: any;


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit,AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  @ViewChild('footercontainer', { read: ViewContainerRef }) footercontainer!: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver,private MainService : MainService,private fb: FormBuilder) {
            this.contactForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        subject: ['', Validators.required],
        message: ['', Validators.required]
      });
      }
  
   swiper: any;
  contactForm: FormGroup;
   


  async ngAfterViewInit() {
    this.container.clear();
    const { HeaderComponent } = await import('../../shared/header/header.component');
    this.container.createComponent(this.cfr.resolveComponentFactory(HeaderComponent));

    const { FooterComponent } = await import('../../shared/footer/footer.component');
    this.footercontainer.createComponent(this.cfr.resolveComponentFactory(FooterComponent));

    
  }


  // backendUrl = 'http://localhost:3000/';  
  backendUrl = '/';  

  sliderData:any;
  who_we_Are_about_Data:any[]=[];
  future_programmes_Data:any;
  placements_Data:any;
  get__highlighted_cases_Data:any[]=[];
  home_services_Data:any;
  testimonials:any[]= [ ];
  placements_paragraph_Data:any;
  blog_articles_data:any;
  get_campus_gallry_Data:any;
  // home_services_Data:any;




    ngOnInit(): void {

      // this.MainService.slider().subscribe((res:any) => {
      //   this.sliderData = res.data;
      //   console.log(res);
      // })

      
      this.MainService.about_us_who_we_are().subscribe((res:any) => {
        this.who_we_Are_about_Data = res.data;
        console.log(res);
      })

      this.MainService.get_campus_gallry().subscribe((res:any) => {
        this.get_campus_gallry_Data = res.data;
        console.log(res);
      })

      this.MainService.about_us_placements().subscribe((res:any) => {
        this.placements_paragraph_Data = res.data;
        console.log(res);
      })
      
      this.MainService.get__highlighted_cases().subscribe((res:any) => {
        this.get__highlighted_cases_Data = res.data;
        console.log(res);
      });

      // this.MainService.get_testimonials().subscribe((res:any) => {
      //   this.testimonials = res.data;
      //   console.log(res);
      // })
      // this.MainService.faculty().subscribe((res:any) => {
      //   this.faculty_data = res.data;
      //   console.log(res);
      // })
      // this.MainService.blog_articles().subscribe((res:any) => {
      //   this.blog_articles_data = res.data;
      //   console.log(res);
      // })

      
      

      

      

      
      











    }






  


}
