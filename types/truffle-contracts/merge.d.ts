/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

/// <reference types="truffle-typings" />

import * as TruffleContracts from ".";

declare global {
  namespace Truffle {
    interface Artifacts {
      require(name: "Adoption"): TruffleContracts.AdoptionContract;
      require(name: "Migrations"): TruffleContracts.MigrationsContract;
    }
  }
}
