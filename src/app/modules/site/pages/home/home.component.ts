import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';  


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(
        private Meta: Meta
    ){}

    ngOnInit(): void {
        this.Meta.addTags(
            [
                { name: 'description', content: 'Unlock the potential of our powerful software, designed to solve your unique business challenges with ease. Streamline operations, drive growth, and achieve success with our innovative solutions tailored to address your specific needs.' },
                { name: 'keywords', content: 'business, software, software development, business software, pos, pint of sale, crm software' }  
            ]
        ); 
    }
}
