import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_PROGRESS_CIRCLE_DIRECTIVES } from '@angular2-material/progress-circle';

import {DateFormatPipe} from 'angular2-moment';
import {ScheduledOutage} from "../models/scheduled-outage";
import {ScheduledOutagesService} from "../services/scheduled-outages.service";
import {CapitalizePipe} from '../pipes/capitalize.pipe';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'outage-list.component.html',
    pipes: [DateFormatPipe, CapitalizePipe],
    styles: [`
    .vcenter {
        display: inline-block;
        vertical-align: middle;
        float: none;
    }`],
    directives: [MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES,
        MD_PROGRESS_CIRCLE_DIRECTIVES, MD_BUTTON_DIRECTIVES, MdIcon],
    providers: [MdIconRegistry]
})
export class OutageListComponent implements OnInit {

    public scheduledOutages:ScheduledOutage[];
    public errorMsg:string;

    constructor(private router:Router, private schedService:ScheduledOutagesService) {
    }

    ngOnInit() {
        this.loadScheduledOutages();
    }

    /**
     * Loads the scheduled outages within the service
     */
    public loadScheduledOutages() {
        this.errorMsg = null;
        this.schedService.getScheduledOutages()
            .subscribe(
                schOutages => {
                    this.scheduledOutages = schOutages;
                },
                error => {
                    this.errorMsg = error;
                }
            );
    }

    public btnAddClick() {
        this.router.navigateByUrl('/login');
    }

}
