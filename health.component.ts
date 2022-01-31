import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
public health_news : any=[];
  constructor(private health : ProviderService ) { }

  ngOnInit(): void {
    this.health.health().subscribe(data => this.health_news=data.articles);
  }

}
