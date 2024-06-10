import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "tinymce/tinymce";
import "tinymce/icons/default";
import "tinymce/themes/silver";
import "tinymce/plugins/link";
import "tinymce/plugins/image";
import "tinymce/plugins/table";
import "tinymce/skins/ui/oxide/skin.min.css";
import "tinymce/skins/ui/oxide/content.min.css";
import "tinymce/models/dom/model";
import "@wiris/mathtype-tinymce6";
import { Interweave } from "interweave"; //html parser

const TextEditor = ({}) => {
    const [editorContent, setEditContent] = useState("");

    const handleEditorChange = (content, editor) => {
        setEditContent(mathParser(content));
    };

    const mathParser = (content, editor) => {
        return WirisPlugin?.Parser.initParse(content);
    };

    return (
        <>
            <Editor
                license_key="gpl"
                initialValue=""
                init={{
                    license_key: "gpl",
                    branding: false,
                    height: 500,
                    menubar: false,
                    toolbar: [
                        " undo redo | blocks | bold italic underline strikethrough | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat |" +
                            "tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry ",
                    ],
                    external_plugins: {
                        tiny_mce_wiris: "node_modules/@wiris/mathtype-tinymce6/plugin.min.js",
                    },
                    htmlAllowedTags: [".*"],
                    htmlAllowedAttrs: [".*"],
                    extended_valid_elements: "*[.*]",
                    draggable_modal: true,
                }}
                onEditorChange={handleEditorChange}
            />
            <div>
                <h3>Content</h3>
                <Interweave content={editorContent} />
            </div>
        </>
    );
};

export default TextEditor;
