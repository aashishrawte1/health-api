import { Module } from '@nestjs/common';
// import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FhirController } from './fhir/fhir.controller';
import { FhirModule } from './fhir/fhir.module';
// import { FhirResolver } from './fhir/fhir.resolver';
import { FhirService } from './fhir/fhir.service';
import { GraphqlModule } from './graphql/graphql.module';
// import { ApolloDriver } from '@nestjs/apollo';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { FhirResolver } from './fhir/fhir.resolver';

@Module({
  imports: [
    GraphqlModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      resolvers: {
        FhirResolver,
      },
      context: {},
    }),
    FhirModule,
  ],
  controllers: [AppController, FhirController],
  providers: [AppService, FhirService],
})
export class AppModule {}
