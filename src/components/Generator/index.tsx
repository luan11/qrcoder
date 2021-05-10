import { useContext } from 'react'
import { QrCodeContext } from '../../contexts/QrCode';

import QRCode from 'react-qr-code';

import { FiDownload, FiSave } from 'react-icons/fi';

import { TextArea, Button, Buttons } from './styles';

export function Generator() {
  const {
    content,
    isEmpty,
    isDownloading,
    updateContent,
    downloadAsImage
  } = useContext(QrCodeContext);

  return (
    <>
      {
        !isEmpty
        && <div id="qrcode">
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
          className="mr-4"
          $success={true}
          onClick={downloadAsImage}
          disabled={isDownloading || isEmpty}
        >
          <FiDownload className="mr-2" />
          Download
        </Button>

        <Button
          type="button"
          disabled={isEmpty}
        >
          <FiSave className="mr-2" />
          Save
        </Button>
      </Buttons>
    </>
  );
};
