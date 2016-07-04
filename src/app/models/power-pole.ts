export class PowerPole {
    constructor(public id: number,
                public pole_code: string,
                public material: string,
                public condition: string,
                public owner: string,
                public tension_type: string,
                public pole_type: string,
                public latitude: number,
                public longitude: number,
                public status: number) { }
}
