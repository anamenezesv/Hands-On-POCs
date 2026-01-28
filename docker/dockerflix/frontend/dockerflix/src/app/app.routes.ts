import { Routes } from '@angular/router';
import { Series } from '../series/series';
import { App } from './app';

export const routes: Routes = [
    {
        path: '',
        component: App
    },
    {
        path: 'series',
        component: Series
    }
];
