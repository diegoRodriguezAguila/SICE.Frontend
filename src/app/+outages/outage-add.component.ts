import { Component, OnInit , ViewChildren , QueryList, Inject} from '@angular/core';
import {Control, CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_PROGRESS_CIRCLE_DIRECTIVES } from '@angular2-material/progress-circle';
import {NKDatetime} from 'ng2-datetime/ng2-datetime';
import { TYPEAHEAD_DIRECTIVES } from 'ng2-bootstrap';
import {PowerPole} from "../models/power-pole";

import {Observable} from "rxjs/Observable";
import '../shared/rxjs-operators';
import {PowerPolesService} from "../services/power-poles.service";

@Component({
    moduleId: module.id,
    selector: 'app-outage-add',
    templateUrl: 'outage-add.component.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_PROGRESS_CIRCLE_DIRECTIVES,
        MD_BUTTON_DIRECTIVES, MdIcon, NKDatetime, MD_LIST_DIRECTIVES,
        TYPEAHEAD_DIRECTIVES, NgClass],
})
export class OutageAddComponent implements OnInit {

    public startDatepickerOptions:any = {
        icon: 'glyphicon glyphicon-calendar',
        autoclose: true, language: 'es', format: 'dd/mm/yyyy'
    };
    public startDate:Date;
    public endDatepickerOptions:any = {
        icon: 'glyphicon glyphicon-calendar',
        autoclose: true, language: 'es', format: 'dd/mm/yyyy', startDate: new Date()
    };
    public endDate:Date;

    public zones:string;
    public industries:string;
    public buildings:string;
    public hospitals:string;
    public radioAntennas:string;
    public farms:string;
    public selectedPowerPoles:PowerPole[];
    public powerPoles:Observable<Array<any>>;
    term = new Control();
    public selectedPowerPole:PowerPole;
    public powerPoleSearch:string;

    public arePowerPoles:boolean;



    constructor(private powerPolesService:PowerPolesService) {
        //noinspection TypeScriptUnresolvedFunction
        this.powerPoles = this.term.valueChanges
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => this.powerPolesService.getPowerPoles(term))
            .map(poles => {
                this.arePowerPoles = poles.length > 0;
                this.selectedPowerPole = null;
                return poles;
            });
    }


    public getContext():any {
        return this;
    }

    ngOnInit() {
        (<any>$).material.init();
        this.zones = "";
        this.industries = "";
        this.buildings = "";
        this.hospitals = "";
        this.radioAntennas = "";
        this.farms = "";
    }

    public startDateChanged(date:Date) {
        this.endDatepickerOptions.startDate = date;
    }

    public selectPowerPole(powerPole:any){
        this.selectedPowerPole = powerPole;
        this.powerPoleSearch = powerPole.pole_code;
    }

}
