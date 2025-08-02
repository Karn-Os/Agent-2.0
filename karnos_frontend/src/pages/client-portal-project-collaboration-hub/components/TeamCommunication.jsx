import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const TeamCommunication = ({ messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (newMessage?.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e?.key === 'Enter' && !e?.shiftKey) {
      e?.preventDefault();
      handleSendMessage();
    }
  };

  const formatMessageTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const isToday = date?.toDateString() === now?.toDateString();
    
    if (isToday) {
      return date?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else {
      return date?.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border flex flex-col h-96">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">Team Chat</h3>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors duration-200">
            <Icon name="Phone" size={16} />
          </button>
          <button className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors duration-200">
            <Icon name="Video" size={16} />
          </button>
          <button className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors duration-200">
            <Icon name="Settings" size={16} />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages?.map((message) => (
          <div key={message?.id} className={`flex ${message?.isOwn ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${message?.isOwn ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <Image
                src={message?.sender?.avatar}
                alt={message?.sender?.name}
                className="w-8 h-8 rounded-full"
              />
              <div className={`flex flex-col ${message?.isOwn ? 'items-end' : 'items-start'}`}>
                <div className={`px-3 py-2 rounded-lg ${
                  message?.isOwn 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-foreground'
                }`}>
                  <p className="text-sm">{message?.content}</p>
                  {message?.attachment && (
                    <div className="mt-2 p-2 bg-black/10 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Icon name="Paperclip" size={14} />
                        <span className="text-xs">{message?.attachment?.name}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-muted-foreground">{message?.sender?.name}</span>
                  <span className="text-xs text-muted-foreground">{formatMessageTime(message?.timestamp)}</span>
                  {message?.isOwn && message?.status && (
                    <Icon 
                      name={message?.status === 'read' ? 'CheckCheck' : 'Check'} 
                      size={12} 
                      className={message?.status === 'read' ? 'text-primary' : 'text-muted-foreground'}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce"></div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
            <span className="text-xs text-muted-foreground">Someone is typing...</span>
          </div>
        )}
      </div>
      <div className="p-4 border-t border-border">
        <div className="flex items-center space-x-2">
          <button className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors duration-200">
            <Icon name="Paperclip" size={16} />
          </button>
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e?.target?.value)}
              onKeyPress={handleKeyPress}
              className="border-0 bg-muted focus:ring-0"
            />
          </div>
          <Button
            variant="default"
            size="sm"
            onClick={handleSendMessage}
            disabled={!newMessage?.trim()}
            iconName="Send"
            iconSize={16}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeamCommunication;