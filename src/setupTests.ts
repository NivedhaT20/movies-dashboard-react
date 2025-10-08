import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util'; class ResizeObserver {
    observe() { }
    unobserve() { }
    disconnect() { }
}


global.ResizeObserver = ResizeObserver;


// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).TextEncoder = TextEncoder;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).TextDecoder = TextDecoder;

