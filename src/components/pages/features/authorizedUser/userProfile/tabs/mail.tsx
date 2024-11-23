import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActions } from '@mui/material';

interface Author {
    id: number;
    fullName: string;
}

interface Message {
    id: number;
    author: Author;
    subject: string;
    content: string;
    dateSent: Date;
}

const MessageCard: React.FC<{ message: Message }> = ({ message }) => {
    return (
        <Card style={{ margin: '10px' }}>
            <CardContent>
                <h3>{message.subject}</h3>
                <p>{message.content}</p>
                <p>{message.author.fullName} - {message.dateSent.toLocaleDateString()}</p>

            </CardContent>
            <CardActions>
                <Button>Reply</Button>
                <Button color="error">Delete</Button>
            </CardActions>
        </Card>
    );
};

const Mail: React.FC = () => {
    const messages: Message[] = [
        {
            id: 1,
            dateSent: new Date(),
            subject: 'Hello',
            content: 'Welcome to the site! We are glad you are here! We provide a variety of services to help you get started.',
            author: {
                id: 1,
                fullName: "Kip Rosa"
            }
        },
        {
            id: 2,
            dateSent: new Date(),
            subject: 'First steps',
            content: 'Make sure you take a tour of the site and familiarize yourself with the features.',
            author: {
                id: 1,
                fullName: "Lucas Picker"
            }
        },
    ];

    return (
        <div>
            <h1>Messages</h1>
            {messages.map((message) => (
                <MessageCard message={message} key={message.id} />
            ))}
        </div>
    );
};

export default Mail;