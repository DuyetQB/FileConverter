import loadLibavifModule from './index';

interface LibAvifExports {
  _malloc: Function;
  _free: Function;
  memory: WebAssembly.Memory;
  _encode_avif: Function;
  getValue: (ptr: number, type: string) => number;
  HEAPU8: Uint8Array;
}

const libavifModule = async (): Promise<LibAvifExports> => {
  const wasmModule = await loadLibavifModule();
  const { instance } = await WebAssembly.instantiate(wasmModule, {});

  const { exports } = instance;
  const memory = exports.memory as WebAssembly.Memory;
  const HEAPU8 = new Uint8Array(memory.buffer);

  return {
    _malloc: exports._malloc as Function,
    _free: exports._free  as Function,
    memory: exports.memory as WebAssembly.Memory,
    HEAPU8: HEAPU8,
    _encode_avif: exports._encode_avif  as Function,
    getValue: exports.getValue as LibAvifExports['getValue']
  };
};

export default libavifModule;
