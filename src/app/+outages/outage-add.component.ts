import { Component, OnInit } from '@angular/core';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_PROGRESS_CIRCLE_DIRECTIVES } from '@angular2-material/progress-circle';
import {NKDatetime} from 'ng2-datetime/ng2-datetime';
import {ElementRef} from "@angular/core/src/linker/element_ref";

@Component({
    moduleId: module.id,
    selector: 'app-outage-add',
    templateUrl: 'outage-add.component.html',
    directives: [MD_INPUT_DIRECTIVES, MD_PROGRESS_CIRCLE_DIRECTIVES,
        MD_BUTTON_DIRECTIVES, MdIcon, NKDatetime],
})
export class OutageAddComponent implements OnInit {

    public startDate:Date = new Date();

    constructor() {
    }

    ngOnInit() {

    }

}
