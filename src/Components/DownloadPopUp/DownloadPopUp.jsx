import React from 'react';
import { useDispatch } from 'react-redux';
import { closeDownloadPopup } from '../../slices/popupSlice';
import apple from '../../Assets/images/downloadPageImages/apple.png';
import playstore from '../../Assets/images/downloadPageImages/playstore.png';
import tigerBGImage from '../../Assets/images/downloadPageImages/tigerDownloadBGImage.png';
import closeImg from '../../Assets/images/downloadPageImages/close.png';
import next from '../../Assets/images/next.png';
import './downloadPop.scss';

const DownloadPopUp = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeDownloadPopup());
  };

  return (
    <div className="downloadPopContainer">
      <div className="popUpContainer position-fixed bg-white rounded-5">
        <div className="popUpInnerContainer text-black">
          <h1>
            Lorem <span>ipsum</span> Dolor <span>sit</span> amet
          </h1>
          <h5>Lorem Ipsum Dolor sit amet</h5>

          <label className="d-flex justify-content-center">
            <input placeholder="+91 0000000000" className="" />
            <button>
              <img width={50} src={next} alt="" />
            </button>
          </label>

          <div className="downloadAppIcons d-flex justify-content-start">
            <button>
              <img src={playstore} alt="" className="img-fluid" />
            </button>
            &nbsp; &nbsp;
            <button>
              <img src={apple} alt="" className="img-fluid"/>
            </button>
          </div>
          <br />
        </div>

        <div className="downloadAppTigerBGImage position-absolute">
          <img src={tigerBGImage} alt="" />
        </div>

        <button
          onClick={handleClose}
          className="closeIconDiv position-absolute">
          <img src={closeImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default DownloadPopUp;
