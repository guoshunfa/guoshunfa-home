import {sidebar} from "vuepress-theme-hope";

export default sidebar({
        "/java/": "structure",

        "/python/": "structure",

        // fallback
        "/": [
            "" /* / */,
            "contact" /* /contact.html */,
            "about" /* /about.html */,
        ],
    }
)