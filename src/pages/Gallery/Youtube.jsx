import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Youtube() {
  const youtubeLinks = [
    { link: 'https://youtube.com/shorts/ZSMt0-cvFi0?si=6bTFtJzRzKv4jDcO' },
    { link: 'https://youtube.com/shorts/bQX5M4xNIII?si=wlNYkjkk5Db-gXLe' },
    {link:'https://youtube.com/shorts/UP9S_-7PsfU?si=J8oJ2hlVLlT_gzpN'},
    {link:'https://youtube.com/shorts/eshbChPyyWA?si=5lDiDB0Fm685NRj-'},
    {link:'https://youtube.com/shorts/SLsihZ5g3vs?si=8KSD_4LAI_k945qf'},
    {link:'https://youtube.com/shorts/iem54VjrSEs?si=jvsaEu1gsy49fZi7'},
    {link:'https://youtube.com/shorts/l8Ep4FfLwX0?si=K6lOMHhN1JySOYsP'},
    {link:'https://youtube.com/shorts/fiMS83zavXI?si=LpxU7kyFWLOoiOhR'},
    {link:'https://youtube.com/shorts/e2ZEqaAKws0?si=RiNMl-Xfe6gLkJlx'},
    {link:'https://youtube.com/shorts/oeMO16IZ4oQ?si=RP56Cxa1A_M62C9f'},
    {link:'https://youtube.com/shorts/WgoM1xliAgE?si=tyq9y_0B7bl9MJ-3'},
    {link:'https://youtube.com/shorts/T3BROo17p1g?si=MsCMfKt6yWGjLssj'},
    {link:'https://youtube.com/shorts/NLQZyM4krKg?si=QdoSyLBA0tjXRCQy'},
    {link:'https://youtube.com/shorts/U8RgfzFLHRs?si=HfF8wEfR49CeVSb6'},
    {link:'https://youtube.com/shorts/3LsZhVHGp-Q?si=VzVcRqjnRgsRw4O2'},
    {link:'https://youtube.com/shorts/gJWYHrORNBg?si=xyB-CICAXt_Ypv_g'},
    {link:'https://youtube.com/shorts/oxxDj5PFjWE?si=fQxHyYSyPCgXxuCb'},
    {link:'https://youtube.com/shorts/Gyj6yXBI3TU?si=lp71nnVHZXwWFtAZ'},
    {link:'https://youtube.com/shorts/Z08-CCxsG4A?si=OEvjoVj6oXPs7xWR'},
    {link:'https://youtube.com/shorts/JdsZEmPJerA?si=4SfxcwKs5yj2QW6Y'},
    {link:'https://youtube.com/shorts/kx8E-s6XCO4?si=oORFfLBNd76HO3kQ'},
    {link:'https://youtube.com/shorts/aPEtMZl88_4?si=tbLCsM-Rz-GCAuTh'},
  ];

  const [showModal, setShowModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState('');

  // Extract video ID from the YouTube link
  const getYoutubeId = (url) => {
    const id = url.split('/shorts/')[1]?.split('?')[0];
    return id;
  };

  const handleShow = (videoLink) => {
    setActiveVideo(videoLink);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setActiveVideo('');
  };

  return (
    <section className="container-fluid p-3 p-md-5">
      <h1 className="fs-1 fw-bold text-white">More Works</h1>
      <div className="line mb-4"></div>
      <div className="row g-4">
        {youtubeLinks.map((video, index) => (
          <div key={index} className="col-12 col-md-4">
            <div className="card w-100 border-0 video">
              <img
                src={`https://img.youtube.com/vi/${getYoutubeId(video.link)}/0.jpg`}
                alt={`YouTube video ${index + 1}`}
                className=" v1 w-100"
                style={{ cursor: 'pointer', minHeight:'200px', background:'#ccc' }}
                onClick={() => handleShow(video.link)}
              />
              {/* <div className="card-body text-center">
                <Button variant="primary" onClick={() => handleShow(video.link)}>
                  Play Video
                </Button>
              </div> */}
              <div className="popup">
              <div className="play" onClick={() => handleShow(video.link)}>
                <i className="bi bi-play-fill text-white"></i>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal to play video */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className='text-white'>YouTube Video</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          {activeVideo && (
            <iframe
              width="100%"
              height="400px"
              src={`https://www.youtube.com/embed/${getYoutubeId(activeVideo)}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className='bg-light'
            ></iframe>
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default Youtube;
