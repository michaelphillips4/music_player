import { Authenticator, Input, Label } from '@aws-amplify/ui-react';

import {
  Button,
  DropZone,
  Flex,
  Text,
  VisuallyHidden,
} from '@aws-amplify/ui-react';
import  { useState,useRef } from 'react';



import '@aws-amplify/ui-react/styles.css';


export default function Editor() {
  return (<>
     <p></p>
    <Authenticator initialState="signUp">
    
      {({ signOut, user }) => (
        <main>
          <p>Hello {user?.username}</p>
          <button onClick={signOut}>Sign out</button>
          <p></p>
          <DropZoneInputExample />  
           <Label htmlFor="by">by:</Label>
    <Input id="by" name="by" />
     <Label htmlFor="name">name:</Label>
    <Input id="name" name="name" />
    <p></p>
     <button >Save</button>
        </main>
      )}
    </Authenticator></>)}


const acceptedFileTypes = ['image/png', 'image/jpeg'];

 function DropZoneInputExample() {
  const [files, setFiles] = useState<File[]>([]);
  const hiddenInput = useRef<HTMLInputElement>(null);

  const onFilePickerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (!files || files.length === 0) {
      return;
    }
    setFiles(Array.from(files));
  };

  return (
    <>
       <DropZone
        acceptedFileTypes={acceptedFileTypes}
        onDropComplete={({ acceptedFiles}) => {
          setFiles(acceptedFiles);
        }}
      >
        <Flex direction="column" alignItems="center">
          <Text>Drag mp3 file here or</Text>
          <Button
            size="small"
            onClick={() => {
              if (hiddenInput.current) {
                hiddenInput.current.click();
              }
            }}
          >
            Browse
          </Button>
        </Flex>
        <VisuallyHidden>
          <input
            type="file"
            tabIndex={-1}
            ref={hiddenInput}
            onChange={onFilePickerChange}
            multiple={true}
            accept={acceptedFileTypes.join(',')}
          />
        </VisuallyHidden>
      </DropZone>
      {files.map((file) => (
        <Text key={file.name}>{file.name}</Text>
      ))}
    </>
  );
}


