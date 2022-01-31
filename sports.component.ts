import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
public sport_news : any =[];
  constructor(public sport:ProviderService) { }

  ngOnInit(): void {
    this.sport.sports().subscribe(data => this.sport_news=data.articles);
  }

}
