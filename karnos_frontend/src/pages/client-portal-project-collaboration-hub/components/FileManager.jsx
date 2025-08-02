import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FileManager = ({ files }) => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFiles, setSelectedFiles] = useState([]);

  const getFileIcon = (type) => {
    switch (type) {
      case 'pdf':
        return 'FileText';
      case 'image':
        return 'Image';
      case 'video':
        return 'Video';
      case 'document':
        return 'FileText';
      case 'zip':
        return 'Archive';
      default:
        return 'File';
    }
  };

  const getFileTypeColor = (type) => {
    switch (type) {
      case 'pdf':
        return 'text-red-500';
      case 'image':
        return 'text-green-500';
      case 'video':
        return 'text-blue-500';
      case 'document':
        return 'text-indigo-500';
      case 'zip':
        return 'text-yellow-500';
      default:
        return 'text-gray-500';
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i))?.toFixed(2)) + ' ' + sizes?.[i];
  };

  const toggleFileSelection = (fileId) => {
    setSelectedFiles(prev => 
      prev?.includes(fileId) 
        ? prev?.filter(id => id !== fileId)
        : [...prev, fileId]
    );
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Project Files</h3>
        <div className="flex items-center space-x-2">
          <div className="flex items-center bg-muted rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors duration-200 ${
                viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="Grid3X3" size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors duration-200 ${
                viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="List" size={16} />
            </button>
          </div>
          <button className="flex items-center space-x-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200">
            <Icon name="Upload" size={16} />
            <span className="text-sm font-medium">Upload</span>
          </button>
        </div>
      </div>
      {selectedFiles?.length > 0 && (
        <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg mb-4">
          <span className="text-sm font-medium text-primary">
            {selectedFiles?.length} file{selectedFiles?.length > 1 ? 's' : ''} selected
          </span>
          <div className="flex items-center space-x-2">
            <button className="text-sm text-primary hover:text-primary/80">Download</button>
            <button className="text-sm text-error hover:text-error/80">Delete</button>
            <button 
              onClick={() => setSelectedFiles([])}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Clear
            </button>
          </div>
        </div>
      )}
      <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-2'}`}>
        {files?.map((file) => (
          <div
            key={file?.id}
            className={`${
              viewMode === 'grid' ?'p-4 border border-border rounded-lg hover:shadow-md transition-all duration-200 cursor-pointer' :'flex items-center space-x-3 p-3 hover:bg-muted rounded-lg transition-colors duration-200 cursor-pointer'
            } ${selectedFiles?.includes(file?.id) ? 'ring-2 ring-primary bg-primary/5' : ''}`}
            onClick={() => toggleFileSelection(file?.id)}
          >
            {viewMode === 'grid' ? (
              <>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center ${getFileTypeColor(file?.type)}`}>
                    <Icon name={getFileIcon(file?.type)} size={20} />
                  </div>
                  <button className="text-muted-foreground hover:text-foreground">
                    <Icon name="MoreVertical" size={16} />
                  </button>
                </div>
                <h4 className="font-medium text-foreground text-sm mb-1 truncate">{file?.name}</h4>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{formatFileSize(file?.size)}</span>
                  <span>{file?.uploadedAt}</span>
                </div>
                <div className="flex items-center space-x-1 mt-2">
                  <Image
                    src={file?.uploadedBy?.avatar}
                    alt={file?.uploadedBy?.name}
                    className="w-4 h-4 rounded-full"
                  />
                  <span className="text-xs text-muted-foreground">{file?.uploadedBy?.name}</span>
                </div>
              </>
            ) : (
              <>
                <div className={`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${getFileTypeColor(file?.type)}`}>
                  <Icon name={getFileIcon(file?.type)} size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground text-sm truncate">{file?.name}</h4>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>{formatFileSize(file?.size)}</span>
                    <span>{file?.uploadedAt}</span>
                    <span>by {file?.uploadedBy?.name}</span>
                  </div>
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                  <Icon name="Download" size={16} />
                </button>
              </>
            )}
          </div>
        ))}
      </div>
      {files?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="FolderOpen" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h4 className="text-lg font-medium text-foreground mb-2">No files yet</h4>
          <p className="text-muted-foreground mb-4">Upload your first file to get started</p>
          <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 mx-auto">
            <Icon name="Upload" size={16} />
            <span>Upload File</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FileManager;