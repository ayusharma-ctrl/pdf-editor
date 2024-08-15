import { Injectable, NotFoundException } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';
import { writeFile } from 'fs/promises';
import ResponseConstants from 'src/constants/response.constants';

@Injectable()
export class PdfService {
  private readonly pdfPath = join(process.cwd(), 'src/libs/example.pdf'); // pdf path

  // method to return the pdf file
  async loadPdf(res: Response) {
    try {
      return res.sendFile(this.pdfPath);
    } catch (err) {
      throw new NotFoundException(ResponseConstants.PDF.FILE_NOT_FOUND);
    }
  }

  // method to update the file data
  async savePdf(file: Express.Multer.File) {
    try {
      if (file) {
        await writeFile(this.pdfPath, file.buffer);
      }
      return { success: true, message: 'PDF saved successfully' };
    } catch (error) {
      throw new NotFoundException(ResponseConstants.PDF.FILE_FAILED_TO_UPDATE);
    }
  }
}
