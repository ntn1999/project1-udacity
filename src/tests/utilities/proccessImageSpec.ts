import processImage from '../../utilities/processImage';

describe('Tests for processImage utilities', () => {
  describe('function read a file image exist in folder', () => {
    it('should exist image', async () => {
      const data = await processImage.readImageExist('palmtunnel', '200', '200');
      expect(data).toEqual(false);
    });
    it('should not exist image', async () => {
      const data = await processImage.readImageExist('fjord', '200', '200');
      expect(data).toBeInstanceOf(Buffer);
    });
  });

  describe('function resize image has width height from url', () => {
    it('should resize image', async () => {
      const data = await processImage.resizedImage('fjord', '200', '200');
      expect(data).toBeInstanceOf(Buffer);
    });
  });
});
