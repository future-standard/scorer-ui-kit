import React, { Fragment, ReactElement, useCallback, useState } from 'react';
import styled from 'styled-components';
import BigIconsSummary from '../../Misc/atoms/BigIconsSummary';
import DropArea from '../atoms/DropArea';
import InputFileButton from '../atoms/InputFileButton';
import Button from '../atoms/Button';

const Container = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.ui};
`;

const StyledDropArea = styled(DropArea)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const InputButtonWrapper = styled.div`
  z-index: 99;
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;

const FilesUploadGroup = styled.div<{ height?: string, hasFiles: boolean }>`
  padding: ${({ hasFiles }) => hasFiles ? '26px 0 20px 0' : '65px 0 42px 0'};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background-color: var(--grey-4);
  position: relative;
`;

const Title = styled.div`
  color: var(--grey-11);
  font-size: 20px;
`;

const Description = styled.div`
  font-size: 14px;
  line-height: 2.14;
  text-align: center;
  color: var(--grey-10);
  margin-top: 10px;
  max-width: 386px;
`;

const getUpdateFiles = (newFiles: FileList, files: FileList | null, allowedFileTypes?: string[]): IUploadedFiles => {

  // creates a newFiles variable to prevent errors with input
  const newFilesTransfer = new DataTransfer();
  const rejectedFilesTransfer = new DataTransfer();

  for (let index = 0; index < newFiles.length; index++) {

    const isCorrectType = (allowedFileTypes === undefined) || (allowedFileTypes.length === 0) ? true : allowedFileTypes.includes(newFiles[index].type);
    if (isCorrectType) {
      newFilesTransfer.items.add(newFiles[index]);
    } else {
      rejectedFilesTransfer.items.add(newFiles[index]);
    }
  }

  if (files === null) {
    const result: IUploadedFiles = { goodFiles: newFilesTransfer.files, rejectedFiles: rejectedFilesTransfer.files };
    return result;
  }

  const updatedFilesTransfer = new DataTransfer();
  const fileNamesSet = new Set();

  for (let index = 0; index < files.length; index++) {
    updatedFilesTransfer.items.add(files[index]);
    const name = files[index].name;
    fileNamesSet.add(name);
  }

  for (let index = 0; index < newFilesTransfer.files.length; index++) {

    const isAlready = fileNamesSet.has(newFilesTransfer.files[index].name);
    const isCorrectType = (allowedFileTypes === undefined) || (allowedFileTypes.length === 0) ? true : allowedFileTypes.includes(newFiles[index].type);

    if (isAlready || !isCorrectType) {
      rejectedFilesTransfer.items.add(newFiles[index]);
    } else {
      updatedFilesTransfer.items.add(newFilesTransfer.files[index]);
    }
  }
  const result: IUploadedFiles = { goodFiles: updatedFilesTransfer.files, rejectedFiles: rejectedFilesTransfer.files };

  return result;
};

interface IUploadedFiles {
  goodFiles: FileList
  rejectedFiles: FileList
}

interface IAreaUploaderManager {
  title?: string
  description?: string
  fileIcons?: string[]
  selectFilesText?: string
  addMoreFilesText?: string
  clearFilesText?: string
  beginUploadText?: string
  allowedFileTypes?: string[]
  customComponent?: ReactElement
  onChangeCallback?: (goodFiles: FileList, rejectedFiles: FileList) => void
  clearFilesCallback?: () => void
  beginUploadCallback?: () => void
}

const AreaUploadManager: React.FC<IAreaUploaderManager> = ({
  title = 'Select Files',
  description,
  fileIcons,
  selectFilesText = 'Select Files',
  addMoreFilesText = 'Add More Files',
  clearFilesText = 'Clear Files',
  beginUploadText = 'Begin Upload',
  allowedFileTypes,
  customComponent,
  onChangeCallback = () => { },
  clearFilesCallback = () => { },
  beginUploadCallback = () => { }
}) => {

  const [files, setFiles] = useState<FileList | null>(null);

  const handleFiles = useCallback((newFiles: FileList) => {
    if (newFiles === null) {
      return;
    }
    const { goodFiles, rejectedFiles } = getUpdateFiles(newFiles, files, allowedFileTypes);
    setFiles(goodFiles);
    onChangeCallback(goodFiles, rejectedFiles);

  }, [files, allowedFileTypes, onChangeCallback]);

  const clearFiles = useCallback(() => {
    setFiles(null);
    clearFilesCallback();
  },[clearFilesCallback]);

  return (
    <Container>
      <FilesUploadGroup hasFiles={files !== null}>
        <StyledDropArea dropCallback={handleFiles} />
        {
          customComponent
            ? customComponent
            : (
              <Fragment>
                {fileIcons && <BigIconsSummary icons={fileIcons} />}
                <Title>{title}</Title>
                {files === null && <Description>{description}</Description>}
              </Fragment>
            )
        }

        <InputButtonWrapper>
          <InputFileButton
            buttonSize='small'
            text={files !== null ? addMoreFilesText : selectFilesText}
            inputCallback={handleFiles}
            multiple
            buttonDesign={files !== null ? 'secondary' : 'primary'}
            accept={allowedFileTypes?.join(', ')}
          />
          {files !== null &&
            <Fragment>
              <Button
                size='small'
                onClick={beginUploadCallback}
                design='primary'
              >{beginUploadText}
              </Button>
              <Button
                size='small'
                onClick={clearFiles}
                design='secondary'
              >{clearFilesText}
              </Button>
            </Fragment>}
        </InputButtonWrapper>
      </FilesUploadGroup>
    </Container>
  );
};

export default AreaUploadManager;