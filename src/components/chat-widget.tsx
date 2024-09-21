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
    Search,
    ArrowLeft,
    Send,
    FileText,
    Archive,
    Download,
    AlertTriangle,
    CreditCard
} from 'lucide-react'
import { Button } from "@/components/ui/button"

type Conversation = null | {
    id: number;
    name: string;
    avatar: string;
    lastMessage: string;
    time: string;
};

// type File = null | {
//     id: number;
//     name: string;
//     type: string;
//     size: string;
// };
//
// type Notification = null | {
//     id: number;
//     type: string;
//     title: string;
//     message: string;
//     time: string;
//     icon: React.ReactElement;
// };

export type Message = {
    /**
     * An unique identifier for the message
     */
    key: string;
    /**
     * Message key for api operations
     */
    messageKey?: string;
    /**
     * The text content of the message
     */
    messageText: string;
    /**
     *  Is this message sent by the logged in user?
     */
    isReply: boolean;
    /**
     * The sent timestamp of the message
     */
    timeStamp: Date;
    /**
     * The userId of the sender
     */
    fromUserId: string;
    /**
     * The delivered timestamp of the message
     */
    deliveredAtTime?: number;
    /**
     * The read timestamp of the message
     */
    readAtTime?: number;
    /**
     * A key value pair for sending specific metadata for a message to handle custom use-cases.
     */
    metadata?: { [key: string]: string };
    /**
     * Is the message read?
     */
    read?: boolean;
}

export type InboxChat = {
    /** The unique identifier for the chat {user.userId} for 1on1 chat and {group.clientGroupId} for inbox chat  */
    chatId: string;
    /** The enum value defining the type of chat */
    chatType: 'user' | 'group';
    /** Most recent message */
    message: Message | null;
    /** Subject of the chat, taken from the {group.name} */
    subject?: string;
};

export type ChatWidgetProps = {
    isFetchingInboxChats: boolean;
    inboxChats: Array<InboxChat>;
    onCreateNewChat: () => void;
    onSelectChat: (chatId: string) => void;
};

export type RenderFunctionArgs = { element: HTMLDivElement, props: ChatWidgetProps };
export type RenderFunction = (args: RenderFunctionArgs) => void;

export function ChatWidget({ isFetchingInboxChats, inboxChats, onCreateNewChat, onSelectChat }: ChatWidgetProps) {
    console.log('3195 rendering ChatWidget with ', isFetchingInboxChats, inboxChats);
    const [activeTab, setActiveTab] = useState("messages")
    const [activeConversation, setActiveConversation] = useState<Conversation>(null)

    const conversations: Conversation[] = [
        {
            id: 1,
            name: "Alice Johnson",
            avatar: "https://v0.dev/placeholder.svg?height=32&width=32",
            lastMessage: "Hey, how's it going?",
            time: "2m ago"
        },
        {
            id: 2,
            name: "Bob Smith",
            avatar: "https://v0.dev/placeholder.svg?height=32&width=32",
            lastMessage: "Can you send me the files?",
            time: "1h ago"
        },
        {
            id: 3,
            name: "Carol Williams",
            avatar: "https://v0.dev/placeholder.svg?height=32&width=32",
            lastMessage: "Meeting at 3 PM",
            time: "3h ago"
        },
        {
            id: 4,
            name: "David Brown",
            avatar: "https://v0.dev/placeholder.svg?height=32&width=32",
            lastMessage: "Thanks for your help!",
            time: "1d ago"
        },
        {
            id: 5,
            name: "Eva Davis",
            avatar: "https://v0.dev/placeholder.svg?height=32&width=32",
            lastMessage: "Let's catch up soon",
            time: "2d ago"
        },
        {
            id: 6,
            name: "Alex Clark",
            avatar: "https://v0.dev/placeholder.svg?height=32&width=32",
            lastMessage: "I appreciate the help!",
            time: "3d ago"
        },
        {
            id: 7,
            name: "Hayden Allen",
            avatar: "https://v0.dev/placeholder.svg?height=32&width=32",
            lastMessage: "Much obliged",
            time: "4d ago"
        },
    ]

    const files = [
        { id: 1, name: "Project_Report.pdf", type: "pdf", size: "2.5 MB" },
        { id: 2, name: "Design_Assets.zip", type: "zip", size: "15.2 MB" },
        { id: 3, name: "Meeting_Notes.pdf", type: "pdf", size: "1.1 MB" },
        { id: 4, name: "Source_Code.zip", type: "zip", size: "8.7 MB" },
        { id: 5, name: "Presentation.pdf", type: "pdf", size: "5.3 MB" },
    ]

    const notifications = [
        {
            id: 1,
            type: "fraud",
            title: "Suspicious Activity Detected",
            message: "We've noticed an unusual login attempt on your account.",
            time: "10 minutes ago",
            icon: AlertTriangle
        },
        {
            id: 2,
            type: "billing",
            title: "Payment Due Reminder",
            message: "Your credit card payment is due in 3 days.",
            time: "2 hours ago",
            icon: CreditCard
        },
        {
            id: 3,
            type: "fraud",
            title: "New Device Login",
            message: "A new device has been used to access your account.",
            time: "1 day ago",
            icon: AlertTriangle
        },
        {
            id: 4,
            type: "billing",
            title: "Automatic Payment Processed",
            message: "Your monthly bill of $50.00 has been paid.",
            time: "2 days ago",
            icon: CreditCard
        },
        {
            id: 5,
            type: "fraud",
            title: "Password Change Alert",
            message: "Your account password was recently changed.",
            time: "3 days ago",
            icon: AlertTriangle
        },
    ]

    return (
        <div className="border rounded-lg shadow-lg flex flex-col bg-white overflow-hidden">
            <div className="p-4 border-b bg-[#C20000] text-white">
                <div className="relative mb-4">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/70" />
                    <Input placeholder="Search"
                           className="pl-8 bg-white/20 border-white/30 text-white placeholder-white/70" />
                </div>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="text-white">
                    <TabsList className="grid w-full grid-cols-3 bg-white/20">
                        <TabsTrigger value="files" className="data-[state=active]:bg-white/30 text-white">
                            <File className="w-4 h-4 mr-2" />
                            <span className="sr-only">Files</span>
                            <span aria-hidden="true">Files</span>
                        </TabsTrigger>
                        <TabsTrigger value="messages" className="data-[state=active]:bg-white/30 text-white">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            <span className="sr-only">Messages</span>
                            <span aria-hidden="true">Messages</span>
                        </TabsTrigger>
                        <TabsTrigger value="notifications" className="data-[state=active]:bg-white/30 text-white">
                            <Bell className="w-4 h-4 mr-2" />
                            <span className="sr-only">Notifications</span>
                            <span aria-hidden="true">Notifications</span>
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
            <ScrollArea className="flex-1">
                <Tabs value={activeTab} className="w-full">
                    <TabsContent value="files" className="m-0 p-4">
                        <div className="space-y-4">
                            {files.map((file) => (
                                <div key={file.id}
                                     className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
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
                            <div
                                className={`transition-transform duration-300 transform ${activeConversation ? '-translate-x-full' : 'translate-x-0'}`}>
                                {conversations.map((conversation) => (
                                    <div
                                        key={conversation?.id}
                                        className="flex items-center space-x-4 p-4 cursor-pointer hover:bg-gray-100 transition-colors"
                                        onClick={() => setActiveConversation(conversation)}
                                    >
                                        <Avatar>
                                            <AvatarImage src={conversation?.avatar} alt={conversation?.name} />
                                            <AvatarFallback
                                                className="bg-[#C20000] text-white">{conversation?.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1 space-y-1">
                                            <p className="text-sm font-medium leading-none">{conversation?.name}</p>
                                            <p className="text-sm text-gray-500">{conversation?.lastMessage}</p>
                                        </div>
                                        <p className="text-xs text-gray-400">{conversation?.time}</p>
                                    </div>
                                ))}
                            </div>
                            <div
                                className={`absolute inset-0 bg-white transition-transform duration-300 transform ${
                                    activeConversation ? 'translate-x-0' : 'translate-x-full'
                                }`}
                            >
                                {activeConversation && (
                                    <div className="flex flex-col h-full">
                                        <div className="p-4 bg-[#C20000] text-white flex items-center">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => setActiveConversation(null)}
                                                className="mr-2 text-white hover:text-white/70"
                                            >
                                                <ArrowLeft className="h-6 w-6" />
                                            </Button>
                                            <Avatar className="h-8 w-8 mr-2">
                                                <AvatarImage src={activeConversation.avatar}
                                                             alt={activeConversation.name} />
                                                <AvatarFallback className="bg-white text-[#C20000]">
                                                    {activeConversation.name.split(' ').map(n => n[0]).join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                            <span className="font-semibold">{activeConversation.name}</span>
                                        </div>
                                        <ScrollArea className="flex-1 p-4">
                                            <div className="space-y-4">
                                                <div className="bg-gray-100 p-2 rounded-lg max-w-[80%]">
                                                    <p className="text-sm">Hi there! How can I help you today?</p>
                                                </div>
                                                <div
                                                    className="bg-[#C20000] text-white p-2 rounded-lg max-w-[80%] ml-auto">
                                                    <p className="text-sm">Hey! I had a question about the project.</p>
                                                </div>
                                            </div>
                                        </ScrollArea>
                                        <div className="p-4 border-t">
                                            <div className="flex items-center space-x-2">
                                                <Input placeholder="Type a message..." className="flex-1" />
                                                <Button size="icon">
                                                    <Send className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="notifications" className="m-0 p-4">
                        <div className="space-y-4">
                            {notifications.map((notification) => {
                                const Icon = notification.icon
                                return (
                                    <div key={notification.id}
                                         className="flex items-start space-x-4 p-3 bg-gray-50 rounded-lg">
                                        <div
                                            className={`p-2 rounded-full ${notification.type === 'fraud' ? 'bg-red-100' : 'bg-blue-100'}`}>
                                            <Icon
                                                className={`h-5 w-5 ${notification.type === 'fraud' ? 'text-red-600' : 'text-blue-600'}`} />
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <p className="text-sm font-medium">{notification.title}</p>
                                            <p className="text-xs text-gray-500">{notification.message}</p>
                                            <p className="text-xs text-gray-400">{notification.time}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </TabsContent>
                </Tabs>
            </ScrollArea>
        </div>
    )
}
