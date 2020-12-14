import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/classes/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-with-dependency',
  templateUrl: './with-dependency.component.html',
  styleUrls: ['./with-dependency.component.css'],
})
export class WithDependencyComponent implements OnInit {
  // data: any[];
  // public data: Observable<Array<User>>;
  data: any[];
  welcome: string;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.welcome = this.dataService.getWelcomeWords();
    this.dataService.getData().subscribe( data => {this.data = data});
  }
}
