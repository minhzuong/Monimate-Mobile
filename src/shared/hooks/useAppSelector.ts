import { useSelector } from 'react-redux';
import { RootState } from '@src/redux/store';
import isEqual from 'react-fast-compare';

function useAppSelector<T>(
  selector: (state: RootState) => T,
  equalityFn = isEqual,
): T {
  return useSelector<RootState, T>(selector, equalityFn);
}

export { useAppSelector };