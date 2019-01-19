Object.prototype.interpolate = function (data) {
    let string = this;
    let myRegexp = /{{\s*(?<name>[^\s]+)\s*}}/gm;
    let matches = this.match(myRegexp);

    if (!matches) {
        return string;
    }

    for (let match of matches) {
        let clean = match.replace("{{", "").replace("}}", "").trim();
        if (clean in data) {
            string = string.replace(match, data[clean]);
        } else {
            throw new Error(`Parameter ${clean} does not exists`);
        }
    }

    return string;
};
