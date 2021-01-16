import { Modal, Spinner } from "react-bootstrap";

const SpinnerLoading = (isLoading) => {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={isLoading}
    >
      <Modal.Body>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Modal.Body>
    </Modal>
  );
};

export default SpinnerLoading;
