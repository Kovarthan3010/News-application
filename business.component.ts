import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  public business_news : any =[];
  constructor(private business_info : ProviderService) { }

  ngOnInit(): void {
    this.business_info.business().subscribe(data => this.business_news=data.articles);
  }

}
