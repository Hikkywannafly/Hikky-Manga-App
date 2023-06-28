import React, { useImperativeHandle } from 'react';
import StarterKit from '@tiptap/starter-kit';
import { EditorContent, EditorOptions, useEditor } from "@tiptap/react";
import { Editor as EditorType } from '@tiptap/react';
import classNames from 'classnames';
export interface EditorProps extends Partial<EditorOptions> {
    defaultContent?: string;
    readOnly?: boolean;
    className?: string;
    editorClassName?: string;

}

const Editor = React.forwardRef<EditorType, EditorProps>(
    (
        {
            defaultContent,
            readOnly,
            className,
            editorClassName,
            ...editorOptions
        },
        ref
    ) => {
        const editor = useEditor({
            extensions: [

                StarterKit.configure({
                    bulletList: {
                        keepMarks: true,
                        keepAttributes: false,
                    },
                    orderedList: {
                        keepMarks: true,
                        keepAttributes: false,
                    },
                }),
            ],
            content: defaultContent,
            editable: !readOnly,


        }
        );
        // https://codestus.com/posts/tim-hieu-ve-useimperativehandle-hook-trong-react
        useImperativeHandle(ref, () => editor, [editor]);

        return (
            <div className={classNames(!readOnly && 'border border-gray-600', className)} >
                <EditorContent
                    className={editorClassName}
                    editor={editor}
                >
                </EditorContent>

            </div>
        )

    })

Editor.displayName = 'Editor'

export default Editor
