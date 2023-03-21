import { BtnClassHook } from '../interface/componentProp';
import { useEffect, useState } from 'react';

function useBtnClass(state: BtnClassHook) {
  const [btnType, setBtnType] = useState(state.type);
  const [btnClassName, setBtnClassName] = useState(state.className);

  useEffect(() => {
    setBtnType(state.type);
    setBtnClassName(state.className);
    return () => {};
  }, [state]);

  return { btnType, btnClassName };
}

export default useBtnClass;
