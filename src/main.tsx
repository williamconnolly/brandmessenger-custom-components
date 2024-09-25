import React, { HTMLAttributes, LinkHTMLAttributes, ScriptHTMLAttributes } from 'react'
import ReactDOM from 'react-dom/client'
import { ChatWidget, RenderFunction, RenderFunctionArgs } from '@/components/chat-widget';
import { INBOX_CHATS } from '@/components/data';
import './index.css';

type StyleDefinition = LinkHTMLAttributes<HTMLLinkElement> | string;
type ScriptDefinition = ScriptHTMLAttributes<HTMLScriptElement>;
type ElementDefinition = HTMLAttributes<HTMLDivElement> & {
    tagName: string;
    class?: string;
}

type CustomComponentsConfig = {
    customComponents?: {
        khInboxChatScreen?: {
            render: RenderFunction;
            element?: ElementDefinition;
            styles?: StyleDefinition[];
            scripts?: ScriptDefinition[];
        };
    }
}

declare global {
    interface Window {
        KHOROS_CONFIG: CustomComponentsConfig;
    }
}

function RenderKhInboxChatScreen(renderFunctionArgs: RenderFunctionArgs) {
    const { element, props } = renderFunctionArgs;

    ReactDOM.createRoot(element).render(
        <React.StrictMode>
            <ChatWidget {...props} />
        </React.StrictMode>,
    )
}

const rootElement = document.getElementById('root');
if (rootElement) {
    // for local testing of just this project
    const props = {
        interfaceLanguage: 'en-US',
        isFetchingInboxChats: false,
        inboxChats: INBOX_CHATS,
        onCreateNewChat: () => null,
        onSelectChat: (chatId: string) => console.log(chatId),
        brandStyle: {}
    };
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <ChatWidget {...props} />
        </React.StrictMode>,
    )
} else {
    // refer to the 'main-in-parent.js' file for an example of how to define the custom component
    // the code in this file executes within the widget iframe and updates the custom component definition
    // with the actual render() function to be used.

    window.top.KHOROS_CONFIG.customComponents.khInboxChatScreen.render = RenderKhInboxChatScreen;
}


