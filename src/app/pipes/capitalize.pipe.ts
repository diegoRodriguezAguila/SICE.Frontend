import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

    transform(value:string, args?:any):string {
        let words = value.split(" ");
        words.forEach((w, i) => {
            if (w.length > 2)
                words[i] = this.transformWord(w);
        });
        return words.join(' ');
    }

    transformWord(value:string):string {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    }

}
