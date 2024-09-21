import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChatWidget, RenderFunction, RenderFunctionArgs } from '@/components/chat-widget';
import './index.css';


type CustomComponentsConfig = {
    customComponents?: {
        khInboxChatScreen?: RenderFunction;
    }
}

type InsertStyle = { css?: string; href?: string };
type Brandmessenger = {
    insertStyle: (style: InsertStyle) => void;
}

declare global {
    interface Window {
        KHOROS_CONFIG: CustomComponentsConfig;
        Brandmessenger: Brandmessenger;
    }
}


function RenderKhInboxChatScreen(renderFunctionArgs: RenderFunctionArgs) {
    window.Brandmessenger.insertStyle({ href: 'custom-components/index.css' });
    const { element, props } = renderFunctionArgs;
    element.classList.add('flex', 'h-full');

    ReactDOM.createRoot(element).render(
        <React.StrictMode>
            <ChatWidget {...props} />
        </React.StrictMode>,
    )
}

const khorosConfig: CustomComponentsConfig = window.KHOROS_CONFIG ?? {}
khorosConfig.customComponents = {
    khInboxChatScreen: RenderKhInboxChatScreen
}

