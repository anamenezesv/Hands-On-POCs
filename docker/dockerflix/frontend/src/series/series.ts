import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'series-page',
    imports: [CommonModule],
    templateUrl: './series.html'
})
export class Series implements OnInit {
    public seriesList: string[] = [];

    constructor(private cdr: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.getSeries();
    }
    
    async getSeries(){
        this.seriesList = await fetch('http://localhost:4050/series').then(response => response.json());
        this.cdr.detectChanges();
    }
}