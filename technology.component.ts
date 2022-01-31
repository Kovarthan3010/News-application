import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
public technology_news : any=[];
  constructor(private technology : ProviderService) { }

  ngOnInit(): void {
this.technology.technology().subscribe(data => this.technology_news=data.articles);
  }

}
