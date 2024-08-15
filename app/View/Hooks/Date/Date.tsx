// Tools
import moment from "moment";

class Date {
    date;

    constructor(date: string) {
        this.date = moment(date);
    }

    toSimpleFormat ({ time = true }) {
        return this.date.format(`DD/MM/YYYY${time ? ' HH:mm:ss' : ''}`);
    };

    toTime ({}) {
        return this.date.format('HH:mm:ss');
    };
}

export default Date;