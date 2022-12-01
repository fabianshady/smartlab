export class Lab {
    constructor(id, name, available, used_by) {
        this.id = id;
        this.name = name;
        this.available = available;
        this.used_by = used_by;

        if (typeof Lab.instance === 'object') {
            return Lab.instance;
        }

        Lab.instance = this;
        return this;
    }
}

export class Proj {
    constructor(id, brand, model, available, used_by) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.available = available;
        this.used_by = used_by;

        if (typeof Proj.instance === 'object') {
            return Proj.instance;
        }

        Proj.instance = this;
        return this;
    }
}