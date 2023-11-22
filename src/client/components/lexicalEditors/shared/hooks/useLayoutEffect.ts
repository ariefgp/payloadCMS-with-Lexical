import {useEffect, useLayoutEffect} from 'react';
import { CAN_USE_DOM } from '@payloadcms/richtext-lexical';

const useLayoutEffectImpl: typeof useLayoutEffect = CAN_USE_DOM
  ? useLayoutEffect
  : useEffect;

export default useLayoutEffectImpl;