import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CardComponent } from './card/card.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'about', component: AboutComponent, title: 'About'},
    {path: 'contact', component: ContactComponent, title: 'Contact',children:[
        {path: 'card', component: CardComponent, title: 'Card'}
    ]},
    {path:'portfolio', component: PortfolioComponent, title: 'Portfolio'},

    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];
