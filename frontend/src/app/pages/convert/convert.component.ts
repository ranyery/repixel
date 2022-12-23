import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss'],
})
export class ConvertComponent implements OnInit {
  public formatBase!: string;
  public formatToConvert!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const data = this.route.snapshot.data;
    if (Object.keys(data).length === 0) return;

    const { de, para } = data;

    this.formatBase = de;
    this.formatToConvert = para;
  }
}
