import express from 'express';
import processImage from '../../utilities/processImage';
const images = express.Router();

images.get('/', async (req, res) => {
  const fileName = req.query.filename as string;
  const width = req.query.width as string;
  const height = req.query.height as string;
  const errorMessage =
    'The following error occured processing your image remendy and try again: Error: Input file is missing';

  const handleRequest = async () => {
    try {
      const imageExist = await processImage.readImageExist(
        fileName,
        width,
        height
      );
      if (imageExist) {
        res.end(imageExist);
      } else {
        const resizedImage = await processImage.resizedImage(
          fileName,
          width,
          height
        );
        res.writeHead(200, {
          'Content-Type': 'image/jpeg',
          'Content-Length': resizedImage.length,
        });
        res.end(resizedImage);
      }
    } catch (error) {
      res.status(500).send(errorMessage);
    }
  };

  handleRequest();
});

export default images;
