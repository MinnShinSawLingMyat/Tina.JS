import Layout from "./js/layout.js";
import { routers } from "./js/routes/router.js";

const app = new Tina(Layout);

app.route(routers);

app.start();