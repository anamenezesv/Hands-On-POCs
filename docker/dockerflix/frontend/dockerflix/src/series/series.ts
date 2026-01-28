import { Component } from "@angular/core";

@Component({
    selector: 'app-series',
    templateUrl: './series.html'
})
export class Series {
    protected readonly seriesList = [
        'Stranger Things',
        'The Crown',
        'Black Mirror',
        'The Witcher',
        'Money Heist'
    ];
}