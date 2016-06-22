import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_PROGRESS_CIRCLE_DIRECTIVES } from '@angular2-material/progress-circle';
import {DateFormatPipe} from 'angular2-moment';
import {ScheduledOutage} from "../models/scheduled-outage";
import {ScheduledOutagesService} from "../services/scheduled-outages.service";

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.component.html',
    pipes: [DateFormatPipe],
    styles: [`
    .vcenter {
        display: inline-block;
        vertical-align: middle;
        float: none;
    }`],
    directives: [MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES, MD_PROGRESS_CIRCLE_DIRECTIVES]
})
export class HomeComponent implements OnInit {

    public scheduledOutages: ScheduledOutage[];

    constructor(private router: Router, private schedService: ScheduledOutagesService) {}

    ngOnInit() {
        if (!localStorage.getItem('jwt')) {
            this.router.navigateByUrl('/login');
        }
        else{
            this.schedService.getScheduledOutages()
                .subscribe(
                    schOutages => {
                        this.scheduledOutages = schOutages;
                    },
                    error => {
                        alert(error);
                        console.log(error);
                    }
                );
        }
    }

}
