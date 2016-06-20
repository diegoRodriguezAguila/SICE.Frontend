/**
 * Created by drodriguez on 20/06/2016.
 */
export class ScheduledOutage {
    constructor(public id: number,
                public start_date: Date,
                public end_date: Date,
                public zones: string,
                public industries: string,
                public buildings: string,
                public hospitals: string,
                public radio_antennas: string,
                public farms: string,
                public status: number) { }
}