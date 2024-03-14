export default class Layout {
    constructor(child) {
        this.child = child;
    }

    render() {
        return `
        <nav>
        <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#/about">About</a></li>
            <li><a href="#/data-binding">Data Binding</a></li>
        </ul>
        </nav>

        ${this.child}
        `;
    }
}