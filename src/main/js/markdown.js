import React from "react";
let hljs = require('highlight.js'); // https://highlightjs.org/
let emoji = require('markdown-it-emoji');
let md = require('markdown-it')({
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return '<pre class="hljs"><code>' +
                    hljs.highlight(lang, str, true).value +
                    '</code></pre>';
            } catch (__) {
            }
        }

        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    }
}).use(emoji);

class Markdown extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        let text = md.render(this.props.source)
            .replace('<table>', '<table class="table table-bordered">');
        return (
            <div dangerouslySetInnerHTML={{__html: text}}>
            </div>
        )
    }

}

export default Markdown