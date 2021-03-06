import path from 'path';
import { GeoPackage } from '../geoPackage';
import { GeoPackageConstants } from '../geoPackageConstants';

/**
 * GeoPackageValidate module.
 * @module validate/geoPackageValidate
 *
 */

export class GeoPackageValidate {
  /**
   * Check the file extension to see if it is a GeoPackage
   * @param  {string}   filePath Absolute path to the GeoPackage to create
   * @return {boolean} true if GeoPackage extension
   */
  static hasGeoPackageExtension(filePath: string): boolean {
    const extension = path.extname(filePath);
    return (
      extension &&
      extension !== '' &&
      (extension.toLowerCase() === '.' + GeoPackageConstants.GEOPACKAGE_EXTENSION.toLowerCase() ||
        extension.toLowerCase() === '.' + GeoPackageConstants.GEOPACKAGE_EXTENDED_EXTENSION.toLowerCase())
    );
  }

  /**
   * Validate the extension file as a GeoPackage
   * @param  {string}   filePath Absolute path to the GeoPackage to create
   * @return {Error}    error if the extension is not valid
   */
  static validateGeoPackageExtension(filePath: string): Error {
    if (!GeoPackageValidate.hasGeoPackageExtension(filePath)) {
      return new Error(
        "GeoPackage database file '" +
          filePath +
          "' does not have a valid extension of '" +
          GeoPackageConstants.GEOPACKAGE_EXTENSION +
          "' or '" +
          GeoPackageConstants.GEOPACKAGE_EXTENDED_EXTENSION +
          "'",
      );
    }
  }

  /**
   * Check the GeoPackage for the minimum required tables
   * @param  {Object}   geoPackage GeoPackage to check
   */
  static hasMinimumTables(geoPackage: GeoPackage): boolean {
    const srsExists = geoPackage.spatialReferenceSystemDao.isTableExists();
    const contentsExists = geoPackage.contentsDao.isTableExists();
    return srsExists && contentsExists;
  }

  /**
   * Validation callback is passed an error if the validation failed.
   * @callback module:validate/geoPackageValidate~validationCallback
   * @param {Error} null if no error, otherwise describes the error
   */
}
