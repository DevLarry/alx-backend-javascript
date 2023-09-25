import createIteratorObject from './100-createIteratorObject';

export default function iterateThroughObject(reportWithIterator) {
  return createIteratorObject(reportWithIterator).join(' | ');
}
