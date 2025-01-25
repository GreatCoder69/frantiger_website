import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import next from '../../../Assets/images/next.png';
import apple from '../../../Assets/images/downloadPageImages/apple.png';
import playstore from '../../../Assets/images/downloadPageImages/playstore.png';
import tigerBGImage from '../../../Assets/images/downloadPageImages/tigerDownloadBGImage.png';
import closeImg from '../../../Assets/images/downloadPageImages/close.png';
import { openDownloadPopup, closeDownloadPopup } from '../../../slices/popupSlice';
import './downloadApp.scss';
import DownloadPopUp from '../../DownloadPopUp/DownloadPopUp';

const DownloadApp = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.popup.isDownloadOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isOpen]);

  return (
    <>
      <section className="scroll-snap scroll-snap-height">
        <div className={`DownloadappContainer ${isOpen ? 'blurred' : ''}`}>
          <div className="d-flex justify-content-center downloadAppWholeContainer position-relative">
            <div className="downloadAppSec">
              <div className="downloadAppInnerContainer text-white d-flex flex-column align-items-center gap-3">
                <h1 className="text-center downloadHeading">
                  Lorem <span>Ipsum</span> Dolor <span>sit</span> amet
                </h1>
                <h5>
                  Lorem Ipsum is simply dummy text of thesss when rambled it to
                  make a type specimen book. It has survived not only
                </h5>
                <button
                  className="downloadButton"
                  onClick={() => dispatch(openDownloadPopup())}
                >
                  DOWNLOAD APP
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isOpen && <DownloadPopUp />}
    </>
  );
};

export default DownloadApp;
