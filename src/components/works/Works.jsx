import React, { useState } from 'react';
import insta1 from '../../assets/videos/insta1.mp4';
import insta2 from '../../assets/videos/insta2.mp4';
import insta3 from '../../assets/videos/insta3.mp4';
import insta4 from '../../assets/videos/insta4.mp4';
import insta5 from '../../assets/videos/insta5.mp4';
import insta6 from '../../assets/videos/insta6.mp4';
import './style.css';
import v5 from '../../pages/Gallery/v5.mp4';
import v from './videoplayback.mp4';
import { Button, Modal } from 'react-bootstrap';

function Works() {
  const [playVideo, setPlayVideo] = useState(null);
  const [show, setShow] = useState(false);

  const showHandler = (video) => {
    setPlayVideo(video);
    setShow(true);
  };

  const closeHandler = () => {
    setPlayVideo(null);
    setShow(false);
  };

  return (
    <section className="container-fluid p-3 p-md-5 dark2 text-white works">
      <p className="fs-5 text-aqua" data-aos="fade-down">LATEST WORKS</p>
      <h1 className="display-3 fw-bold" data-aos="fade-up">Our Recent Works</h1>
      <div className="row mt-5">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <div className="video">
            <video
              src={v5}
              className="w-100 v1"
              autoPlay
              loop
              muted
              controls
              data-aos="zoom-in-right"
            ></video>
            <div className="popup" onClick={() => showHandler(v5)}>
              <div className="play" >
                <i className="bi bi-play-fill"></i>
              </div>
            </div>
          </div>
          <div className="video">
            <video
              src={insta3}
              className="w-100 v3"
              autoPlay
              loop
              muted
              controls
              data-aos="zoom-in"
            ></video>
            <div className="popup" onClick={() => showHandler(insta3)}>
              <div className="play" >
                <i className="bi bi-play-fill"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <div className="video">
            <video
              src={insta2}
              className="w-100 v2"
              autoPlay
              loop
              muted
              controls
              data-aos="zoom-in"
            ></video>
            <div className="popup" onClick={() => showHandler(insta2)}>
              <div className="play" >
                <i className="bi bi-play-fill"></i>
              </div>
            </div>
          </div>

          <div className="video">
            <video
              src="https://firebasestorage.googleapis.com/v0/b/sporti-2e307.appspot.com/o/sporti%20videos%2Fsporti_1%20(1).mp4?alt=media&token=65f28e6b-12a2-4f0b-b028-503adc534f0a"
              className="w-100 v1"
              autoPlay
              loop
              muted
              controls
              data-aos="zoom-in-left"
            ></video>
            <div className="popup" onClick={() => showHandler('https://firebasestorage.googleapis.com/v0/b/sporti-2e307.appspot.com/o/sporti%20videos%2Fsporti_1%20(1).mp4?alt=media&token=65f28e6b-12a2-4f0b-b028-503adc534f0a')}>
              <div className="play" >
                <i className="bi bi-play-fill"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <div className="video">
            <video
              src={v}
              className="w-100 v1"
              autoPlay
              loop
              muted
              controls
              data-aos="zoom-in-right"
            ></video>
            <div className="popup" onClick={() => showHandler(v)}>
              <div className="play" >
                <i className="bi bi-play-fill"></i>
              </div>
            </div>
          </div>

          <div className="video">
            <video
              src={insta6}
              className="w-100 v2"
              autoPlay
              loop
              muted
              controls
              data-aos="zoom-in-left"
            ></video>
            <div className="popup" onClick={() => showHandler(insta6)}>
              <div className="play" >
                <i className="bi bi-play-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <center className="mt-4">
        <a
          href="/gallery"
          className="btn btn-light p-2 px-4 rounded-pill text-aqua"
        >
          View more
        </a>
      </center>

      <Modal show={show} onHide={closeHandler} className='border-0' centered>
        {/* <Modal.Header closeButton>
          <Modal.Title>Video Preview</Modal.Title>
        </Modal.Header> */}

        <Modal.Body className='p-0 border-0 video-body'>
          <div className="text-end">
            <div className="close-icon" onClick={closeHandler}>
            <i class="bi bi-x-lg"></i>
            </div>
          </div>
        <div className="video-popup">
        <video src={playVideo} autoPlay controls loop className="w-100"></video>
        </div>
        </Modal.Body>

        {/* <Modal.Footer>
          <Button variant="secondary" onClick={closeHandler}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    </section>
  );
}

export default Works;
