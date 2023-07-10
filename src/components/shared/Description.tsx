import React from 'react'
import Editor from './Editor'
import { Editor as EditorType } from '@tiptap/react';
import { EditorProps } from './Editor'
export interface DescriptionProps extends EditorProps {
    description?: string;
}
const Description = React.forwardRef<EditorType, DescriptionProps>
    (({ description, ...props }, ref) => {

        return (
            <Editor
                ref={ref}
                readOnly
                defaultContent={description}
                editorClassName="text-[16px] font-medium text-gray-100"
                {...props}
            />
        )
    });

Description.displayName = 'Description';

export default Description