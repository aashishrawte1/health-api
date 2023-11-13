import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FhirService } from './fhir.service';

@Resolver('Fhir')
export class FhirResolver {
  constructor(private readonly fhirService: FhirService) {}

  @Mutation('createFhir')
  async createFhir(@Args('nhi') nhi: string, @Args('fhir') fhir: '') {
    return this.fhirService.createFhir(nhi, fhir);
  }

  @Mutation('updateFhir')
  async updateFhir(@Args('nhi') nhi: string, @Args('fhir') fhir: '') {
    return this.fhirService.updateFhir(nhi, fhir);
  }

  @Query('fhir')
  async getPatient(@Args('nhi') nhi: string) {
    return this.fhirService.getPatient(nhi);
  }
}
