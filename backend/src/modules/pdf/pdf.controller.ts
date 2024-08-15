import {
  Controller,
  Get,
  Post,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  Version,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PdfService } from './pdf.service';
import { Response } from 'express';
import { UserGuard } from '../auth/user.guard';

@UseGuards(UserGuard)
@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Get()
  @Version('1')
  async loadPdf(@Res() res: Response) {
    return await this.pdfService.loadPdf(res);
  }

  @Post('save')
  @Version('1')
  @UseInterceptors(FileInterceptor('file'))
  async savePdf(@UploadedFile() file: Express.Multer.File) {
    return await this.pdfService.savePdf(file);
  }
}
