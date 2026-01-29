import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'series-page',
    imports: [CommonModule],
    templateUrl: './series.html'
})
export class Series {
    public readonly seriesList = [
        'Stranger Things',
        'The Crown',
        'Black Mirror',
        'The Witcher',
        'Money Heist'
    ];
}