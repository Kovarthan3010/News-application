import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-real-busi',
  templateUrl: './real-busi.component.html',
  styleUrls: ['./real-busi.component.css']
})
export class RealBusiComponent implements OnInit {

  constructor(public busigetter : ProviderService) { }
public real_businews : any=[];
  ngOnInit(): void {
    this.busigetter.real_busi().subscribe(data => this.real_businews=data.articles);
  }

}
