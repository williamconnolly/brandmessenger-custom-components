'use client'

import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Bell,
    File,
    MessageSquare,
    FileText,
    Archive,
    Download,
    Search
} from 'lucide-react'
import { Button } from "@/components/ui/button";
import LoadingDots from '@/components/ui/loading-dots';
import { alerts, files, filterChats, InboxChat, Message } from '@/components/data';

const getTimestampForMessage = (interfaceLanguage: string, message: Message | null) => {
    const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric' };
    return message ? new Intl.DateTimeFormat([interfaceLanguage, 'en-US'], options).format(message.timeStamp) : '';
};

export type ChatWidgetProps = {
    interfaceLanguage: string;
    isFetchingInboxChats: boolean;
    inboxChats: InboxChat[];
    onCreateNewChat: () => void;
    onSelectChat: (chatId: string) => void;
    brandStyle: { businessIconUrl?: string };
};

export type RenderFunctionArgs = { element: HTMLDivElement, props: ChatWidgetProps };
export type RenderFunction = (args: RenderFunctionArgs) => void;

export function ChatWidget({
                               interfaceLanguage,
                               isFetchingInboxChats,
                               inboxChats,
                               onCreateNewChat,
                               brandStyle,
                               onSelectChat
                           }: ChatWidgetProps) {
    const [activeTab, setActiveTab] = useState("messages")
    const [searchQuery, setSearchQuery] = useState("");

    const renderMessagesTab = () => {
        if (isFetchingInboxChats) {
            return (
                <div className="flex justify-center items-center h-full p-12 m-12">
                    <LoadingDots size={8} color="#C20000" />
                </div>
            );
        }
        return (
            <>
                {filterChats(inboxChats, searchQuery).map((chat) => (
                    <div
                        key={chat.chatId}
                        className="flex items-center space-x-4 p-4 cursor-pointer hover:bg-gray-100 transition-colors"
                        onClick={() => onSelectChat(chat.chatId)}
                    >
                        <Avatar>
                            <AvatarImage src={brandStyle?.businessIconUrl}
                                         alt={chat.subject} />
                            <AvatarFallback
                                className="bg-[#C20000] text-white">{chat.subject}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">{chat.subject}</p>
                            <p className="text-sm text-gray-500">{chat.message?.messageText}</p>
                        </div>
                        <p className="text-xs text-gray-400">{getTimestampForMessage(interfaceLanguage, chat.message)}</p>
                    </div>
                ))}
            </>
        )
    }

    return (
        <div className="flex flex-col bg-white overflow-hidden w-full">
            <div className="border-b px-4 bg-[#C20000] text-white">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="text-white">
                    <TabsList className="grid mb-3 w-full grid-cols-3 bg-white/20">
                        <TabsTrigger value="files" className="data-[state=active]:bg-white/30 text-white">
                            <File className="w-4 h-4 mr-2 text-white" />
                            <span className="sr-only">Files</span>
                            <span className="text-white" aria-hidden="true">Files</span>
                        </TabsTrigger>
                        <TabsTrigger value="messages" className="data-[state=active]:bg-white/30 text-white">
                            <MessageSquare className="w-4 h-4 mr-2 text-white" />
                            <span className="sr-only text-white">Messages</span>
                            <span className="text-white" aria-hidden="true">Messages</span>
                        </TabsTrigger>
                        <TabsTrigger value="alerts" className="data-[state=active]:bg-white/30 text-white">
                            <Bell className="w-4 h-4 mr-2 text-white" />
                            <span className="sr-only text-white">Alerts</span>
                            <span className="text-white" aria-hidden="true">Alerts</span>
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
                <div className="relative mb-4 text-white/70">
                    <div className="w-full mx-auto">
                        <div className="relative">
                            <Input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pr-10 text-white placeholder-white"
                            />
                            <Button
                                size="icon"
                                variant="ghost"
                                className="absolute right-0 top-0 h-full"
                            >
                                <Search className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollArea className="flex-1">
                <Tabs value={activeTab} className="w-full">
                    <TabsContent value="files" className="m-0 p-4">
                        <div className="space-y-4">
                            {files.map((file) => (
                                <div key={file.id}
                                     className="flex items-center justify-between p-2 bg-gray-100 rounded-lg">
                                    <div className="flex items-center space-x-3">
                                        {file.type === 'pdf' ? (
                                            <FileText className="h-6 w-6 text-[#C20000]" />
                                        ) : (
                                            <Archive className="h-6 w-6 text-[#C20000]" />
                                        )}
                                        <div>
                                            <p className="text-sm font-medium">{file.name}</p>
                                            <p className="text-xs text-gray-500">{file.size}</p>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#C20000]">
                                        <Download className="h-4 w-4" />
                                        <span className="sr-only">Download {file.name}</span>
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="messages" className="m-0">
                        <div className="relative">
                            {renderMessagesTab()}
                        </div>
                    </TabsContent>
                    <TabsContent value="alerts" className="m-0 p-4">
                        <div className="space-y-4">
                            {alerts.map((alert) => {
                                const Icon = alert.icon
                                return (
                                    <div key={alert.id}
                                         className="flex items-start space-x-4 p-3 bg-gray-100 rounded-lg">
                                        <div
                                            className={`p-2 rounded-full ${alert.type === 'fraud' ? 'bg-red-100' : 'bg-blue-100'}`}>
                                            <Icon
                                                className={`h-5 w-5 ${alert.type === 'fraud' ? 'text-red-600' : 'text-blue-600'}`} />
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <p className="text-sm font-medium">{alert.title}</p>
                                            <p className="text-xs text-gray-500">{alert.message}</p>
                                            <p className="text-xs text-gray-400">{alert.time}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </TabsContent>
                </Tabs>
            </ScrollArea>
            <div className="sticky bottom-0 flex justify-center items-center w-full p-4">
                <Button variant="default" size="lg" className="w-full" onClick={() => onCreateNewChat()}>
                    New Chat
                </Button>
            </div>
        </div>
    )
}
