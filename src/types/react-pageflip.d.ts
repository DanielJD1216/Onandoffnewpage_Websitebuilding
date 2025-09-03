declare module 'react-pageflip' {
  import { Component, ReactNode } from 'react';

  interface PageFlipProps {
    width: number;
    height: number;
    size?: 'fixed' | 'stretch';
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    drawShadow?: boolean;
    flippingTime?: number;
    usePortrait?: boolean;
    startPage?: number;
    startZIndex?: number;
    autoSize?: boolean;
    maxShadowOpacity?: number;
    showCover?: boolean;
    mobileScrollSupport?: boolean;
    clickEventForward?: boolean;
    useMouseEvents?: boolean;
    swipeDistance?: number;
    showPageCorners?: boolean;
    disableFlipByClick?: boolean;
    style?: React.CSSProperties;
    className?: string;
    children: ReactNode;
    renderOnlyPageLengthChange?: boolean;
    onFlip?: (e: { data: number }) => void;
    onChangeOrientation?: (e: { data: 'portrait' | 'landscape' }) => void;
    onChangeState?: (e: { data: string }) => void;
    onInit?: (e: { data: any }) => void;
    onUpdate?: (e: { data: any }) => void;
  }

  export default class HTMLFlipBook extends Component<PageFlipProps> {}
}