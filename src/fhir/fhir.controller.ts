import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { FhirService } from './fhir.service';

@Controller('fhir')
export class FhirController {
  constructor(private readonly fhirService: FhirService) {}

  @Get(':resourceType/:nhi')
  async getFhirResource(
    @Param('resourceType') resourceType: string,
    @Param('nhi') nhi: string,
  ) {
    return this.fhirService.getFhirResource(resourceType, nhi);
  }

  @Post(':resourceType')
  async createFhirResource(
    @Param('resourceType') resourceType: string,
    @Body() fhirData: any,
  ) {
    return this.fhirService.createFhir(resourceType, fhirData);
  }

  @Put(':resourceType/:nhi')
  async updateFhirResource(
    @Param('resourceType') resourceType: string,
    @Param('nhi') nhi: string,
    @Body() updatedFhirData: any,
  ) {
    return this.fhirService.updateFhir(nhi, updatedFhirData);
  }
}
