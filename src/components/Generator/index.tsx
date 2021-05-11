import { useContext } from 'react'
import { QrCodeContext } from '../../contexts/QrCode';

import QRCode from 'react-qr-code';

import { FiDownload, FiSave, FiDelete } from 'react-icons/fi';

import { Container, TextArea, Button, Buttons } from './styles';

export function Generator() {
  const {
    content,
    isEmpty,
    isDownloading,
    isSaving,
    updateContent,
    downloadAsImage,
    save
  } = useContext(QrCodeContext);

  function emptyContent() {
    updateContent('');
  }

  return (
    <Container>
      {
        !isEmpty
        && <div id="qrcode" className="overflow-x-auto w-full flex justify-center">
          <QRCode
            value={content}
          />
        </div>
      }

      <TextArea
        placeholder="Input your content..."
        value={content}
        onChange={(e) => updateContent(e.currentTarget.value)}
      />

      <Buttons>
        <Button
          type="button"
          $default
          disabled={isSaving || isEmpty}
          onClick={save}
          title="Save it"
        >
          <FiSave className="mr-2" />
          Save
        </Button>

        <Button
          type="button"
          $success
          onClick={downloadAsImage}
          disabled={isDownloading || isEmpty}
          title="Download it"
        >
          <FiDownload className="mr-2" />
          Download
        </Button>

        <Button
          type="button"
          $error
          disabled={isEmpty}
          onClick={emptyContent}
          title="Clean the content"
        >
          <FiDelete />
        </Button>
      </Buttons>
    </Container>
  );
};
