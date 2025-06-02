import { AfterViewInit, Component, ComponentFactoryResolver, HostListener, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MainService } from '../../main.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
declare var Swiper: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit {
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



    this.swiper = new Swiper('.mySwiper', {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 10
        }
      }
    });




    
  }


  // backendUrl = 'http://localhost:3000/';  
  backendUrl = '/';  

  sliderData:any;
  aboutData:any[]=[];
  future_programmes_Data:any;
  placements_Data:any;
  placement_images_Data:any;
  home_services_Data:any;
  testimonials:any[]= [ ];
  faculty_data:any;
  blog_articles_data:any;
  // home_services_Data:any;
  // home_services_Data:any;




    ngOnInit(): void {

      this.MainService.slider().subscribe((res:any) => {
        this.sliderData = res.data;
        console.log(res);
      })

      
      this.MainService.who_we_are().subscribe((res:any) => {
        this.aboutData = res.data;
        console.log(res);
      })

        this.MainService.future_programmes().subscribe((res:any) => {
        this.future_programmes_Data = res.data;
        console.log(res);
      })

      this.MainService.placements_fun().subscribe((res:any) => {
        this.placements_Data = res.data;
        console.log(res);
      })

      this.MainService.placement_images().subscribe((res:any) => {
        this.placement_images_Data = res.data;
        console.log(res);
      })
      this.MainService.home_services().subscribe((res:any) => {
        this.home_services_Data = res.data;
        console.log(res);
      });
      this.MainService.get_testimonials().subscribe((res:any) => {
        this.testimonials = res.data;
        console.log(res);
      })
      this.MainService.faculty().subscribe((res:any) => {
        this.faculty_data = res.data;
        console.log(res);
      })
      this.MainService.blog_articles().subscribe((res:any) => {
        this.blog_articles_data = res.data;
        console.log(res);
      })

      
      

      

      

      
      











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
