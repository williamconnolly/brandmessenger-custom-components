import { AlertTriangle, CreditCard } from 'lucide-react';

export const files = [
    { id: 1, name: "Project_Report.pdf", type: "pdf", size: "2.5 MB" },
    { id: 2, name: "Design_Assets.zip", type: "zip", size: "15.2 MB" },
    { id: 3, name: "Meeting_Notes.pdf", type: "pdf", size: "1.1 MB" },
    { id: 4, name: "Source_Code.zip", type: "zip", size: "8.7 MB" },
    { id: 5, name: "Presentation.pdf", type: "pdf", size: "5.3 MB" },
]

export const alerts = [
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

export type Message = {
    key: string;
    messageKey?: string;
    messageText: string;
    status?: string;
    contentType?: number;
    isReply: boolean;
    timeStamp: Date;
    fromUserId: string;
    deliveredAtTime?: number;
    readAtTime?: number;
    metadata?: { [key: string]: string };
    read?: boolean;
}

export type InboxChat = {
    chatId: string;
    chatType: 'user' | 'group';
    message: Message | null;
    subject?: string;
};

export const filterChats = (chats: InboxChat[], filter: string): InboxChat[] => {
    return (chats ?? []).filter(chat => {
        const searchString = [chat?.subject, chat?.message?.messageText].join(" ");
        return searchString.toLowerCase().includes(filter.toLowerCase())
    });
}

export const INBOX_CHATS: InboxChat[] = [
    {
        "chatId": "ae094551-ae73-41b1-88b2-6d00b0a8581a",
        "chatType": "group",
        "message": {
            "key": "5-38853541-1011940973890168",
            "messageKey": "5-38853541-1011940973890168",
            "messageText": "asdfasdf",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-20T19:48:50.189Z"),
            "status": "delivered",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false,
            "deliveredAtTime": 1726861731008
        },
        "subject": "General Started At 2:48 PM"
    },
    {
        "chatId": "09aaa2f9-5036-493a-ba5a-653a5fa873c3",
        "chatType": "group",
        "message": {
            "key": "5-38853487-115698747401380",
            "messageKey": "5-38853487-115698747401380",
            "messageText": "hello there general kenobi",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-20T15:42:56.142Z"),
            "status": "delivered",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false,
            "deliveredAtTime": 1726846977008
        },
        "subject": "General Started At 10:42 AM"
    },
    {
        "chatId": "2c0e57b6-6377-4510-bd99-e35990072276",
        "chatType": "group",
        "message": {
            "key": "5-38852332-578439523194440",
            "messageKey": "5-38852332-578439523194440",
            "messageText": "yet another general chat!!!",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-18T18:45:43.865Z"),
            "status": "delivered",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false,
            "deliveredAtTime": 1726685144008
        },
        "subject": "General Started At 1:45 PM"
    },
    {
        "chatId": "ad36cf56-26db-41bb-96a7-3786e78c6699",
        "chatType": "group",
        "message": {
            "key": "5-38852331-262456117145440",
            "messageKey": "5-38852331-262456117145440",
            "messageText": "asdfasdf",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-18T18:43:01.221Z"),
            "status": "delivered",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false,
            "deliveredAtTime": 1726684982012
        },
        "subject": "General Started At 1:42 PM"
    },
    {
        "chatId": "65a905a8-1293-434d-9360-91312f902a6b",
        "chatType": "group",
        "message": {
            "key": "5-38851776-528343497981000",
            "messageKey": "5-38851776-528343497981000",
            "messageText": "wat",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-17T22:38:58.501Z"),
            "status": "delivered",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false,
            "deliveredAtTime": 1726612739008
        },
        "subject": "General Started At 5:38 PM"
    },
    {
        "chatId": "e6d26c74-e25e-446e-b006-00e0716de2e7",
        "chatType": "group",
        "message": {
            "key": "5-38851716-1180994405005512",
            "messageKey": "5-38851716-1180994405005512",
            "messageText": "qwart",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-17T19:06:47.319Z"),
            "status": "delivered",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false,
            "deliveredAtTime": 1726600008007
        },
        "subject": "General Started At 2:06 PM"
    },
    {
        "chatId": "9904e437-366d-408b-9d8b-d9cda415ef3e",
        "chatType": "group",
        "message": {
            "key": "5-38851713-1426171565341866",
            "messageKey": "5-38851713-1426171565341866",
            "messageText": "created",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-17T19:05:58.042Z"),
            "status": "delivered",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false,
            "deliveredAtTime": 1726599959021
        },
        "subject": "General Started At 2:05 PM"
    },
    {
        "chatId": "ce4f7bd3-53e4-44b0-b3eb-66d86c54c5a9",
        "chatType": "group",
        "message": {
            "key": "5-38851709-1184447407480960",
            "messageKey": "5-38851709-1184447407480960",
            "messageText": "new created",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-17T19:01:59.361Z"),
            "status": "delivered",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false,
            "deliveredAtTime": 1726599720008
        },
        "subject": "General Started At 2:01 PM"
    },
    {
        "chatId": "545b5d6d-fa26-4183-9f15-d2810aaee066",
        "chatType": "group",
        "message": {
            "key": "5-38851707-210645159073880",
            "messageKey": "5-38851707-210645159073880",
            "messageText": "new thing at 201",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-17T19:01:04.542Z"),
            "status": "delivered",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false,
            "deliveredAtTime": 1726599665007
        },
        "subject": "General 2:00 PM"
    },
    {
        "chatId": "dab0dc1e-3bc9-4c92-91fb-6c564ee9fc7c",
        "chatType": "group",
        "message": {
            "key": "5-38851705-1719693040169316",
            "messageKey": "5-38851705-1719693040169316",
            "messageText": "quirtle",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-17T18:57:17.922Z"),
            "status": "delivered",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false,
            "deliveredAtTime": 1726599439007
        },
        "subject": "General #524"
    },
    {
        "chatId": "5b643b7d-05b8-4584-8f1f-76678c2ff71d",
        "chatType": "group",
        "message": {
            "key": "5-38851704-1106749969718161",
            "messageKey": "5-38851704-1106749969718161",
            "messageText": "asdfasdf",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-17T18:50:16.722Z"),
            "status": "delivered",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false,
            "deliveredAtTime": 1726599017008
        },
        "subject": "General #217"
    },
    {
        "chatId": "9f20d4b2-9a02-4df7-a9ea-46fb339b9733",
        "chatType": "group",
        "message": {
            "key": "5-38851703-592223419078263",
            "messageKey": "5-38851703-592223419078263",
            "messageText": "ibs nib",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-17T18:48:09.443Z"),
            "status": "delivered",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false,
            "deliveredAtTime": 1726598890008
        },
        "subject": "General #585"
    },
    {
        "chatId": "4109d504-36e0-4912-ac49-00aa5184828e",
        "chatType": "group",
        "message": {
            "key": "5-38851702-479994469965906",
            "messageKey": "5-38851702-479994469965906",
            "messageText": "queryfn cal",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-17T18:46:52.828Z"),
            "status": "delivered",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false,
            "deliveredAtTime": 1726598813007
        },
        "subject": "General #579"
    },
    {
        "chatId": "be094957-6394-497e-9ed3-29153eae74ba",
        "chatType": "group",
        "message": {
            "key": "5-38851701-1400271288350236",
            "messageKey": "5-38851701-1400271288350236",
            "messageText": "sendy sends",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-17T18:39:42.678Z"),
            "status": "delivered",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false,
            "deliveredAtTime": 1726598383010
        },
        "subject": "General #101"
    },
    {
        "chatId": "a309ea23-0fde-476c-b120-83d6ce9cdd60",
        "chatType": "group",
        "message": {
            "key": "5-38851698-1633361748191756",
            "messageKey": "5-38851698-1633361748191756",
            "messageText": "qwerqwer",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-17T18:34:02.486Z"),
            "status": "delivered",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false,
            "deliveredAtTime": 1726598043007
        },
        "subject": "General #823"
    },
    {
        "chatId": "afe8a56a-ebd8-45a6-9a4f-caae980008e8",
        "chatType": "group",
        "message": {
            "key": "5-38851683-1604007127975849",
            "messageKey": "5-38851683-1604007127975849",
            "messageText": "new general 1250",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-17T17:50:01.482Z"),
            "status": "delivered",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false,
            "deliveredAtTime": 1726595402008
        },
        "subject": "General #560"
    },
    {
        "chatId": "c32c4238-2d61-4ccc-ba3d-026b3e5d33ab",
        "chatType": "group",
        "message": {
            "key": "5-38851682-1288040164050820",
            "messageKey": "5-38851682-1288040164050820",
            "messageText": "new general 1249",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-17T17:49:54.171Z"),
            "status": "delivered",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false,
            "deliveredAtTime": 1726595395008
        },
        "subject": "General #628"
    },
    {
        "chatId": "c5a8937a-ccf6-4d63-acd7-e7b89117cbb7",
        "chatType": "group",
        "message": {
            "key": "5-38850471-403947822921318",
            "messageKey": "5-38850471-403947822921318",
            "messageText": "qwer",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-14T00:12:27.528Z"),
            "status": "sent",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false
        },
        "subject": "General #383"
    },
    {
        "chatId": "539e089c-2c73-4509-8dab-03693f2931ca",
        "chatType": "group",
        "message": {
            "key": "5-38850470-391863886667684",
            "messageKey": "5-38850470-391863886667684",
            "messageText": "wyh",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-14T00:10:28.494Z"),
            "status": "sent",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false
        },
        "subject": "General #654"
    },
    {
        "chatId": "02c450d1-99eb-4595-9d7b-7345d06bec73",
        "chatType": "group",
        "message": {
            "key": "5-38850469-1085825426150400",
            "messageKey": "5-38850469-1085825426150400",
            "messageText": "mesg",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-14T00:08:57.601Z"),
            "status": "sent",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false
        },
        "subject": "General #371"
    },
    {
        "chatId": "43d7ef35-a56c-4672-bad1-f611f748cd08",
        "chatType": "group",
        "message": {
            "key": "5-38850468-1543287596949246",
            "messageKey": "5-38850468-1543287596949246",
            "messageText": "whoba",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-14T00:07:59.810Z"),
            "status": "sent",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false
        },
        "subject": "General #587"
    },
    {
        "chatId": "851a6647-74bb-42ba-b975-c6ee69666eca",
        "chatType": "group",
        "message": {
            "key": "5-38850463-1242916111342800",
            "messageKey": "5-38850463-1242916111342800",
            "messageText": "whozamawatsit",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-14T00:06:16.867Z"),
            "status": "sent",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false
        },
        "subject": "General #7"
    },
    {
        "chatId": "fbfafbed-dd9b-4d9e-92fd-dfd8b95cd49d",
        "chatType": "group",
        "message": {
            "key": "5-38849933-505765811677591",
            "messageKey": "5-38849933-505765811677591",
            "messageText": "wat",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-12T17:46:19.789Z"),
            "status": "sent",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false
        },
        "subject": "General #419"
    },
    {
        "chatId": "317d4aed-f882-4f34-a6a2-8eeaedd3a50b",
        "chatType": "group",
        "message": {
            "key": "5-38849393-1006314898273278",
            "messageKey": "5-38849393-1006314898273278",
            "messageText": "another general",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-11T23:33:15.667Z"),
            "status": "sent",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false
        },
        "subject": "General #315"
    },
    {
        "chatId": "e2e370ab-bea1-45ef-bb30-994451237d5a",
        "chatType": "group",
        "message": {
            "key": "5-38849382-1061548872985065",
            "messageKey": "5-38849382-1061548872985065",
            "messageText": "hey 212",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-11T23:02:08.432Z"),
            "status": "sent",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false
        },
        "subject": "General #212"
    },
    {
        "chatId": "153aa0a7-7abe-4289-a798-3f3132c20e8a",
        "chatType": "group",
        "message": {
            "key": "5-38848929-624846401371144",
            "messageKey": "5-38848929-624846401371144",
            "messageText": "other convo",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-11T22:50:31.413Z"),
            "status": "sent",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false
        },
        "subject": "General"
    },
    {
        "chatId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_default",
        "chatType": "user",
        "message": {
            "key": "5-null-1273858128655164",
            "messageKey": "4-null-1273858128655164",
            "messageText": "main convo",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_default",
            "timeStamp": new Date("2024-09-11T22:50:25.280Z"),
            "status": "read",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false,
            "deliveredAtTime": 1726724881599,
            "readAtTime": 1726724881599
        },
        "subject": "main convo"
    },
    {
        "chatId": "bf588684-90e3-4d53-86fa-57605488a1f1",
        "chatType": "group",
        "message": {
            "key": "5-38848868-1586276706625432",
            "messageKey": "5-38848868-1586276706625432",
            "messageText": "send",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-11T21:26:36.330Z"),
            "status": "sent",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false
        },
        "subject": "Convo Subject 4"
    },
    {
        "chatId": "5c803eee-b610-4848-a6bb-d9ceb8d384d9",
        "chatType": "group",
        "message": {
            "key": "5-38848842-1682835117886650",
            "messageKey": "5-38848842-1682835117886650",
            "messageText": "group sujeto tres",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-10T16:12:16.295Z"),
            "status": "sent",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false
        },
        "subject": "Convo Subject 3"
    },
    {
        "chatId": "fb82823b-fbac-44fa-a857-9d3da6c38c92",
        "chatType": "group",
        "message": {
            "key": "5-38848839-379716311860820",
            "messageKey": "5-38848839-379716311860820",
            "messageText": "is this a new group??",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-10T15:47:15.732Z"),
            "status": "sent",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false
        },
        "subject": "Group Sep 10"
    },
    {
        "chatId": "group_aug21",
        "chatType": "group",
        "message": {
            "key": "5-38841820-62123365245780",
            "messageKey": "5-38841820-62123365245780",
            "messageText": "What can you tell me about Leeroy Jenkins?",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-09-06T18:57:14.607Z"),
            "status": "sent",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false
        },
        "subject": "Group Aug21"
    },
    {
        "chatId": "group_aug23",
        "chatType": "group",
        "message": {
            "key": "5-38842771-1486457189489202",
            "messageKey": "5-38842771-1486457189489202",
            "messageText": "is this aug23?",
            "fromUserId": "manual-c01_3ff0bef0f31b408695da4600ef342adfa_e1457749-4f32-4b19-a1ff-500a79e79387",
            "timeStamp": new Date("2024-08-23T15:51:34.073Z"),
            "status": "sent",
            "isReply": true,
            "metadata": {},
            "contentType": 0,
            "read": false
        },
        "subject": "Group Aug23"
    }
]
