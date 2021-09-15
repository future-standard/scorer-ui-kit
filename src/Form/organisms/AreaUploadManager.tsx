import React, { Fragment, useCallback, useState } from 'react';
import styled from 'styled-components';
import Icon, { IconWrapper } from '../../Icons/Icon';
import DropArea from '../atoms/DropArea';
import InputFileButton from '../atoms/InputFileButton';

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
`;

const FilesUploadGroup = styled.div<{ height?: string, hasFiles: boolean }>`
  padding: ${({ hasFiles }) => hasFiles ? '26px 0 20px 0' : '65px 0 42px 0'};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background-color: hsl(204, 15%, 94%);
  position: relative;
`;

const Title = styled.div`
  color: hsl(208, 8%, 38%);
  font-size: 20px;
`;

const Description = styled.div`
  font-size: 14px;
  line-height: 2.14;
  text-align: center;
  color: hsl(207, 5%, 57%);
  margin-top: 10px;
  max-width: 386px;
`;

const PlusIcon = styled(Icon)``;

const PlusIconWrapper = styled.div`
  margin: 0 30px;
  ${IconWrapper}{
    transform: rotate(45deg);
    [stroke]{
      stroke: hsl(205, 22%, 66%);
    }
  }
`;

const FileIcons = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 27px;
  ${IconWrapper} {
    display: flex;
    align-items: center;
  }
`;

interface IAreaUploaderManager {
  title?: string
  description?: string
  fileIcons?: string[]
  selectFilesText?: string
  addMoreFilesText?: string
  onChangeCallback?: (newFiles: FileList) => void
}

const AreaUploadManager: React.FC<IAreaUploaderManager> = ({
  title = 'Select Files',
  description,
  fileIcons,
  selectFilesText = 'Select Files',
  addMoreFilesText = 'Add More Files',
  onChangeCallback = () => { },
}) => {

  const [files, setFiles] = useState<FileList | null>(null);

  const handleFiles = useCallback((newFiles: FileList) => {
    console.log('files received', newFiles);

    if ((newFiles !== null)) {
      setFiles((prev) => {
        if (prev === null) {
          onChangeCallback(newFiles);
          return newFiles;
        }
        const dataTransfer = new DataTransfer();

        for (let index = 0; index < prev.length; index++) {
          dataTransfer.items.add(prev[index]);
        }

        for (let index = 0; index < newFiles.length; index++) {
          dataTransfer.items.add(newFiles[index]);
        }

        onChangeCallback(dataTransfer.files);
        return dataTransfer.files;

      });
    }

  }, [onChangeCallback]);

  return (
    <Container>
      <FilesUploadGroup hasFiles={files !== null}>
        <StyledDropArea dropCallback={handleFiles} />
        {fileIcons && (
          <FileIcons>
            {fileIcons.map((icon, index) => {
              return (
                <Fragment key={`type-upload-${icon}}`}>
                  {(index !== 0) && <PlusIconWrapper><PlusIcon icon='CloseCompact' size={22} /></PlusIconWrapper>}
                  <Icon icon={icon} size={72} color='dimmed' weight='light' />
                </Fragment>
              );
            })}
          </FileIcons>
        )}
        <Title>{title}</Title>
        {files === null && <Description>{description}</Description>}
        <InputButtonWrapper>
          <InputFileButton
            buttonSize='small'
            text={files !== null ? addMoreFilesText : selectFilesText}
            inputCallback={handleFiles}
            multiple
            buttonDesign={files !== null ? 'secondary' : 'primary'}
          />
        </InputButtonWrapper>
      </FilesUploadGroup>
    </Container>
  );
};

export default AreaUploadManager;