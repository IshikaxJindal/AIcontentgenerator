import React from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from "@/components/ui/button";
import { Import } from 'lucide-react';
import {Copy} from 'lucide-react';
import { useRef } from 'react';

function OutputSection() {
  const editorRef = useRef<any>(null);

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='text-bold'>Your Result</h2>
        <Button><Copy/> Copy</Button>
      </div>
       <Editor
       ref={editorRef}
    initialValue="Your Result will appear here"
    initialEditType="wysiwyg"
    height="600px"
    useCommandShortcut={true}
    onChange={()=>{
      return console.log(editorRef.current.getInstance().getMarkdown);
    }}
  /></div>
  )
}

export default OutputSection