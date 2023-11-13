# README

## Nest.js FHIR Project

This repository contains a Nest.js project that implements a FHIR (Fast Healthcare Interoperability Resources) API. The project is structured with controllers, resolvers, and a service to handle FHIR resources, specifically focused on Patient resources.

### Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/aashishrawte1/health-api.git
   ```

2. Install dependencies:

   ```bash
   cd health-api
   yarn
   ```

<!-- 3. Set up environment variables:
   Create a `.env` file in the root of the project and add the following:

   ```env
   BASE_URL=https://www.health.govt.nz/our-work/health-identity/national-health-index
   ``` -->

### Project Structure

- **`src/fhir/fhir.controller.ts`**: Defines the RESTful API routes for handling FHIR resources.

- **`src/fhir/fhir.resolver.ts`**: Implements GraphQL queries and mutations for FHIR resources.

- **`src/fhir/fhir.service.ts`**: Provides business logic for handling FHIR resources using the `fhir.js` client.

- **`src/graphql/schema.gql`**: Defines the GraphQL schema for the FHIR resources, including Patient and Medication types.

### Usage

#### RESTful API

- **GET FHIR Resource**

  ```http
  GET /fhir/:resourceType/:nhi
  ```

- **CREATE FHIR Resource**

  ```http
  POST /fhir/:resourceType
  ```

- **UPDATE FHIR Resource**

  ```http
  PUT /fhir/:resourceType/:nhi
  ```

#### GraphQL API

- **Query Patient FHIR Resource**

  ```graphql
  query {
    patient(id: "exampleNHI") {
      nhi
      name
    }
  }
  ```

- **Query All FHIR Resources**

  ```graphql
  query {
    fhir {
      patient {
        nhi
        name
      }
      date
      medications {
        id
        dosage
      }
    }
  }
  ```

- **Create FHIR Resource**

  ```graphql
  mutation {
    createFhir(nhi: "exampleNHI", fhir: { /* FHIR resource fields */ }) {
      patient {
        nhi
        name
      }
      date
      medications {
        id
        dosage
      }
    }
  }
  ```

- **Update FHIR Resource**

  ```graphql
  mutation {
    updateFhir(nhi: "exampleNHI", fhir: { /* Updated FHIR resource fields */ }) {
      patient {
        nhi
        name
      }
      date
      medications {
        id
        dosage
      }
    }
  }
  ```

### Major Required Dependencies

- **Nest.js**

- **fhir.js**
