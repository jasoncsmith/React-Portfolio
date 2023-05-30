import { createPortal } from 'react-dom';
import { IoMdClose } from 'react-icons/io';
import { useEffect } from 'react';
// import './modal.scss';

function Modal({ isVisible, hideModal, title, content }) {
    useEffect(() => {
        function keylogger(e) {
            if (e.keyCode === 27) {
                hideModal();
            } else {
                // document.activeElement && document.activeElement.blur()
            }
        }

        if (isVisible) {
            document.addEventListener('keyup', keylogger);
        } else {
            document.removeEventListener('keyup', keylogger);
        }

        return () => document.removeEventListener('keyup', keylogger);
    }, [isVisible, hideModal]);

    return isVisible
        ? createPortal(
              <>
                  <div className="modal-overlay fixed top-0 left-0 bg-black opacity-70 w-full h-full z-30"></div>
                  <div className="modal-wrap fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto z-40">
                      <div className="modal absolute w-1/2 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:bg-slate-800 rounded-lg p-6 ring-1 ring-slate-700 shadow-xl z-50">
                          {title && (
                              <h3 className="text-slate-900 dark:text-white mb-5 text-base font-medium">
                                  {title}
                              </h3>
                          )}
                          <div>{content}</div>

                          <button
                              className="stroke-white hover:bg-slate-600 absolute top-3 right-3 p-1 rounded-md"
                              type="button"
                              onClick={hideModal}
                          >
                              <IoMdClose
                                  color="#eabb00"
                                  size="22px"
                              />
                          </button>
                      </div>
                  </div>
              </>,
              document.body
          )
        : null;
}

export default Modal;
