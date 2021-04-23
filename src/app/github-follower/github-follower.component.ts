import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-follower',
  templateUrl: './github-follower.component.html',
  styleUrls: ['./github-follower.component.css']
})
export class GithubFollowerComponent implements OnInit {
  followers = [
    {
      id: '012354444',
      images:'https://picsum.photos/100/100',
      login:'MediaHeading1',
      desc:'lorem lorem lorem'
    },
    {
      id: '111012354444',
      images:'https://picsum.photos/100/100',
      login:'MediaHeading2',
      desc:'lorem lorem lorem'
    },
    {
      id: '2222012354444',
      images:'https://picsum.photos/100/100',
      login:'MediaHeading3',
      desc:'lorem lorem lorem'
    }
  ];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
