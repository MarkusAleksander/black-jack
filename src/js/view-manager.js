export class ViewManager {

    constructor() {
        this.views = [];
    }

    registerView(v) {
        this.views.push(v);
    }

    update() {
        this.views.forEach(function (v) {
            v();
        });
    }
}