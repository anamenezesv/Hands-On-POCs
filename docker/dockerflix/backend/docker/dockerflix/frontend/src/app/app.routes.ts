import { Routes } from '@angular/router';
import { Series } from '../series/series';
import { Home } from '../home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'series',
        component: Series
    }
];
