import { isMobile } from './isMobile';

describe('isMobile', () => {
  it('should return true when window width is less than or equal to 768', () => {
    Object.defineProperty(window, 'innerWidth', { value: 768 });
    
    expect(isMobile()).toBe(true);
  });

  it('should return false when window width is greater than 768', () => {
    Object.defineProperty(window, 'innerWidth', { value: 1024 });
    
    expect(isMobile()).toBe(false);
  });

  it('should return false when window object is undefined', () => {
    Object.defineProperty(global, 'window', { value: undefined });
    
    expect(isMobile()).toBe(false);
  });
});