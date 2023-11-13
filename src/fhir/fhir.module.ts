import { Module } from '@nestjs/common';
import { FhirService } from './fhir.service';
import { FhirController } from './fhir.controller';

@Module({
  providers: [FhirService],
  exports: [FhirService],
  controllers: [FhirController],
})
export class FhirModule {}
