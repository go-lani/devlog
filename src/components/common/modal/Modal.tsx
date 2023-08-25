import { cloneElement, useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContainer from './ModalContainer';

type Props = {
  hasDim?: boolean;
  trigger: JSX.Element;
  component: JSX.Element;
};

export default function Modal({ hasDim = false, trigger, component }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalRoot, setModalRoot] = useState<Element | null>(null);

  const ClonedElement = useMemo(
    () =>
      ({
        component,
        ...props
      }: {
        component: JSX.Element;
        [key: string]: unknown;
      }) => {
        return cloneElement(component, {
          ...component.props,
          ...props,
        });
      },
    [],
  );

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const $modalRoot = document.querySelector('#modal-root');

    if (!$modalRoot) return;

    setModalRoot($modalRoot);
  }, []);

  return (
    <>
      <ClonedElement component={trigger} onClick={openModal} />
      {isOpen &&
        modalRoot &&
        createPortal(
          <ModalContainer hasDim={hasDim} closeModal={closeModal}>
            <ClonedElement component={component} closeModal={closeModal} />
          </ModalContainer>,
          modalRoot,
        )}
    </>
  );
}
