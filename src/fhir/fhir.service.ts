import { Injectable } from '@nestjs/common';
// import { Client } from 'fhir.js';

import * as Client from 'fhir.js';

@Injectable()
export class FhirService {
  // private fhirClient: Client;
  private fhirClient;

  constructor() {
    this.fhirClient = new Client({
      baseUrl:
        'https://www.health.govt.nz/our-work/health-identity/national-health-index',
    });
  }

  async getFhirResource(resourceType: string, id: string) {
    return this.fhirClient.read({ resourceType, id });
  }

  async getPatient(id: string) {
    return this.fhirClient.read({ resourceType: 'Patient', id });
  }

  async createFhir(nhi: string, fhir: any) {
    return this.fhirClient.create({
      resourceType: 'Patient',
      body: fhir,
    });
  }

  async updateFhir(nhi: string, fhir: any) {
    return this.fhirClient.update({
      resourceType: 'Patient',
      id: nhi,
      body: fhir,
    });
  }
}
