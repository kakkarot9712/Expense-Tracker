import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-backdrop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.css']
})
export class BackdropComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoAbout(){
    this.router.navigate(['about'])
  }
}
