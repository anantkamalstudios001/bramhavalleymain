import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {


// private baseUrl = 'http://localhost:3000/api/centraladmin';
private baseUrl = '/api/centraladmin';


  constructor(private http: HttpClient) { }

    slider(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/sliders`);
  }

    who_we_are(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/who-we-are`);
  }

    future_programmes(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/future-programmes`);
  }

    placements_fun(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/placements`);
  }

    placement_images(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/placement-images`);
  }

    home_services(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/home-services`);
  }
  
    get_testimonials(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/testimonials`);
  }
 
    faculty(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/faculty`);
  }
 
    blog_articles(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/blog-articles`);
  }
 
    about_us_who_we_are(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/why-we-are`);
  }
 
    get_campus_gallry(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/campus-gallery`);
  }
 
    about_us_placements(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/placements-paragraph`);
  }
 
    get__highlighted_cases(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/highlighted-cases`);
  }
 
  //   home_services(): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/home-services`);
  // }
 
  //   home_services(): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/home-services`);
  // }
 
  //   home_services(): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/home-services`);
  // }
 
  //   home_services(): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/home-services`);
  // }
 
  //   home_services(): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/home-services`);
  // }
 
  //   home_services(): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/home-services`);
  // }
 
  //   home_services(): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/home-services`);
  // }
 
  //   home_services(): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/home-services`);
  // }
 
  //   home_services(): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/home-services`);
  // }
 
  //   home_services(): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/home-services`);
  // }
 
  //   home_services(): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/home-services`);
  // }

  //   contact_us(data:any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/contact-us`, data);
  // }

  //   contact_us(data:any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/contact-us`, data);
  // }

  //   contact_us(data:any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/contact-us`, data);
  // }

  //   contact_us(data:any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/contact-us`, data);
  // }

  //   contact_us(data:any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/contact-us`, data);
  // }

  //   contact_us(data:any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/contact-us`, data);
  // }

  //   contact_us(data:any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/contact-us`, data);
  // }

  //   contact_us(data:any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/contact-us`, data);
  // }

  //   contact_us(data:any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/contact-us`, data);
  // }

  //   contact_us(data:any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/contact-us`, data);
  // }

  //   contact_us(data:any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/contact-us`, data);
  // }

  //   contact_us(data:any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/contact-us`, data);
  // }

  //   contact_us(data:any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/contact-us`, data);
  // }

  //   contact_us(data:any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/contact-us`, data);
  // }

  //   contact_us(data:any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/contact-us`, data);
  // }

  //   contact_us(data:any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/contact-us`, data);
  // }

  //   contact_us(data:any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/contact-us`, data);
  // }

  //   contact_us(data:any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/contact-us`, data);
  // }

  //   contact_us(data:any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/contact-us`, data);
  // }

  //   contact_us(data:any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/contact-us`, data);
  // }





  contact_us(data:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/contact-us`, data);
  }



}
