import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from "./Image.module.css";

interface ImagePopupProps {
  imageUrl: string;
}

const ImagePopup: React.FC<ImagePopupProps> = ({ imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className={styles.BtnStyle} onClick={handleOpen}>ARで見る</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        contentLabel="Image Popup"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: 'none',
            border: 'none',
            display: 'flex',          // 追加: フレックスボックスを使用
            flexDirection: 'column' 
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }
        }}
      >
        <img src={imageUrl} alt="ポップアップ画像" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
        <button onClick={handleClose} style={{ flexGrow: 1, width: '100%', marginTop: '10px' }}>閉じる</button>
      </Modal>
    </div>
  );
};

export default ImagePopup;
