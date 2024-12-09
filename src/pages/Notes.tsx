import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FileText, Upload, Trash2, Brain, RefreshCw } from 'lucide-react';

interface Note {
  id: string;
  name: string;
  type: 'lecture' | 'note';
  uploadDate: string;
  content?: string;
  analysis?: {
    keyPoints: string[];
    suggestions: string[];
    concepts: string[];
  };
}

const mockNotes: Note[] = [
  {
    id: '1',
    name: 'Lecture 1: Introduction to Economics',
    type: 'lecture',
    uploadDate: '2024-03-01',
    analysis: {
      keyPoints: [
        'Basic economic principles',
        'Supply and demand concepts',
        'Market equilibrium'
      ],
      suggestions: [
        'Add more real-world examples',
        'Include visual diagrams'
      ],
      concepts: [
        'Microeconomics',
        'Market forces',
        'Economic behavior'
      ]
    }
  },
  {
    id: '2',
    name: 'Math Notes: Chapter 3 - Linear Equations',
    type: 'note',
    uploadDate: '2024-03-02',
    analysis: {
      keyPoints: [
        'Solving linear equations',
        'Graphing techniques',
        'Real-world applications'
      ],
      suggestions: [
        'Practice more complex equations',
        'Add step-by-step solutions'
      ],
      concepts: [
        'Algebra',
        'Linear functions',
        'Graphing'
      ]
    }
  }
];

export function Notes() {
  const [notes, setNotes] = useState<Note[]>(mockNotes);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [analyzing, setAnalyzing] = useState<string | null>(null);
  const [uploadType, setUploadType] = useState<'lecture' | 'note'>('lecture');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach(file => {
      const newNote: Note = {
        id: Date.now().toString(),
        name: file.name,
        type: uploadType,
        uploadDate: new Date().toISOString().split('T')[0]
      };
      setNotes(prev => [...prev, newNote]);
    });
  }, [uploadType]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc', '.docx'],
      'image/*': ['.png', '.jpg', '.jpeg']
    }
  });

  const analyzeNote = (noteId: string) => {
    setAnalyzing(noteId);
    // Simulate AI analysis
    setTimeout(() => {
      setNotes(prev => prev.map(note => {
        if (note.id === noteId) {
          return {
            ...note,
            analysis: {
              keyPoints: [
                'Main concept identified',
                'Supporting theories found',
                'Key examples noted'
              ],
              suggestions: [
                'Consider adding more examples',
                'Review related topics',
                'Practice with exercises'
              ],
              concepts: [
                'Primary theory',
                'Related concepts',
                'Practical applications'
              ]
            }
          };
        }
        return note;
      }));
      setAnalyzing(null);
    }, 2000);
  };

  const deleteNote = (noteId: string) => {
    setNotes(prev => prev.filter(note => note.id !== noteId));
    if (selectedNote?.id === noteId) {
      setSelectedNote(null);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Notes & Lectures</h1>

      {/* Upload Section */}
      <div className="mb-8">
        <div className="flex space-x-4 mb-4">
          <button
            className={`px-4 py-2 rounded-md ${
              uploadType === 'lecture'
                ? 'bg-violet-600 text-white'
                : 'bg-violet-100 text-violet-700'
            }`}
            onClick={() => setUploadType('lecture')}
          >
            Upload Lecture
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              uploadType === 'note'
                ? 'bg-violet-600 text-white'
                : 'bg-violet-100 text-violet-700'
            }`}
            onClick={() => setUploadType('note')}
          >
            Upload Note
          </button>
        </div>

        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragActive ? 'border-violet-500 bg-violet-50' : 'border-gray-300 hover:border-violet-500'
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600">
            {isDragActive
              ? 'Drop the files here...'
              : 'Drag and drop files here, or click to select files'}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Supported formats: PDF, DOC, DOCX, PNG, JPG
          </p>
        </div>
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Notes List */}
        <div className="bg-violet-100 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {uploadType === 'lecture' ? 'Lectures' : 'Notes'}
          </h2>
          <div className="space-y-4">
            {notes
              .filter(note => note.type === uploadType)
              .map(note => (
                <div
                  key={note.id}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedNote(note)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <FileText className="h-5 w-5 text-violet-600 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-900">{note.name}</h3>
                        <p className="text-sm text-gray-500">
                          Uploaded on {note.uploadDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      {!note.analysis && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            analyzeNote(note.id);
                          }}
                          className="p-1 text-violet-600 hover:text-violet-700"
                          disabled={analyzing === note.id}
                        >
                          <Brain className={`h-5 w-5 ${analyzing === note.id ? 'animate-spin' : ''}`} />
                        </button>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteNote(note.id);
                        }}
                        className="p-1 text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Analysis Panel */}
        {selectedNote && selectedNote.analysis && (
          <div className="bg-violet-100 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              AI Analysis
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Key Points</h3>
                <ul className="list-disc list-inside space-y-1">
                  {selectedNote.analysis.keyPoints.map((point, index) => (
                    <li key={index} className="text-gray-700">{point}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Suggestions</h3>
                <ul className="list-disc list-inside space-y-1">
                  {selectedNote.analysis.suggestions.map((suggestion, index) => (
                    <li key={index} className="text-gray-700">{suggestion}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Related Concepts</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedNote.analysis.concepts.map((concept, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-violet-200 text-violet-700 rounded-full text-sm"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}