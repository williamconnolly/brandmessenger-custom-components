// This is an example of the code that goes in the main page. The rest of the project is intended to be
// dynamically loaded into the iframe of thw widget via the scripts[] definitions below

window.KHOROS_CONFIG.customComponents = {
    khInboxChatScreen: {
        // render: () => {}, // either a render function or a scripts[] entry is required
        // in this example, the index.js script updates the khInboxChatScreen definition with a render function

        element: {
            tagName: 'div',
            className: 'flex h-full',
            // any other HTMLElement attributes that are set on the container element
            // your render function will be responsible for setting the innerHTML of this element, rather than replace it,
            // which is why these options are provided for customizing the container.
        },
        styles: [
            '.khInboxChatWindowHeader { color: white }', // css text instead of a file
            {
                href: 'custom-components/index.css',
                rel: 'stylesheet'
                // any other attributes you need on the actual <link rel="stylesheet"/> tag that goes in the iframe <head>
            }
        ],
        scripts: [
            {
                src: 'custom-components/index.js',
                type: 'module',
                // any other attributes you need on the actual <script> tag that goes in the iframe <head>
            }
        ]
    }
}
