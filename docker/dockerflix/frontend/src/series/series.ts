import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'series-page',
    imports: [CommonModule],
    templateUrl: './series.html'
})
export class Series implements OnInit {
    public seriesList: string[] = [];

    ngOnInit(): void {
        this.getSeries();
    }
    
    async getSeries(){
        const response = await fetch('http://localhost:4050/series');
        this.seriesList = await response.json();
    }
}