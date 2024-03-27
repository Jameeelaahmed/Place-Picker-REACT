import { useRef ,useEffect} from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children,open,close}) {
  const dialog = useRef();

  useEffect(()=>{
    if(open){
      dialog.current.showModal();
    }else{
      dialog.current.close()
    }
  },[open])
  


  return createPortal(
    <dialog className="modal" ref={dialog} onClose={close}>
      {open && children}
    </dialog>,
    document.getElementById('modal')
  );
};

