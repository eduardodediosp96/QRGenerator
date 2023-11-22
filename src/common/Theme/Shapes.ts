import { ShapesType, ShapeType } from './Theme.types';

const rounded: ShapeType = {
  none: '0',
  0: '0',
  1: '0.25rem',
  2: '1rem',
  3: '1.5rem',
};

const cut: ShapeType = {
  none: '0',
  0: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  1: 'polygon(2% 0, 100% 0, 100% 100%, 0 100%)',
  2: 'polygon(8% 0, 100% 0, 100% 100%, 0 100%)',
  3: 'polygon(12% 0, 100% 0, 100% 100%, 0 100%)',
};

export const shapes: ShapesType = {
  rounded,
  cut,
};
