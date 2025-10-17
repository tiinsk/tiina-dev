import { ReactNode, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { H3 } from './typography';
import { Button } from './Button';
import { Box } from './Box';

type DialogProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  allowCloseOnBackdrop?: boolean;
  className?: string;
};

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.background.tertiary};
  z-index: ${({ theme }) => theme.zIndex.menus};
  overflow-y: auto;

  display: flex;
  justify-content: center;

  padding: ${({ theme }) => theme.spacings.s16};
`;

const DialogContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: ${({ theme }) => theme.pageWidth};
  min-height: 100%;
  height: fit-content;

  background: ${({ theme }) => theme.colors.background.default};
  border-radius: ${({ theme }) => theme.spacings.s12};

  padding: ${({ theme }) => theme.spacings.s24};
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacings.s16};
  margin-bottom: ${({ theme }) => theme.spacings.s16};
`;

export const Dialog = ({
  open,
  onClose,
  title,
  children,
  allowCloseOnBackdrop = true,
  className,
}: DialogProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    // Lock body scroll
    const previousOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';

    // Save previously focused element so that we can restore focus when the user closes the dialog
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    //Move focus into dialog
    const focusable = containerRef.current?.querySelector<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    focusable?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused.current?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  const dialog = (
    <Backdrop
      role="presentation"
      onMouseDown={e => {
        if (!allowCloseOnBackdrop) return;
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <DialogContainer
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'dialog-title' : undefined}
        className={className}
        onMouseDown={e => e.stopPropagation()}
      >
        <Header>
          {title && (
            <Box mt="s40">
              <H3 id="dialog-title">{title}</H3>
            </Box>
          )}
          <Button variant="basic" iconLeft="mdiClose" onClick={onClose} />
        </Header>
        {children}
      </DialogContainer>
    </Backdrop>
  );

  const portalTarget =
    typeof document !== 'undefined'
      ? document.getElementById('portal-root')
      : null;
  return portalTarget ? ReactDOM.createPortal(dialog, portalTarget) : dialog;
};
