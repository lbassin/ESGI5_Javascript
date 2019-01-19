function type_check_basic(value, type) {
    if (value === null || value === undefined || !type) {
        return false;
    }

    return value.constructor.name.toLowerCase() === type.toLowerCase();
}

Object.prototype.type_checker = function (value, config) {
    if (!(config instanceof Object)) {
        return false;
    }

    if (value === null || value === undefined) {
        return false;
    }

    if (config.type && !type_check_basic(value, config.type)) {
        return false;
    }

    if (config.value && value !== config.value) {
        return false;
    }

    if (config.enum && !(config.enum instanceof Array)) {
        return false;
    }

    if (config.enum && !config.enum.includes(value)) {
        return false;
    }

    return true;
};