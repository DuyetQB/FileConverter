// import libavifWasmUrl from './libavif.wasm';

let libavifModule = null;

const loadLibavifModule = async () => {
  if (!libavifModule) {
    const response = await fetch('/libavif.wasm');
    const wasmBuffer = await response.arrayBuffer();
    libavifModule = await WebAssembly.compile(wasmBuffer);
  }
  return libavifModule;
};

export default loadLibavifModule;