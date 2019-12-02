import GeoPackage from "../../geoPackage";
import Extension from '../extension';
import BaseExtension from '../baseExtension';

/**
 * OGC Well known text representation of Coordinate Reference Systems extensionName
 */
export default class CrsWktExtension extends BaseExtension {
  public static readonly EXTENSION_NAME = 'gpkg_crs_wkt';
  public static readonly EXTENSION_CRS_WKT_AUTHOR = 'gpkg';
  public static readonly EXTENSION_CRS_WKT_NAME_NO_AUTHOR = 'crs_wkt';
  public static readonly EXTENSION_CRS_WKT_DEFINITION = 'http://www.geopackage.org/spec/#extension_crs_wkt';
  /**
   * OGC Well known text representation of Coordinate Reference Systems extensionName
   */
  constructor(geoPackage: GeoPackage) {
    super(geoPackage);
    this.extensionName = CrsWktExtension.EXTENSION_NAME;
    this.extensionDefinition = CrsWktExtension.EXTENSION_CRS_WKT_DEFINITION;
  }
  /**
   * Get or create the extension
   */
  getOrCreateExtension(): Promise<Extension> {
    return this.getOrCreate(this.extensionName, null, null, this.extensionDefinition, Extension.READ_WRITE);
  }
}