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
    isSaving,
    updateContent,
    downloadAsImage,
    save
  } = useContext(QrCodeContext);

  return (
    <>
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
          className="md:mr-4 md:mb-0 mb-4"
          $success={true}
          onClick={downloadAsImage}
          disabled={isDownloading || isEmpty}
        >
          <FiDownload className="mr-2" />
          Download
        </Button>

        <Button
          type="button"
          disabled={isSaving || isEmpty}
          onClick={save}
        >
          <FiSave className="mr-2" />
          Save
        </Button>
      </Buttons>
    </>
  );
};
