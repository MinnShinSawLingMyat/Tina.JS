export default class Link {
    constructor(label,path) {
        this.label = label;
        this.path  = path;
    }

    render() {
        return`
            <a href="#${this.path}">${this.label}</a>
        `;
    }
}