import { useRef, useState } from 'react';
import QRCode from 'react-qr-code';

import { FiDownload, FiSave } from 'react-icons/fi';

import { Container, TextArea, Button, Buttons } from './styles';

export function Generator() {
  const svgContainerRef = useRef<HTMLDivElement>(null);

  const [content, setContent] = useState('Your content...');
  const [isDownloading, setIsDownloading] = useState(false);

  function downloadAsImage() {
    setIsDownloading(true);

    const svgEl = svgContainerRef.current?.querySelector('svg');
    const svgData = svgEl?.outerHTML;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      context?.drawImage(img, 0, 0);

      const date = new Date();

      const file = canvas.toDataURL('image/png');
      const filename = `qrcode_${date.getTime()}__qrcoder`;

      const link = document.createElement('a');

      link.download = filename;
      link.href = `${file}`;

      link.click();

      setIsDownloading(false);
    };

    if (svgData) {
      img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
    } else {
      setIsDownloading(false);
    }
  }

  return (
    <Container>
      <div ref={svgContainerRef}>
        <QRCode
          value={content}
        />
      </div>

      <TextArea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <Buttons>
        <Button
          type="button"
          className="mr-4"
          $success={true}
          onClick={downloadAsImage}
          disabled={isDownloading}
        >
          <FiDownload className="mr-2" />
          Download
        </Button>

        <Button
          type="button"
        >
          <FiSave className="mr-2" />
          Save
        </Button>
      </Buttons>
    </Container>
  );
};
