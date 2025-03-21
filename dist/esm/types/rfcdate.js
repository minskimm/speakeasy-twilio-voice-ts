/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
const dateRE = /^\d{4}-\d{2}-\d{2}$/;
export class RFCDate {
    /**
     * Creates a new RFCDate instance using today's date.
     */
    static today() {
        return new RFCDate(new Date());
    }
    /**
     * Creates a new RFCDate instance using the provided input.
     * If a string is used then in must be in the format YYYY-MM-DD.
     *
     * @param date A Date object or a date string in YYYY-MM-DD format
     * @example
     * new RFCDate("2022-01-01")
     * @example
     * new RFCDate(new Date())
     */
    constructor(date) {
        if (typeof date === "string" && !dateRE.test(date)) {
            throw new RangeError("RFCDate: date strings must be in the format YYYY-MM-DD: " + date);
        }
        const value = new Date(date);
        if (isNaN(+value)) {
            throw new RangeError("RFCDate: invalid date provided: " + date);
        }
        this.serialized = value.toISOString().slice(0, "YYYY-MM-DD".length);
        if (!dateRE.test(this.serialized)) {
            throw new TypeError(`RFCDate: failed to build valid date with given value: ${date} serialized to ${this.serialized}`);
        }
    }
    toJSON() {
        return this.toString();
    }
    toString() {
        return this.serialized;
    }
}
//# sourceMappingURL=rfcdate.js.map