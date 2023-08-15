import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ApiService, IPosts } from '../../services/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public posts: IPosts[]= [];
  constructor(
    private Meta: Meta,
    private API: ApiService,
    private Title: Title
  ){}
  ngOnInit(): void {
    this.Title.setTitle('About - DL Soft');
    this.Meta.addTag({name: 'title', content: 'DL Soft is solving your business problems'});
    this.API.getPost()
    .subscribe({
      next: (data) => {
        this.posts = data;
      }
    });
  }
}
